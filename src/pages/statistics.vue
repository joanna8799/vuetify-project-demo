<template>
    <v-container>
      <!-- 篩選區域 -->
      <v-row class="my-2">
        <v-col cols="12" md="4">
          <v-select
            variant="outlined"
            v-model="selectedType"
            :items="types"
            label="選擇時間段"
            item-value="value"  
            item-title="title"
            @update:modelValue="onTypeChange"
          ></v-select>
        </v-col>
      </v-row>
  
      <!-- 統計卡片區域 -->
      <v-row>
        <v-col
          v-for="(stat, index) in departments"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <StatisticCard 
          :department="stat.department" 
          :confirmed="stat.confirmed" 
          :total="stat.total" 
          :ratio="stat.ratio" />
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script>
import { computed, onMounted, ref } from 'vue';
import StatisticCard from '../components/StatisticCard.vue';
import { useAppStore } from '../stores/app.js';

export default {
  components: {
    StatisticCard,
  },
  setup() {
    const store = useAppStore();
    const selectedType = ref({ title: '過去30天', value: 30 }); // 默認 
    //const types = ref(['7', '14', '30']); 
    const types = ref([
      { title: '過去7天', value: '7' },
      { title: '過去14天', value: '14' },
      { title: '過去30天', value: '30' },
    ]);

    const departments = computed(() => store.departments);

    const onTypeChange = (newType) => {
        console.log('changetype', newType);
        store.filterDataByType(newType);
    };
    
    onMounted(() => {
      store.fetchData();
    });

    return {
        departments, 
        selectedType,
        types,
        onTypeChange,
    };
  },
};
</script>
  
<style scoped>
  /* .v-container {
    padding-top: 20px;
  } */
</style>
  