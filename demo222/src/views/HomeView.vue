<template>
  <div class="home">
    <!-- 左边 组件列表 -->
    <div class="left">
      <draggable
        v-model="controlList"
        item-key="name"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{ element }">
          <div class="list-group-item">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <!-- 中间 画布 -->
    <div class="mid">222</div>
    <!-- 右边 编辑组件 -->
    <div class="right">333</div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import draggable from "vuedraggable";

export default defineComponent({
  components: { draggable },
  setup() {
    const controlList = ref([
      { name: "单选题", type: "radio", icon: "ios-radio-button-off" },
      { name: "多选题", type: "checkbox", icon: "ios-checkbox-outline" },
      { name: "填空题", type: "text", icon: "ios-create-outline" },
      { name: "日期时间", type: "date", icon: "ios-calendar-outline" },
      { name: "手机号码", type: "mobile", icon: "ios-phone-portrait" },
      { name: "邮箱", type: "email", icon: "ios-mail-outline" },
      { name: "地区", type: "address", icon: "ios-locate-outline" },
      { name: "性别", type: "gender", icon: "ios-male" },
      { name: "图片", type: "imageUploader", icon: "ios-images-outline" },
      { name: "定位", type: "position", icon: "ios-pin-outline" },
    ]);

    return {
      controlList,
    };
  },
});
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
}
.left {
  width: 30%;
  background: lightblue;
}
.list-group-item {
  padding: 10px;
  border: double;
}
</style>
