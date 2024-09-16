<template>
  <v-app-bar app color="grey-darken-3" dark height="65">
    <!-- 左側 Logo 和標題 -->
    <v-btn icon class="ml-2">
      <v-img
        src="@/assets/logo.png" 
        alt="Logo"
        contain
        width="36"
        height="36"
        rounded="0"
        class="mr-2"
      ></v-img>
    </v-btn>
    <v-toolbar-title class="text-h6 font-weight-bold">網路詐騙通報查詢網</v-toolbar-title>

    <!-- 左側空白區域 -->
    <v-spacer></v-spacer>

    <!-- 按鈕 -->
    <v-btn
        variant="text"
        height="70"
        width="70"
        rounded="0"
        color="white"
        icon
        density="comfortable"
        stacked
        to="/popular"
      >
        <v-icon size="32">mdi-fire</v-icon>
        <span>熱門</span>
      </v-btn>
      <v-btn
        variant="text"
        height="70"
        width="70"
        rounded="0"
        color="white"
        icon
        density="comfortable"
        stacked
        to="/latest"
      >
        <v-icon size="32">mdi-star</v-icon>
        <span>最新</span>
      </v-btn>
      <v-btn
        variant="text"
        height="70"
        width="70"
        rounded="0"
        color="white"
        icon
        density="comfortable"
        stacked
        to="/statistics"
      >
        <v-icon size="32">mdi-chart-line</v-icon>
        <span>統計</span>
      </v-btn>
      <v-btn
        variant="text"
        height="70"
        width="70"
        rounded="0"
        color="white"
        icon
        density="comfortable"
        stacked
        to="/profile"
      >
        <v-icon size="32">mdi-cog</v-icon>
        <span>個人</span>
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>

</style>
