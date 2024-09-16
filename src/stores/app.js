// Utilities
import axios from 'axios';
import { defineStore } from 'pinia';
import.meta.env.VITE_APP_API_URL;
import.meta.env.VITE_APP_ENV;

export const useAppStore = defineStore('statistics', {
  state: () => ({
    allData: [],
    departments: [],
  }),
  actions: {
    async fetchData() {
      try {

        const apiUrl = import.meta.env?.VITE_APP_API_URL ?? '/api';
        const envName = import.meta.env?.VITE_APP_ENV ?? 'unknown';
        console.log(`Fetching data in ${envName} environment`);
        console.log('API URL:', apiUrl);

        const response = await axios.get(`${apiUrl}/v1/queryCaseStatisticsType2/`)
        //const response = await axios.get('/api/v1/queryCaseStatisticsType2/')
        console.log(`Fetching data in ${envName} environment`);
        console.log('TESTAPI Response:', response.data);
        if (response.data.RCODE === 200) {
          this.allData = response.data.StatisticsList;
          this.filterDataByType('30'); // 默認顯示 Type "30" 的數據
        } else {
          console.error('API returned an error:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },

    filterDataByType(type) {
      // 根據 Type 過濾 allData 並更新 departments
      const filteredList = this.allData.filter(item => item.Type === type);
      console.log('filteredList:', filteredList);

      this.departments = filteredList.flatMap(item =>
        item.CountList.map(count => ({
          department: count.Department,
          confirmed: count.ConfirmedFrauds,
          total: count.TotalFrauds,
          ratio: parseFloat(parseFloat(count.ConfirmedRatio * 100).toFixed(1)),
        }))
      );
      console.log('Updated departments:', this.departments);
    },

  },
});
