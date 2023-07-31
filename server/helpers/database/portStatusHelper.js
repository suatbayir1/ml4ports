// Libraries
const redisClient = require("../../helpers/database/connectRedis");
const { poolPromise, sql } = require("../../helpers/database/connectMsSQL");
const { getDailyContainersQuery, getCurrentPortStatusQuery } = require("../../config/queries/sqlQueries")
const asyncErrorWrapper = require("express-async-handler");


const getDataForPortStatus = async (key, jobType, date="") => {
    let results;
    let isCached = false;

    try {
        if(jobType == 3){
            let obj = await getCurrentPortStatus()
            if(obj){
                //console.log("line 33: ", key)
                await redisClient.set(key, JSON.stringify(obj), {
                    EX: 60*60,
                    NX: true,
                });

                let res = {
                    fromCache: false,
                    data: obj,
                }
                //console.log(res)
                return res
            }
        }
        const cacheResults = await redisClient.get(key);
        if(cacheResults){
            isCached = true;
            results = JSON.parse(cacheResults);
            let res = {
                fromCache: true,
                data: results
            }
            return res
        }
        else {
            let obj;
            if(jobType == 1){
                obj = await getCurrentPortStatus()
            }
            else if(jobType == 2){
                obj = await getDailyContainersStatus(date)
            }
            // expire data after 1 hour
            if(obj){
                //console.log("line 33: ", key)
                await redisClient.set(key, JSON.stringify(obj), {
                    EX: 60*60,
                    NX: true,
                });

                let res = {
                    fromCache: false,
                    data: obj,
                }
                //console.log(res)
                return res
            }
        }
    } catch (error) {
        console.log("redis get error: ", error);
    }
}

const getCurrentPortStatus = asyncErrorWrapper(async () => {
    try {
      const pool = await poolPromise;
      const result = await pool
        .request()
        .query(getCurrentPortStatusQuery());
      
      // Process the results
      const groupedData = {};
      const allRecords = [];
      result.recordset.forEach(row => {
        const { CONTAINER_STATUS_KEY, CONTAINER_TYPE_KEY, REGIME_KEY, YARD_NAME, GROUP_NAME} = row;
        allRecords.push({CONTAINER_STATUS_KEY, CONTAINER_TYPE_KEY, REGIME_KEY, YARD_NAME, GROUP_NAME});
        if (!groupedData[CONTAINER_STATUS_KEY]) {
          groupedData[CONTAINER_STATUS_KEY] = {};
          //groupedData[CONTAINER_STATUS_KEY].count = 0;
        }
        if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY]){
          groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY] = {};
          //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY].count = 0;
        }
        if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY]){
            groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] = 0;
            //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY].count = 0;
        }
        groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] += 1;
      });
  
      const obj = {total_cont_count: result.recordset.length, summary: groupedData, allRecords: allRecords}
      //result.recordset);
      return obj
      //JSON.stringify(obj)
    } catch (error) {
        console.log("sql querying error: ", error)
        return false
    }
})

const getDailyContainersStatus = asyncErrorWrapper(async (date) => {
    try {
        const pool = await poolPromise;
        const result = await pool
            .request()
            .query(getDailyContainersQuery(date));
        
        // Process the results
        const groupedData = {};
        const allRecords = [];
        result.recordset.forEach(row => {
            const { CONTAINER_STATUS_KEY, CONTAINER_TYPE_KEY, REGIME_KEY, YARD_NAME, GROUP_NAME} = row;
            allRecords.push({CONTAINER_STATUS_KEY, CONTAINER_TYPE_KEY, REGIME_KEY, YARD_NAME, GROUP_NAME});
            if (!groupedData[CONTAINER_STATUS_KEY]) {
            groupedData[CONTAINER_STATUS_KEY] = {};
            //groupedData[CONTAINER_STATUS_KEY].count = 0;
            }
            if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY]){
            groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY] = {};
            //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY].count = 0;
            }
            if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY]){
                groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] = 0;
                //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY].count = 0;
            }
            groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] += 1;
        });
    
        const obj = {total_cont_count: result.recordset.length, summary: groupedData, allRecords: allRecords}
        return obj
    } catch (err) {
        console.log("sql querying error: ", error)
        return false
    }
})
/* if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY]){
    groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] = {};
    //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY].count = 0;
}
if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY][GROUP_NAME]){
    groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY][GROUP_NAME] = {};
    //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY].count = 0;
}
if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY][GROUP_NAME][YARD_NAME]){
    groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY][GROUP_NAME][YARD_NAME] = 0;
    //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY].count = 0;
}
groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY][GROUP_NAME][YARD_NAME] += 1; */

module.exports = { getDataForPortStatus };