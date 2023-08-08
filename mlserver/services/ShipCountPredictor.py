import xgboost as xgb
import requests
import pandas as pd
import os
from params.ShipCountPredictInput import ShipCountPredictInput, ShipCountFifteenDayInput, ShipCountThirtyDayInput, ShipCountSixtyDayInput

class ShipCountPredictor():
    def __init__(self) -> None:
        self.seven_day_model = xgb.XGBRegressor()
        self.five_day_model = xgb.XGBRegressor()
        self.fifteen_day_model = xgb.XGBRegressor()
        self.thirty_day_model = xgb.XGBRegressor()
        self.sixty_day_model = xgb.XGBRegressor()

        self.seven_day_model.load_model("seven_day_ship_count_predict_model.json")
        self.five_day_model.load_model("five_day_ship_count_predict_model.json")
        self.fifteen_day_model.load_model("fifteen_day_ship_count_predict_model.json")
        self.thirty_day_model.load_model("thirty_day_ship_count_predict_model.json")
        self.sixty_day_model.load_model("sixty_day_ship_count_predict_model.json")

    def seven_day_thresholds(self, result: float) -> int:
        val = result
        if result >= 4:
            val = 5
        elif result < 4 and result >= 3.8:
            val = 4
        elif result < 3.8 and result >= 2.8:
            val = 3
        elif result < 2.8:
            val = 2
        return val
    
    def five_day_thresholds(self, result: float) -> int:
        val = result
        if result >= 3.2:
            val = 4
        elif result < 3.2 and result >= 2.2:
            val = 3
        elif result < 2.2 and result >= 1.8:
            val = 2
        elif result < 1.8:
            val = 1
        return val

    def seven_day(self, input: ShipCountPredictInput) -> int:
        next = pd.DataFrame([[input.dayofyear, input.dayofweek, input.dayofmonth, input.quarter, input.month, input.year, input.one_d, input.two_d, input.three_d, input.four_d, input.five_d, input.six_d, input.seven_d, input.thirty_d]],
             columns = ["dayofyear", "dayofweek", "dayofmonth", "quarter", "month", "year", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "30d"])
        pred = self.seven_day_model.predict(next)
        
        return self.seven_day_thresholds(pred[0].item())
    
    def five_day(self, input: ShipCountPredictInput) -> int:
        next = pd.DataFrame([[input.dayofyear, input.dayofweek, input.dayofmonth, input.quarter, input.month, input.year, input.one_d, input.two_d, input.three_d, input.four_d, input.five_d, input.six_d, input.seven_d, input.thirty_d]],
             columns = ["dayofyear", "dayofweek", "dayofmonth", "quarter", "month", "year", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "30d"])
        pred = self.five_day_model.predict(next)
        
        return self.five_day_thresholds(pred[0].item())
    
    def fifteen_day(self, input: ShipCountFifteenDayInput) -> int:
        next = pd.DataFrame([[input.dayofyear, input.dayofweek, input.dayofmonth, input.quarter, input.month, input.year, input.one_d, input.two_d, input.three_d, input.four_d, input.five_d, input.six_d, input.seven_d, input.fourteen_d]],
             columns = ["dayofyear", "dayofweek", "dayofmonth", "quarter", "month", "year", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "14d"])
        pred = self.fifteen_day_model.predict(next)
        
        return round(pred[0].item())
    
    def thirty_day(self, input: ShipCountThirtyDayInput) -> int:
        next = pd.DataFrame([[input.dayofyear, input.dayofweek, input.dayofmonth, input.quarter, input.month, input.year, input.one_d, input.two_d, input.three_d, input.four_d, input.five_d, input.six_d, input.seven_d, input.fourteen_d, input.twentynine_d]],
             columns = ["dayofyear", "dayofweek", "dayofmonth", "quarter", "month", "year", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "14d", "29d"])
        pred = self.thirty_day_model.predict(next)
        
        return round(pred[0].item())
    
    def sixty_day(self, input: ShipCountSixtyDayInput) -> int:
        next = pd.DataFrame([[input.dayofyear, input.dayofweek, input.dayofmonth, input.quarter, input.month, input.year, input.one_d, input.two_d, input.three_d, input.four_d, input.five_d, input.six_d, input.seven_d, input.fourteen_d, input.twentynine_d, input.fiftynine_d]],
             columns = ["dayofyear", "dayofweek", "dayofmonth", "quarter", "month", "year", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "14d", "29d", "59d"])
        pred = self.sixty_day_model.predict(next)
        
        return round(pred[0].item())