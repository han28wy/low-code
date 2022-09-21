<template>
  <div>
    <el-button type="primary">{{ button.name }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { watch, defineProps, reactive, defineExpose } from "vue";
// const props = defineProps(["config"]);
var button = reactive({
  name: "我是按钮！",
});

const resetData = (val) => {
  console.log("我在reset button 中间的数据 ", "      ", val);
  button.name = val.name;
};
defineExpose({ resetData });
</script>
