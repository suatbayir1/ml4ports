import joblib
import pandas as pd
from data.good_groups import goods_groups
from data.company_groups import company_groups
# from sklearn.preprocessing import LabelEncoder

def find_key(d, element):
    for key in d:
        if element in d[key]:
            return key
    return 100

def fill_nans(li):
    res = []
    for x in li:
        if(len(x) == 0):
            res.append("empty") 
        else:
            res.append(x) 
    return res

def prepare_data(tday_input):
    df_records = {'REGIME_KEY': tday_input.regime_key, 'C_KIND': tday_input.c_kind, 'C_TYPE': tday_input.c_type,
       'FIRST_SERVICE_NAME': tday_input.first_service_name, 'TEU': tday_input.teu, 'FIRST_LINE_KEY': tday_input.first_line_key,
       'LAST_LINE_KEY': tday_input.last_line_key, 'DISCHARGE_LINE': fill_nans(tday_input.discharge_line), 'DEPARTUREPORT': fill_nans(tday_input.departure_port), 
       'LOADPORT': fill_nans(tday_input.load_port), 'LOAD_LINE': fill_nans(tday_input.load_line), 'GOODS_NAME': tday_input.good, 'COMPANY': tday_input.company}
    
    df = pd.DataFrame(df_records)
    df['GOOD_CAT'] = df['GOODS_NAME'].apply(lambda x: goods_groups[x])
    df['COMPANY_CAT'] = df['COMPANY'].apply(lambda x: find_key(company_groups, x))
    df = df.drop(["COMPANY", "GOODS_NAME"], axis=1)

    print(df)
    # df.to_csv("./before.csv")  

    # Load the saved LabelEncoder from a file
    le_c_kind = joblib.load('./encoders/tday_le_c_kind.joblib')
    print("classes:", le_c_kind.classes_)
    le_c_type = joblib.load('./encoders/tday_le_c_type.joblib')
    le_first_service_name = joblib.load('./encoders/tday_first_service_name.joblib')
    le_first_line_key = joblib.load('./encoders/tday_first_line_key.joblib')
    le_last_line_key = joblib.load('./encoders/tday_last_line_key.joblib')
    le_discharge_line = joblib.load('./encoders/tday_discharge_line.joblib')
    le_load_port = joblib.load('./encoders/tday_load_port.joblib')
    le_departure_port = joblib.load('./encoders/tday_departure_port.joblib')
    le_load_line = joblib.load('./encoders/tday_load_line.joblib')
    le_regime_key = joblib.load('./encoders/tday_regime_key.joblib')
    le_teu = joblib.load('./encoders/tday_teu.joblib')

    df['C_KIND'] = le_c_kind.transform(df['C_KIND'])
    df['C_TYPE'] = le_c_type.transform(df['C_TYPE'])
    df['FIRST_SERVICE_NAME'] = le_first_service_name.transform(df['FIRST_SERVICE_NAME'])
    df['FIRST_LINE_KEY'] = le_first_line_key.transform(df['FIRST_LINE_KEY'])
    df['LAST_LINE_KEY'] = le_last_line_key.transform(df['LAST_LINE_KEY'])
    print("-----------")
    print(le_discharge_line.classes_)
    print(df['DISCHARGE_LINE'])
    df['DISCHARGE_LINE'] = le_discharge_line.transform(df['DISCHARGE_LINE'])
    df['LOADPORT'] = le_load_port.transform(df['LOADPORT'])
    df['DEPARTUREPORT'] = le_departure_port.transform(df['DEPARTUREPORT'])
    df['LOAD_LINE'] = le_load_line.transform(df['LOAD_LINE'])
    df['REGIME_KEY'] = le_regime_key.transform(df['REGIME_KEY'])
    df['TEU'] = le_teu.transform(df['TEU'])

    print(df)
    # df.to_csv("./after.csv") 
    return df