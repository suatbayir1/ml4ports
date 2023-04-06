const getContainersQuery = `SELECT
 DD.CONTAINER_KEY,DD.CONTAINER_NO, CS.DESCRIPTION AS C_STATUS, CK.DESCRIPTION AS C_KIND, CT.DESCRIPTION AS C_TYPE,
  CJO_F.SUCCESS_DATE_TIME AS FIRST_DATETIME, SG.SERVICE_NAME AS FIRST_SERVICE_NAME,
  CJO_L.SUCCESS_DATE_TIME AS LAST_DATETIME, SG1.SERVICE_NAME AS LAST_SERVICE_NAME,
  ISNULL(C.COMPANY_NAME, CA.COMPANY_NAME) AS COMPANY ,
  G.GOODS_NAME,
  DD.TDAY AS TDAY,DD.TEU AS TEU,
  FL.LINE_NAME AS DISCHARGE_LINE,
  FO.DEPARTURE_NUMBER AS DISCHARGE_DEPARTURE_NUMBER, 
  FS.SHIP_NAME AS DISCHARGE_SHIP_NAME,
  FP.PORT_NAME AS DEPARTUREPORT,FP1.PORT_NAME AS LOADPORT,
  LL.LINE_NAME AS LOAD_LINE,
  LO.DEPARTURE_NUMBER AS LOAD_DEPARTURE_NUMBER, 
  LS.SHIP_NAME AS LOAD_SHIP_NAME,
  LP.PORT_NAME AS FINALPORT,LP1.PORT_NAME AS DISCHARGEPORT,
  W1.WAREHOUSE_KEY,SD.FIRST_CONTAINER_JOB_ORDER_KEY
FROM PORTDATA.DBO.DUMMY_DWELL2 DD
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_STATUS CS ON CS.CONTAINER_STATUS_KEY = DD.CONTAINER_STATUS_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_TYPES CT ON CT.CONTAINER_TYPE_KEY = DD.CONTAINER_TYPE_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_KINDS CK ON CK.CONTAINER_KIND_KEY = DD.CONTAINER_KIND_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_STORAGE_DAYS SD ON SD.STORAGE_DAY_KEY = DD.STORAGE_DAY_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_JOB_ORDERS CJO_F ON CJO_F.MAIN_CONTAINER_JOB_ORDER_KEY = SD.FIRST_CONTAINER_JOB_ORDER_KEY AND CJO_F.OFFER_TYPE = DD.FOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_JOB_ORDERS CJO_L ON CJO_L.MAIN_CONTAINER_JOB_ORDER_KEY = SD.LAST_CONTAINER_JOB_ORDER_KEY AND CJO_L.OFFER_TYPE = DD.LOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_SERVICE_GROUPS SG ON SG.OFFER_TYPE = DD.FOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_SERVICE_GROUPS SG1 ON SG1.OFFER_TYPE = DD.LOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_COMPANIES CA ON CA.COMPANY_KEY=DD.AGENT_COMPANY_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_WAREHOUSE W1 ON W1.WAREHOUSE_KEY =
(SELECT TOP 1 WX.WAREHOUSE_KEY FROM PORTDATA.DBO.V_TBL_WAREHOUSE WX
       WHERE WX.CONTAINER_JOB_ORDER_KEY = CJO_F.CONTAINER_JOB_ORDER_KEY)
LEFT JOIN PORTDATA.DBO.V_TBL_COMPANIES C ON C.COMPANY_KEY=W1.COMPANY_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_GOODS G ON G.GOODS_KEY = W1.GOODS_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_ORDERS FO ON FO.ORDER_KEY = CJO_F.ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_ORDERS LO ON LO.ORDER_KEY = CJO_L.ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_LINES FL ON FL.LINE_KEY = FO.LINE_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_LINES LL ON LL.LINE_KEY = LO.LINE_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_SHIPS FS ON FS.SHIP_KEY = FO.SHIP_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_SHIPS LS ON LS.SHIP_KEY = LO.SHIP_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_SHIP_ORDERS FCSO ON FCSO.CONTAINER_SHIP_ORDER_KEY = CJO_F.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_BAY_PLAN FBP ON FBP.CONTAINER_SHIP_ORDER_KEY = FCSO.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS FP ON FP.PORT_KEY = FBP.DEPT_PORT_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS FP1 ON FP1.PORT_KEY = FBP.LOAD_PORT_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_SHIP_ORDERS LCSO ON LCSO.CONTAINER_SHIP_ORDER_KEY = CJO_L.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_BAY_PLAN LBP ON LBP.CONTAINER_SHIP_ORDER_KEY = LCSO.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS LP ON LP.PORT_KEY = LBP.DLVR_PORT_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS LP1 ON LP1.PORT_KEY = LBP.DISC_PORT_KEY
--WHERE DD.CONTAINER_KEY IN (1235031 ,1078490,338284,1263563,1263705,1259897)
ORDER BY DD.CONTAINER_KEY, FIRST_DATETIME`;

