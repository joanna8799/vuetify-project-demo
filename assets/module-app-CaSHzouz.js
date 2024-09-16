import{B as s,C as r}from"./vendor-CaoFhvBr.js";const n=s("statistics",{state:()=>({allData:[],departments:[]}),actions:{async fetchData(){try{const e="https://fraudreviewinform-api.digiat.org.tw/api",a="production";console.log(`Fetching data in ${a} environment`),console.log("API URL:",e);const t=await r.get(`${e}/v1/queryCaseStatisticsType2/`);console.log(`Fetching data in ${a} environment`),console.log("TESTAPI Response:",t.data),t.data.RCODE===200?(this.allData=t.data.StatisticsList,this.filterDataByType("30")):console.error("API returned an error:",t.data)}catch(e){console.error("Failed to fetch data:",e)}},filterDataByType(e){const a=this.allData.filter(t=>t.Type===e);console.log("filteredList:",a),this.departments=a.flatMap(t=>t.CountList.map(o=>({department:o.Department,confirmed:o.ConfirmedFrauds,total:o.TotalFrauds,ratio:parseFloat(parseFloat(o.ConfirmedRatio*100).toFixed(1))}))),console.log("Updated departments:",this.departments)}}});export{n as u};
