from pydantic import BaseModel

class ShipCountPredictInput(BaseModel):
    dayofyear: int
    dayofweek: int
    dayofmonth: int
    quarter: int
    month: int
    year: int
    one_d: int
    two_d: int
    three_d: int
    four_d: int
    five_d: int
    six_d: int
    seven_d: int
    thirty_d: int

class ShipCountFifteenDayInput(BaseModel):
    dayofyear: int
    dayofweek: int
    dayofmonth: int
    quarter: int
    month: int
    year: int
    one_d: int
    two_d: int
    three_d: int
    four_d: int
    five_d: int
    six_d: int
    seven_d: int
    fourteen_d: int
  
class ShipCountThirtyDayInput(BaseModel):
    dayofyear: int
    dayofweek: int
    dayofmonth: int
    quarter: int
    month: int
    year: int
    one_d: int
    two_d: int
    three_d: int
    four_d: int
    five_d: int
    six_d: int
    seven_d: int
    fourteen_d: int
    twentynine_d: int

class ShipCountSixtyDayInput(BaseModel):
    dayofyear: int
    dayofweek: int
    dayofmonth: int
    quarter: int
    month: int
    year: int
    one_d: int
    two_d: int
    three_d: int
    four_d: int
    five_d: int
    six_d: int
    seven_d: int
    fourteen_d: int
    twentynine_d: int
    fiftynine_d: int
  