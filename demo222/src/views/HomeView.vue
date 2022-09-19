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
        :list="controlList"
        item-key="id"
        group="itxst"
        ghost-class="ghost"
        handle=".move"
        filter=".forbid"
        :force-fallback="true"
        chosen-class="chosenClass"
        :fallback-class="true"
        :fallback-on-body="true"
        :touch-start-threshold="50"
        :fallback-tolerance="50"
      >
        <template #item="{ element }">
          <div class="item move">
            <div class="move">{{ element.name }}</div>
          </div>
        </template>
      </draggable>
    </div>
    <!-- 中间 画布 -->
    <div class="left">
      <draggable
        :list="arr2"
        item-key="id"
        group="itxst"
        ghost-class="ghost"
        handle=".move"
        filter=".forbid"
        :force-fallback="true"
        chosen-class="chosenClass"
        animation="300"
        :fallback-class="true"
        :fallback-on-body="true"
        :touch-start-threshold="50"
        :fallback-tolerance="50"
        @start="onStart"
        @end="onEnd"
      >
        <template #item="{ element }">
          <div class="item move">
            <div class="move">{{ element.name }}</div>
          </div>
        </template>
      </draggable>
    </div>
    <!-- 右边 编辑组件 -->
    <div class="right">
      333
      <div class="left">
        <draggable
          :list="arr3"
          item-key="id"
          group="fields"
          ghost-class="ghost"
          :force-fallback="true"
          chosen-class="chosenClass"
          animation="300"
          :fallback-class="true"
          :fallback-on-body="true"
          :touch-start-threshold="50"
          :fallback-tolerance="50"
          @start="onStart"
          @end="onEnd"
        >
          <template #item="{ element }">
            <div class="item move">
              <div class="move">{{ element.name }}</div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import draggable from "vuedraggable";

//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽qqqqqq");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽eeeee");
};

const onMove = (e, originalEvent) => {
  //不允许停靠
  if (e.relatedContext.element.disabledPark == true) return false;

  return true;
};
var arr2 = reactive([
  { id: 11, name: "dfsdfgs", type: "radio", icon: "ios-radio-button-off" },
]);
var arr3 = [];
var controlList = reactive([
  { id: 1, name: "单选题", type: "radio", icon: "ios-radio-button-off" },
  { id: 2, name: "多选题", type: "checkbox", icon: "ios-checkbox-outline" },
  { id: 3, name: "填空题", type: "text", icon: "ios-create-outline" },
  { id: 4, name: "日期时间", type: "date", icon: "ios-calendar-outline" },
  { id: 5, name: "手机号码", type: "mobile", icon: "ios-phone-portrait" },
  { id: 6, name: "邮箱", type: "email", icon: "ios-mail-outline" },
  { id: 7, name: "地区", type: "address", icon: "ios-locate-outline" },
  { id: 8, name: "性别", type: "gender", icon: "ios-male" },
  {
    id: 9,
    name: "图片",
    type: "imageUploader",
    icon: "ios-images-outline",
  },
  { id: 10, name: "定位", type: "position", icon: "ios-pin-outline" },
]);
watch(arr2, (newValue, oldValue) => {
  console.log("watch 已触发", newValue, "   555 ", oldValue);
});
</script>

<style>
.home {
  display: flex;
  flex-direction: row;
}
.left {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.list-group-item {
  padding: 10px;
  border: double;
}
.mid {
  width: 60%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.right {
  width: 20%;
  height: 500px;
  border: double;
}
.group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 32%;
  margin-right: 20px;
}
.ghost {
  border: solid 1px rgb(19, 41, 239) !important;
}
</style>
