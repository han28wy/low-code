<template>
  <el-radio-group v-model="radio">
    <el-radio
      v-for="option in config.options"
      :key="option.label"
      :label="option.label"
      >{{ option.title }}</el-radio
    >
  </el-radio-group>
</template>

<script lang="ts" setup>
import { ref, defineExpose, reactive } from "vue";

var config = reactive({
  name: "",
  options: [
    { label: 1, title: "OptionA" },
    { label: 2, title: "OptionB" },
    { label: 3, title: "OptionC" },
  ],
});

const resetData = (val) => {
  console.log("我在reset button 中间的数据 ", "      ", val);
  config = val;
};
defineExpose({ resetData });

const radio = ref(3);
</script>
