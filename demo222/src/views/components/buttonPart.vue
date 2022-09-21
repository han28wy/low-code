<template>
  <div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script setup lang="ts">
import { watch, defineProps, defineExpose } from "vue";
// const props = defineProps(["config"]);

const resetData = (val) => {
  console.log("我在reset button 中间的数据 ", "      ", val);
};
defineExpose({ resetData });
</script>
