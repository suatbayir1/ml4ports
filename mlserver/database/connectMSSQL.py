import pypyodbc as odbc

DRIVER_NAME = "SQL SERVER"
SERVER_NAME = "DESKTOP-DRC8T6C"
DATABASE_NAME = "PORTDATA"

connection_string = f"""
    DRIVER={{{DRIVER_NAME}}};
    SERVER={SERVER_NAME};
    DATABASE={DATABASE_NAME}
    Trust_Connection=yes;
    uid=sa;
    password=erste2023;
"""

connection = odbc.connect('DRIVER={SQL Server};SERVER=DESKTOP-DRC8T6C;PORT=1433;DATABASE=PORTDATA;UID=sa;PWD=erste2023')
cursor = connection.cursor()