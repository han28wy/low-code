<template>
  <el-form ref="formRef" :model="config" class="demo-dynamic">
    <el-form-item prop="name" label="标题">
      <el-input v-model="config.name" />
    </el-form-item>
    <el-form-item prop="placeholder" label="输入提示语">
      <el-input v-model="config.placeholder" />
    </el-form-item>
    <!-- <el-form-item
      v-for="(domain, index) in config.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }"
    >
      <el-input v-model="domain.value" />
      <el-button class="mt-2" @click.prevent="removeDomain(domain)"
        >删除</el-button
      >
    </el-form-item> -->
    <el-form-item>
      <el-button @click="addDomain">新增输入栏</el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, watch, defineEmits, defineExpose, ref } from "vue";
import type { FormInstance } from "element-plus";

const emit = defineEmits(["setConfig"]);
const formRef = ref<FormInstance>();
const config = reactive<{
  refName: string;
  name: string;
  placeholder: string;
}>({
  refName: "input",
  name: "",
  placeholder: "",
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
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const handleReset = (val) => {
  emit("setConfig", val);
};
watch(config, (newValue) => {
  handleReset(newValue);
});
</script>

<style scoped>
.demo-dynamic {
  width: 100%;
}
</style>
