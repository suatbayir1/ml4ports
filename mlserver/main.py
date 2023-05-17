import dill
import joblib
from typing import List
from fastapi import FastAPI
from pydantic import BaseModel
from helpers import prepare_data
from data.good_groups import goods_groups
from data.company_groups import company_groups

# PYTHONPATH=.. uvicorn main:app --reload

app = FastAPI()

class TdayInput(BaseModel):
    # name: str
    # price: float
    # is_offer: Union[bool, None] = None
    regime_key: List[int]
    c_kind: List[str]
    c_type: List[str]
    first_service_name: List[str]
    teu: List[int]
    first_line_key: List[int]
    last_line_key: List[int]
    discharge_line: List[str]
    departure_port: List[str]
    load_port: List[str]
    load_line: List[str]
    good: List[str]
    company: List[str]

class GumrukInput(BaseModel):
    regime_key: List[int]
    c_kind: List[str]
    c_type: List[str]
    first_service_name: List[str]
    teu: List[int]
    first_line_key: List[int]
    last_line_key: List[int]
    discharge_line: List[str]
    departure_port: List[str]
    load_port: List[str]
    load_line: List[str]
    good: List[str]
    company: List[str]

async def load_model(model_path):
    # Load your machine learning model
    return joblib.load(model_path)

async def load_gumruk_model(model_path):
    # Load the model and custom scoring function using dill
    with open(model_path, 'rb') as f:
        model_pkl, scoring = dill.load(f)
    return model_pkl, scoring

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/company_groups")
def get_company_groups():
    return company_groups

@app.get("/company_groups/{group_id}")
def get_company_group(group_id: int):
    if group_id in company_groups:
        return {"group_id": group_id, "group": company_groups[group_id]}
    else:
        return {"msg": "This group id does not exist."}

@app.get("/goods_groups")
def get_good_groups():
    return goods_groups

@app.post("/tday_input")
async def make_tday_prediction(tday_input: TdayInput):
    
    # Wait for the model to be loaded
    tday_model = await load_model("./models/randomforest_model.joblib")
    # tday_model = joblib.load("./models/randomforest_model.joblib")
    df = prepare_data(tday_input)
    prediction = tday_model.predict(df)
    print("prediction:", prediction)
    params = tday_model.get_params()
    print(params)
    if(len(prediction) == 0):
        return{"msg": "No prediction"}
    return {"prediction": list(prediction)}

# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: Item):
#     return {"item_name": item.name, "item_id": item_id}

@app.post("/gumruk_input")
async def make_gumruk_prediction(gumruk_input: GumrukInput):
    
    # Wait for the model to be loaded    
    gumruk_model, scoring = await load_gumruk_model('./models/gumruk_ensemble_model.pkl')
    # tday_model = joblib.load("./models/randomforest_model.joblib")
    df = prepare_data(gumruk_input)
    predictions = gumruk_model.predict_proba(df.drop(["FIRST_SERVICE_NAME", "C_KIND"], axis=1))[:, 1]
    best_threshold = 0.3
    preds = (predictions > best_threshold).astype(int)
    print("prediction:", preds)
    params = gumruk_model.get_params()
    print(params)
    if(len(preds) == 0):
        return{"msg": "No prediction"}
    return {"prediction": preds.tolist()}