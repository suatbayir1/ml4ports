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

const getDailyContainersQuery = (date) => `
SELECT DISTINCT(DTD.CONTAINER_KEY), DTD.CONTAINER_STATUS_KEY, DTD.CONTAINER_TYPE_KEY, DTD.REGIME_KEY, Y.YARD_NAME, YG.GROUP_NAME
FROM V_TBL_DAILY_TEUS DT
LEFT JOIN V_TBL_DAILY_TEU_DETAILS DTD ON DTD.DAILY_TEU_KEY = DT.DAILY_TEU_KEY
LEFT JOIN V_TBL_YARDS Y ON DTD.YARD_KEY=Y.YARD_KEY
LEFT JOIN V_TBL_YARD_GROUPS YG ON Y.YARD_GROUP_KEY=YG.YARD_GROUP_KEY
WHERE DT.DDATE = '${date}'`;

const getCurrentPortStatusQuery = () => `
SELECT DISTINCT(VW.CONTAINER_KEY), VW.CONTAINER_STATUS_KEY, VW.CONTAINER_TYPE_KEY, REGIME_KEY, Y.YARD_NAME, YG.GROUP_NAME
FROM V_VW_CONTAINERS VW
LEFT JOIN V_TBL_DAILY_TEU_DETAILS DTD ON VW.CONTAINER_KEY=DTD.CONTAINER_KEY
LEFT JOIN V_TBL_YARDS Y ON VW.YARD_KEY=Y.YARD_KEY
LEFT JOIN V_TBL_YARD_GROUPS YG ON Y.YARD_GROUP_KEY=YG.YARD_GROUP_KEY
ORDER BY VW.CONTAINER_KEY`;

const getDistributionOfTotalShipCountByDays = () => `
SELECT O.MOORAGE_DATE AS DATE, COUNT(*) AS TOTAL 
FROM PORTDATA.DBO.V_TBL_ORDERS O INNER JOIN PORTDATA.DBO.V_TBL_SHIPS S ON O.SHIP_KEY = S.SHIP_KEY
WHERE O.MOORAGE_DATE IS NOT NULL
GROUP BY O.MOORAGE_DATE 
ORDER BY O.MOORAGE_DATE`;

const getHierarchy = () => `
SELECT SP.SEA_PORT_KEY AS ROOT_, SP.DESCRIPTION AS RIHTIM,  -- AĞAÇ YAPISI 1.LEVEL --RIHTIM
       O.ORDER_KEY AS PARENT_1, S.SHIP_NAME, O.MOORAGE_DATE,O.MOORAGE_TIME, -- AĞAÇ YAPISI 2.LEVEL --RIHTIMDAKI GEMI
       GEC.GANG_KEY AS PARENT_2, EC.CODE AS VINC, UC.USER_NAME AS VINC_OPERATOR, -- AĞAÇ YAPISI 3.LEVEL -- GEMIDE CALISAN VINC
       GEK.GANG_EQUIPMENT_KEY AS PARENT_3 ,EK.CODE AS KAMYON -- AĞAÇ YAPISI 4.LEVEL  -- VINCE BAGLI KAMYONLAR
FROM V_TBL_SEA_PORTS SP
INNER JOIN V_TBL_ORDERS O ON O.SEA_PORT_NUMBER = SP.SEA_PORT_KEY AND O.SHIP_LEFT IS NULL AND O.MOORAGED ='*'
LEFT JOIN V_TBL_SHIPS S ON S.SHIP_KEY = O.SHIP_KEY
INNER JOIN V_TBL_GANGS G ON G.ORDER_KEY =  O.ORDER_KEY
INNER JOIN V_TBL_GANG_EQUIPMENTS GEC ON GEC.GANG_KEY = G.GANG_KEY
INNER JOIN V_TBL_EQUIPMENTS EC ON EC.EQUIPMENT_KEY = GEC.EQUIPMENT_KEY AND EC.EQUIPMENT_KIND_KEY = 3
LEFT JOIN V_TBL_USERS UC ON UC.USER_KEY = (SELECT TOP 1 CJEX.EQUIPMENT_USER_KEY FROM V_TBL_CONTAINER_JOB_ORDERS CJOX
                                                                           INNER JOIN V_TBL_CONTAINER_JOB_EQUIPMENT CJEX ON CJEX.CONTAINER_JOB_ORDER_KEY= CJOX.CONTAINER_JOB_ORDER_KEY
                                                                                                              AND CJEX.EQUIPMENT_USER_KEY IS NOT NULL
                                                                           WHERE CJOX.CONTAINER_ACTION_KEY = (SELECT TOP 1 CAX.CONTAINER_ACTION_KEY FROM V_TBL_CONTAINER_ACTION CAX
                                                                                                                                                WHERE CAX.ORDER_KEY= O.ORDER_KEY AND CAX.GANG_KEY = G.GANG_KEY ORDER BY CAX.DATE_TIME DESC)
                                                                                        )
INNER JOIN V_TBL_GANG_EQUIPMENTS GEK ON GEK.GANG_KEY = G.GANG_KEY
INNER JOIN V_TBL_EQUIPMENTS EK ON EK.EQUIPMENT_KEY = GEK.EQUIPMENT_KEY AND EK.EQUIPMENT_KIND_KEY = 7
`;

