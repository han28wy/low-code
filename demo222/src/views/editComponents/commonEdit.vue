<template>
  <el-form ref="formRef" :model="config" class="demo-dynamic">
    <el-form-item v-show="editableConfig.name" prop="name" label="标题">
      <el-input v-model="config.name" />
    </el-form-item>
    <el-form-item
      v-show="editableConfig.placeholder"
      prop="placeholder"
      label="提示语"
    >
      <el-input v-model="config.placeholder" />
    </el-form-item>
    <el-form-item v-show="editableConfig.color" prop="color" label="颜色">
      <el-color-picker v-model="config.color" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, defineEmits, defineProps } from "vue";
import type { FormInstance } from "element-plus";
const props = defineProps(["editableConfig"]);

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

const submitForm = (formEl: FormInstance | undefined) => {
  console.log("提交  ", props.editableConfig);
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
