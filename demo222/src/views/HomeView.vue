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
        :move="handleMove"
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
          <div class="item move" @click="handleEditComp(element)">
            <div style="color: blue" class="move">{{ element.name }}</div>
            <component
              :ref="element.type"
              :is="currentComp[element.comp]"
              :config="componentConfig"
            />
          </div>
        </template>
      </draggable>
    </div>
    <!-- 右边 编辑组件 -->
    <div class="right">
      <component
        :is="editComp[editIndex]"
        :editableConfig="editableConfig"
        @setConfig="setConfig"
      />
    </div>
  </div>
</template>

<script setup>
import getConfig from "./editGroup.ts";
import {
  defineAsyncComponent,
  markRaw,
  ref,
  reactive,
  // watch,
} from "vue";
import draggable from "vuedraggable";
var componentConfig = reactive();

const button = ref();
const input = ref();

// 给中间画布的组件重新设置参数
const setConfig = (e) => {
  componentConfig = e;
  if (componentConfig.refName == "button") {
    button.value.resetData(componentConfig);
  } else if (componentConfig.refName == "input") {
    input.value.resetData(componentConfig);
  }
};

const editIndex = ref();
const editableConfig = ref();
// 右边编辑
const editComp = reactive({
  inputEdit: markRaw(
    defineAsyncComponent(() => import("./editComponents/inputEdit.vue"))
  ),
  buttonEdit: markRaw(
    defineAsyncComponent(() => import("./editComponents/buttonEdit.vue"))
  ),
  commonEdit: markRaw(
    defineAsyncComponent(() => import("./editComponents/commonEdit.vue"))
  ),
});

const currentComp = reactive({
  inputPart: markRaw(
    defineAsyncComponent(() => import("./components/inputPart.vue"))
  ),
  selectPart: markRaw(
    defineAsyncComponent(() => import("./components/selectPart.vue"))
  ),
  buttonPart: markRaw(
    defineAsyncComponent(() => import("./components/buttonPart.vue"))
  ),
  radioPart: markRaw(
    defineAsyncComponent(() => import("./components/radioPart.vue"))
  ),
});
//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽qqqqqq");
};

//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽eeeee");
};
const handleMove = (e) => {
  let curr = e.draggedContext.element.comp;
  console.log("我在move   ", curr);
  currentComp.value = curr;
};

// 编辑中间画布的组件
const handleEditComp = (e) => {
  editIndex.value = e.edit; // 展示编辑区域对应组件，如果都从common获取就没啥必要
  editableConfig.value = getConfig(e.type); //  获取当前组件中可被编辑的属性
};

var arr2 = reactive([
  {
    id: 11,
    name: "dfsdfgs",
    type: "radio",
    icon: "ios-radio-button-off",
    comp: "inputPart",
    edit: "buttonEdit",
  },
]);
var controlList = reactive([
  {
    id: 1,
    name: "单选",
    type: "radio",
    icon: "ios-radio-button-off",
    comp: "radioPart",
    edit: "commonEdit",
  },
  {
    id: 2,
    name: "下拉框",
    type: "checkbox",
    icon: "ios-checkbox-outline",
    comp: "selectPart",
    edit: "buttonEdit",
  },
  {
    id: 3,
    name: "输入框",
    type: "input",
    icon: "ios-create-outline",
    comp: "inputPart",
    edit: "inputEdit",
  },
  {
    id: 4,
    name: "日期时间",
    type: "date",
    icon: "ios-calendar-outline",
    comp: "selectPart",
    edit: "buttonEdit",
  },
  {
    id: 5,
    name: "手机号码",
    type: "mobile",
    icon: "ios-phone-portrait",
    comp: "selectPart",
    edit: "buttonEdit",
  },
  {
    id: 6,
    name: "邮箱",
    type: "email",
    icon: "ios-mail-outline",
    comp: "selectPart",
    edit: "buttonEdit",
  },
  // { id: 7, name: "地区", type: "address", icon: "ios-locate-outline" },
  // { id: 8, name: "性别", type: "gender", icon: "ios-male" },
  // {
  //   id: 9,
  //   name: "图片",
  //   type: "imageUploader",
  //   icon: "ios-images-outline",
  // },
  // { id: 10, name: "定位", type: "position", icon: "ios-pin-outline" },
  {
    id: 11,
    name: "按钮",
    type: "button",
    icon: "ios-pin-outline",
    comp: "buttonPart",
    edit: "commonEdit",
  },
]);
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
