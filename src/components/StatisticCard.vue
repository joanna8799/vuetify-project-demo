<template>
    <v-card elevation="2" color="grey-darken-3" dark>
        <v-card-item> 
            <v-row align="center" no-gutters>
                <v-col><v-card-title class="font-weight-bold text-h5">{{ department }}</v-card-title></v-col>
                <v-col><v-card-title class="font-weight-bold text-body-2 float-right">
                <span class="text-yellow-lighten-2 ">確認詐騙數</span> / 詐騙通報總數
            </v-card-title></v-col>
            </v-row>
        </v-card-item>
     
        <v-card-text class="d-flex justify-end align-center">
            <!-- 比例標籤 -->
            <v-sheet
            color="yellow-lighten-2"
            class="d-flex justify-center align-center mx-2"
            height="37"
            width="37"
            rounded="circle"
            > 
            <span class="text-caption font-weight-bold">{{ ratio }}%</span>
            </v-sheet>
            <!-- 確認與總數 -->
            <span class="text-h6 font-weight-bold text-yellow-lighten-2">{{ confirmed }}</span>
            <span class="text-h6 font-weight-bold">/{{ total }}</span>
        </v-card-text>
    </v-card>
  </template>
  
<script>
export default {
  props: {
    department: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    ratio: {
      type: Number,
      required: true,
    },
  },
};

</script>
  