const getNumberOfGroupsByContainerType = (time) => `SELECT
CT.DESCRIPTION AS C_TYPE, count(*) as count
FROM PORTDATA.DBO.DUMMY_DWELL2 DD
LEFT JOIN PORTDATA.DBO.V_TBL_REGIMES REG ON REG.REGIME_KEY = DD.REGIME_KEY 
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_STATUS CS ON CS.CONTAINER_STATUS_KEY = DD.CONTAINER_STATUS_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_TYPES CT ON CT.CONTAINER_TYPE_KEY = DD.CONTAINER_TYPE_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_KINDS CK ON CK.CONTAINER_KIND_KEY = DD.CONTAINER_KIND_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_STORAGE_DAYS SD ON SD.STORAGE_DAY_KEY = DD.STORAGE_DAY_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_JOB_ORDERS CJO_F ON CJO_F.MAIN_CONTAINER_JOB_ORDER_KEY = SD.FIRST_CONTAINER_JOB_ORDER_KEY AND CJO_F.OFFER_TYPE = DD.FOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_JOB_ORDERS CJO_L ON CJO_L.MAIN_CONTAINER_JOB_ORDER_KEY = SD.LAST_CONTAINER_JOB_ORDER_KEY AND CJO_L.OFFER_TYPE = DD.LOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_SERVICE_GROUPS SG ON SG.OFFER_TYPE = DD.FOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_SERVICE_GROUPS SG1 ON SG1.OFFER_TYPE = DD.LOFFER_TYPE
LEFT JOIN PORTDATA.DBO.V_TBL_COMPANIES CA ON CA.COMPANY_KEY=DD.AGENT_COMPANY_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_WAREHOUSE W1 ON W1.WAREHOUSE_KEY =
(SELECT TOP 1 WX.WAREHOUSE_KEY FROM PORTDATA.DBO.V_TBL_WAREHOUSE WX
       WHERE WX.CONTAINER_JOB_ORDER_KEY = CJO_F.CONTAINER_JOB_ORDER_KEY)
LEFT JOIN PORTDATA.DBO.V_TBL_COMPANIES C ON C.COMPANY_KEY=W1.COMPANY_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_GOODS G ON G.GOODS_KEY = W1.GOODS_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_ORDERS FO ON FO.ORDER_KEY = CJO_F.ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_ORDERS LO ON LO.ORDER_KEY = CJO_L.ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_LINES FL ON FL.LINE_KEY = FO.LINE_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_LINES LL ON LL.LINE_KEY = LO.LINE_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_SHIPS FS ON FS.SHIP_KEY = FO.SHIP_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_SHIPS LS ON LS.SHIP_KEY = LO.SHIP_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_SHIP_ORDERS FCSO ON FCSO.CONTAINER_SHIP_ORDER_KEY = CJO_F.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_BAY_PLAN FBP ON FBP.CONTAINER_SHIP_ORDER_KEY = FCSO.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS FP ON FP.PORT_KEY = FBP.DEPT_PORT_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS FP1 ON FP1.PORT_KEY = FBP.LOAD_PORT_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_CONTAINER_SHIP_ORDERS LCSO ON LCSO.CONTAINER_SHIP_ORDER_KEY = CJO_L.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_BAY_PLAN LBP ON LBP.CONTAINER_SHIP_ORDER_KEY = LCSO.CONTAINER_SHIP_ORDER_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS LP ON LP.PORT_KEY = LBP.DLVR_PORT_KEY
LEFT JOIN PORTDATA.DBO.V_TBL_PORTS LP1 ON LP1.PORT_KEY = LBP.DISC_PORT_KEY 
where CJO_F.SUCCESS_DATE_TIME >= '${time}'
group by CT.DESCRIPTION `;

module.exports = {
  getContainersQuery,
  getNumberOfGroupsByContainerType,
};
