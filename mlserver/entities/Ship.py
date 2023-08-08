import pandas as pd
import numpy as np
from database.connectMSSQL import cursor, connection
from constants.queries.ship import distribution_of_total_ship_count_by_days

class Ship():
    def get_distribution_of_total_ship_count_by_days(self) -> object:
        df = pd.read_sql(distribution_of_total_ship_count_by_days, connection)
        idx = pd.date_range(start = df.iloc[0]['date'], end = df.iloc[-1]['date'])
        df = df.set_index("date")
        df.index = pd.to_datetime(df.index)
        df = df.reindex(idx, fill_value=0)
        df["next_5"] = df['total'].rolling(5).sum().shift(-5).values
        df["next_7"] = df['total'].rolling(7).sum().shift(-7).values
        df["next_15"] = df['total'].rolling(15).sum().shift(-15).values
        df["next_30"] = df['total'].rolling(30).sum().shift(-30).values
        df["next_60"] = df['total'].rolling(60).sum().shift(-60).values

        five_df = df.groupby(['next_5'])['next_5'].count()
        five_df = pd.DataFrame({'x': five_df.index, 'y': five_df.values})
        five_df['x'] = five_df['x'].apply(np.int64)

        seven_df = df.groupby(['next_7'])['next_7'].count()
        seven_df = pd.DataFrame({'x': seven_df.index, 'y': seven_df.values})
        seven_df['x'] = seven_df['x'].apply(np.int64)

        fifteen_df = df.groupby(['next_15'])['next_15'].count()
        fifteen_df = pd.DataFrame({'x': fifteen_df.index, 'y': fifteen_df.values})
        fifteen_df['x'] = fifteen_df['x'].apply(np.int64)

        thirty_df = df.groupby(['next_30'])['next_30'].count()
        thirty_df = pd.DataFrame({'x': thirty_df.index, 'y': thirty_df.values})
        thirty_df['x'] = thirty_df['x'].apply(np.int64)

        sixty_df = df.groupby(['next_60'])['next_60'].count()
        sixty_df = pd.DataFrame({'x': sixty_df.index, 'y': sixty_df.values})
        sixty_df['x'] = sixty_df['x'].apply(np.int64)
        
        return {
            "five_days": five_df.to_dict('records'), 
            "seven_days": seven_df.to_dict('records'),
            "fifteen_days": fifteen_df.to_dict('records'),
            "thirty_days": thirty_df.to_dict('records'),
            "sixty_days": sixty_df.to_dict('records'),
        }