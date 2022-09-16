<!-- vuedraggable使用
group {name pull put}

@start 开始拖动时触发
@add 从一个数组拖拽到另外一个数组时触发的事件
@remove 移除
@update 拖拽变换位置时触发的事件
@choose 鼠标点击选中要拖拽元素时的事件
@unchoose 选中后松开鼠标的事件
@sort 位置变化时的事件
@clone 
@move 某个元素不允许拖拽和获取当前拖动元素的对象 
@end 拖拽事件结束，用来判断是否存在对象 -->

<!-- vuedraggable中文文档 -->

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
    <div class="mid">
      222

      <draggable v-model="arr2" item-key="name" animation="300">
        <!-- <transition-group> -->
        <!-- <div v-for="item in arr2" :key="item.id">
            {{ item.name }}
          </div> -->
        <template #item="{ item }">
          <div class="list-group-item">{{ item.name }}</div>
        </template>
        <!-- </transition-group> -->
      </draggable>
    </div>
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
    const arr2 = ref([]);
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
      arr2,
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
  background: white;
}
.list-group-item {
  padding: 10px;
  border: double;
}
.mid {
  width: 40%;
  height: 500px;
  border: double;
}
.right {
  width: 30%;
  height: 500px;
  border: double;
}
</style>
