import pandas as pd
import numpy as np
import json
import random
import math
from datetime import datetime, timedelta

cfs_services = {
    "Muayene": 81,
    "Tam Tespit": 8,
    "Tam Tespit+Tartı": 125,
    "İc Dolum": 4,
    "İç Boşaltım": 5,
    "Numune Alma": 19,
    "X-Ray Hizmeti": 103,
    "Aktarmalı Muayene": 9,
    "Tartı": 26,
    "Tartı - Aktarmalı": 86,
    "Tartı+Akt. Muayene": 121,
    "Tartı+Tam Tespit": 123
}

seal_codes = {
    "Seal Kırma": 12,
    "Seal Takma": 27
}

ihracat_start = {
    "Kapı Giriş": 6,
    "Kapı Giriş - Tartılı": 85,
    "Kapı Giriş Tranfer": 105
}

ihracat_end = {
    "Yükleme": 3 # gemiye yükleme
}

ithalat_start = {
    "Tahliye": 2 # gemi tahliye
}

ithalat_end = {
    "Kapı Çıkış": 7,
    "Kapı Çıkış - Tartılı": 118,
    "Kapı Çıkış Transfer": 106
}

only_one_time_services = {
    # "Ardiye": 1,
    "Kapı Çıkış": 7,
    "Kapı Çıkış - Tartılı": 118,
    "Kapı Giriş": 6,
    "Kapı Giriş - Tartılı": 85,
    "Yükleme": 3,
    "Tahliye": 2,
    "Kilit Açma / Kapama": 15,
    "ISPS": 112
}
# iç boşaltım(5) 2018-12'den beri yok
# iç boşaltım Kont.Boşaltma(28) mı oldu?

# eğer ardiye hiç yoksa eklenecek noktalar
ardiye_parents = {
    "Kont.Boşaltma": 28,
    "İc Dolum": 4,
    "Yükleme": 3,
    "Kapı Çıkış": 7,
    "Kapı Çıkış - Tartılı": 118,
    "Ambara Boşaltma": 29
}

check_services = {
    "Branda Sökme-Takma": 97,
    "Kapı Çıkış - Tartılı": 118,
    "Kapı Giriş - Tartılı": 85,
    "Nakliye (X-Ray için)": 101,
    "Tartı - Aktarmalı": 86,
    "X-Ray Hizmeti": 103
}

def get_random_path_ending(tree, current_node):
    path = [current_node]

    while current_node in tree:
        # print("curr node", current_node)
        edges = tree[current_node]
        # print("edges", edges)
        mid = list(edges.keys())
        # print("mid", mid)
        mid.remove("cids")
        # print("mid", mid)
        weights = [x["count"] for x in [edges[y] for y in mid]]
        stimes = [x["success_time"] for x in [edges[y] for y in mid]] # list(edges.values())

        cids = edges["cids"]
        # print("weights", weights)
        # print("stimes", stimes)

        choices = [(x, y) for x, y in zip(mid, stimes)]
        # print("choices", choices)


        # break

        if not choices:
            break

        next_node = random.choices(choices, weights=weights)[0]

        cont_count = sum(list(next_node[1].values()))
        rand_selected = random.randint(1, cont_count)

        stimes_keys = sorted(list(next_node[1].keys()), key=int)

        # s_key_index = 0
        # s_key = stimes_keys[s_key_index] # duration keylerinden ilkini al
        # key_sum = stimes[s_key] # duration keylerinden ilkinin cont sayısı

        s_key = stimes_keys[0] # duration keylerinden ilkini al
        key_sum = 0

        for i in range(len(stimes_keys)):
          s_key = stimes_keys[i] # duration keylerinden ilkini al
          key_sum += next_node[1][s_key] # duration keylerinden ilkinin cont sayısı
          if(rand_selected<=key_sum):
            break
          elif(rand_selected>key_sum):
            continue



        # for i in range(1, len(cont_count)):
        #   counter = i
        #   if(counter>key_sum):

        #   if(counter == rand_selected)


        path.append((next_node[0], s_key, cids))

        current_node = next_node[0]

    return path


def print_random_paths_ending(tree, start_node, num_paths):
    for _ in range(num_paths):
        random_path = get_random_path_ending(tree, start_node)
        print("Random Path:", random_path)

def store_random_paths(tree, start_node, num_paths):
    storage = []
    for _ in range(num_paths):
        random_path = get_random_path_ending(tree, start_node)
        # print("Random Path:", random_path)
        storage.append(random_path)
    return storage

def check_cfs_job_seal_status(pd_data, container_count):
    cfs_exclude_ids = []
    for j in range(1, container_count):
        sealk_count = 0
        sealt_count = 0
        cfs_count = 0
        data = pd_data[pd_data["container_key"] == j]
        for i in range(len(data)):
            if((data.iloc[i]["job"] in list(cfs_services.keys())) and (data.iloc[i]["parent_job"] == "NULL")):
                cfs_count += 1
            if(data.iloc[i]["job"] == "Seal Kırma"):
                sealk_count += 1
            if(data.iloc[i]["job"] == "Seal Takma"):
                sealt_count += 1

        if(sealk_count != sealt_count and sealk_count != cfs_count):
            # print(j)
            cfs_exclude_ids.append(j)
            # print("cfs_count", cfs_count)
            # print("sealk_count", sealk_count)
            # print("sealt_count", sealt_count)
    return cfs_exclude_ids