const getPort = () => `
SELECT P.PORT_CODE,P.PORT_NAME,P.FLAG FROM V_TBL_SYSTEM_CONFIG SC
LEFT JOIN V_TBL_PORTS P ON P.PORT_KEY = CAST(SC.KEY_RESULT AS int)
WHERE SC.KEY_NAME = 'CONST_PORT_KEY'
`;

const getDocks = () => `
SELECT SEA_PORT_KEY, DESCRIPTION FROM V_TBL_SEA_PORTS
`;

const getShips = (seaPortKey) => `
SELECT O.ORDER_KEY , S.SHIP_NAME, O.MOORAGE_DATE,O.MOORAGE_TIME  
FROM V_TBL_ORDERS O
LEFT JOIN V_TBL_SHIPS S ON S.SHIP_KEY = O.SHIP_KEY
WHERE O.SEA_PORT_NUMBER = '${seaPortKey}' /*SEA_PORT_KEY*/ AND O.SHIP_LEFT IS NULL AND O.MOORAGED ='*'`;

const getCranes = (orderKey) => `
-- 1 NOLU RIHTIMDAKI 1.GEMIDE CALISAN VINCLER
SELECT GEC.GANG_KEY, EC.CODE AS VINC, UC.USER_NAME AS VINC_OPERATOR  
FROM V_TBL_GANGS G
INNER JOIN V_TBL_GANG_EQUIPMENTS GEC ON GEC.GANG_KEY = G.GANG_KEY
INNER JOIN V_TBL_EQUIPMENTS EC ON EC.EQUIPMENT_KEY = GEC.EQUIPMENT_KEY AND EC.EQUIPMENT_KIND_KEY = 3
LEFT JOIN V_TBL_USERS UC ON UC.USER_KEY = (SELECT TOP 1 CJEX.EQUIPMENT_USER_KEY FROM V_TBL_CONTAINER_JOB_ORDERS CJOX
INNER JOIN V_TBL_CONTAINER_JOB_EQUIPMENT CJEX ON CJEX.CONTAINER_JOB_ORDER_KEY= CJOX.CONTAINER_JOB_ORDER_KEY
AND CJEX.EQUIPMENT_USER_KEY IS NOT NULL
WHERE CJOX.CONTAINER_ACTION_KEY = (SELECT TOP 1 CAX.CONTAINER_ACTION_KEY FROM V_TBL_CONTAINER_ACTION CAX
	WHERE CAX.ORDER_KEY= G.ORDER_KEY AND CAX.GANG_KEY = G.GANG_KEY ORDER BY CAX.DATE_TIME DESC))
WHERE G.ORDER_KEY = '${orderKey}'
`;

const getTrucks = (gangKey) => `
SELECT GEK.GANG_EQUIPMENT_KEY ,EK.CODE AS KAMYON                    
FROM V_TBL_GANGS G
INNER JOIN V_TBL_GANG_EQUIPMENTS GEK ON GEK.GANG_KEY = G.GANG_KEY
INNER JOIN V_TBL_EQUIPMENTS EK ON EK.EQUIPMENT_KEY = GEK.EQUIPMENT_KEY AND EK.EQUIPMENT_KIND_KEY = 7
WHERE G.GANG_KEY = '${gangKey}'
`;

module.exports = {
  getContainersQuery,
  getNumberOfGroupsByContainerType,
  getDailyContainersQuery,
  getCurrentPortStatusQuery,
  getDistributionOfTotalShipCountByDays,
  getHierarchy,
  getPort,
  getDocks,
  getShips,
  getCranes,
  getTrucks,
};
