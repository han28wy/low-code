<template>
  <el-form ref="formRef" :model="config" class="demo-dynamic">
    <el-form-item prop="name" label="标题">
      <el-input v-model="config.name" />
    </el-form-item>
    <el-form-item prop="color" label="颜色">
      <el-color-picker v-model="config.color" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, defineEmits } from "vue";
import type { FormInstance } from "element-plus";

const emit = defineEmits(["setConfig"]);
const formRef = ref<FormInstance>();
const config = reactive<{
  refName: string;
  name: string;
  placeholder: string;
  color: string;
}>({
  refName: "button",
  name: "",
  placeholder: "",
  color: "#409EFF",
});

// interface DomainItem {
//   key: number;
//   value: string;
// }

// const removeDomain = (item: DomainItem) => {
//   const index = config.domains.indexOf(item);
//   if (index !== -1) {
//     config.domains.splice(index, 1);
//   }
// };

// const addDomain = () => {
//   config.domains.push({
//     key: Date.now(),
//     value: "",
//   });
// };

const submitForm = (formEl: FormInstance | undefined) => {
  //   if (!formEl) return;
  //   formEl.validate((valid) => {
  //     if (valid) {
  //       console.log("submit!      ", formEl, "     ", formEl.value);
  //     } else {
  //       console.log("error submit!");
  //       return false;
  //     }
  //   });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const handleReset = (val) => {
  console.log("我在handleReset");
  emit("setConfig", val);
};

watch(config, (newValue) => {
  console.log("我在watch 55  ", newValue);
  handleReset(newValue);
});
</script>

<style scoped>
.demo-dynamic {
  width: 100%;
}
</style>