def check_one_time_status(pd_data, container_count):
    one_time_exclude_ids = []
    for j in range(1, container_count):
        counter = {}
        for s in list(only_one_time_services.keys()):
            counter[s] = 0
        data = pd_data[pd_data["container_key"] == j]
        for i in range(len(data)):
            if((data.iloc[i]["job"] in list(only_one_time_services.keys())) and (data.iloc[i]["parent_job"] == "NULL")):
                counter[data.iloc[i]["job"]] += 1
        for x in counter:
            if(counter[x]>1):
                # print(j, counter)
                one_time_exclude_ids.append(j)
                break
    return one_time_exclude_ids

def check_ardiye_status(pd_data, container_count):
    ardiye_exclude_ids = []
    for j in range(1, container_count):
        ardiye_count = 0
        ardiye_parent = 0
        data = pd_data[pd_data["container_key"] == j]
        for i in range(len(data)):
            if((data.iloc[i]["job"] in list(ardiye_parents.keys())) and (data.iloc[i]["parent_job"] == "NULL")):
                ardiye_parent += 1
            if((data.iloc[i]["job"]=="Ardiye") and (data.iloc[i]["parent_job"] != "NULL")):
                ardiye_count += 1
        if(ardiye_count != ardiye_parent):
            ardiye_exclude_ids.append(j)
            # print(j, ardiye_count, ardiye_parent)
    return ardiye_exclude_ids

def check_isps_status(pd_data, container_count):
    isps_kilit_cids = []
    for j in range(1, container_count):
        nakliye_count = 0
        isps_count = 0
        kilit_count = 0
        data = pd_data[pd_data["container_key"] == j]
        for i in range(len(data)):
            if((data.iloc[i]["job"] == "Nakliye")): # and (data.iloc[i]["parent_name"] == "nan")
                nakliye_count += 1
            if(data.iloc[i]["job"] == "ISPS"):
                isps_count += 1
            if(data.iloc[i]["job"] == "Kilit Açma / Kapama"):
                kilit_count += 1

        if(nakliye_count != isps_count and nakliye_count != kilit_count):
            # print(j)
            isps_kilit_cids.append(j)
            # print("nakliye_count", nakliye_count)
            # print("isps_count", isps_count)
            # print("kilit_count", kilit_count)
    return isps_kilit_cids

rules = {
    "cfs": check_cfs_job_seal_status,
    "one": check_one_time_status,
    "ardiye": check_ardiye_status,
    "isps": check_isps_status
}


def return_random_path(changing_status_storage, start_date_time, container_count, selected_rules):
    changing_status_records = []
    for j, container in enumerate(changing_status_storage):
        # her container içi
        cont_key = j+1
        last_path = changing_status_storage[j][-1][0].split("|")

        steps = []
        for step in last_path:
            steps.append(step.split("*"))

        first_cont_status = steps[0][0]
        cont_type = steps[0][1]
        first_regime = steps[0][2]

        records = []
        for i in range(4, len(container)):
            if(steps[i-4][0] == "end"):
                break

            job_order = i-3

            curr_cont_status = ""
            curr_cont_regime = ""
            job = ""
            parent = ""

            if(i-4==0):
                curr_cont_status = steps[i-4][3]
                curr_cont_regime = steps[i-4][4]
                job = steps[i-4][6]
                parent = steps[i-4][7]

            else:
                curr_cont_status = steps[i-4][1]
                curr_cont_regime = steps[i-4][2]
                job = steps[i-4][3]
                parent = steps[i-4][4]


            record = {
                "job_order": job_order,
                "container_key": cont_key,
                "first_container_status": first_cont_status,
                "container_type": cont_type,
                "first_container_regime": first_regime,
                "current_container_status": curr_cont_status,
                "current_container_regime": curr_cont_regime,
                "job": job,
                "parent_job": parent,
                "duration": container[i][1],
                "cids": ",".join([str(x) for x in container[i][2]])
            }
            records.append(record)
        changing_status_records += records
    
    changing_status_pd = pd.DataFrame.from_records(changing_status_records, columns=["job_order", "container_key", "first_container_status", "container_type",
                                                                                 "first_container_regime","current_container_status", "current_container_regime", "job", "parent_job", "duration", "cids"])
    
    changing_status_pd["parent_job"].fillna('NULL', inplace=True)

    changing_status_pd["success_datetime"] = start_date_time # .strftime("%Y-%m-%d %H:%M:%S")

    for i in range(0, len(changing_status_pd)):
        if(changing_status_pd.iloc[i]["job_order"] == 1):
            pass
        else:
            before_datetime = datetime.strptime(changing_status_pd.iloc[i-1]["success_datetime"], "%Y-%m-%d %H:%M:%S")
            changing_status_pd.loc[i, "success_datetime"] = (before_datetime + timedelta(minutes=int(changing_status_pd.iloc[i]["duration"]))).strftime("%Y-%m-%d %H:%M:%S")

    # cfs_exclude_ids = check_cfs_job_seal_status(changing_status_pd, container_count)
    # one_time_exclude_ids = check_one_time_status(changing_status_pd, container_count)
    # ardiye_exclude_ids = check_ardiye_status(changing_status_pd, container_count)
    # isps_kilit_cids = check_isps_status(changing_status_pd, container_count)
    exclude_ids = []

    for selected_rule in selected_rules:
        exclude_ids += rules[selected_rule](changing_status_pd, container_count)

    mask = ~changing_status_pd['container_key'].isin(exclude_ids)
    # Filter the DataFrame using the mask
    filtered_df = changing_status_pd[mask]

    print(len(changing_status_pd), len(filtered_df))
    return filtered_df.to_dict("records")
