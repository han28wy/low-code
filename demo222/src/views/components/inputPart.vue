<template>
  <div>
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";
const input = ref("");

const resetData = (val) => {
  console.log("我在reset input    中间的数据 ", "      ", val);
};
defineExpose({ resetData });
</script>
