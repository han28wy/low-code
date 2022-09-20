<template>
  <el-form ref="formRef" :model="config" class="demo-dynamic">
    <el-form-item prop="email" label="标题">
      <el-input v-model="config.email" />
    </el-form-item>
    <el-form-item prop="email" label="颜色">
      <el-color-picker v-model="config.color" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const formRef = ref<FormInstance>();
const config = reactive<{
  domains: DomainItem[];
  email: string;
  placeholder: string;
  color: string;
}>({
  domains: [
    {
      key: 1,
      value: "",
    },
  ],
  email: "",
  placeholder: "",
  color: "#409EFF",
});

interface DomainItem {
  key: number;
  value: string;
}

const removeDomain = (item: DomainItem) => {
  const index = config.domains.indexOf(item);
  if (index !== -1) {
    config.domains.splice(index, 1);
  }
};

const addDomain = () => {
  config.domains.push({
    key: Date.now(),
    value: "",
  });
};

const submitForm = (formEl: FormInstance | undefined) => {
  console.log("submit!      ", formEl, "     ");
  console.log(1111111);
  console.log(config);
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
</script>

<style scoped>
.demo-dynamic {
  width: 100%;
}
</style>
