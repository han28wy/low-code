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
        :list="state.modules.arr1"
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
    <!-- 中间 画布 -->
    <div class="left">
      <draggable
        :list="state.modules.arr2"
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
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import draggable from "vuedraggable";
const state = reactive({
  message: "A组只能往B组拖到一个元素",
  groupA: {
    name: "itxst",
    put: true, //允许拖出
    pull: true,
    // pull: () => {
    //   let res = state.modules.arr1.length > 3;
    //   //当A组元素小于等于3个时，不允许再拖出元素了
    //   state.message = res ? "只能拖出1个" : "不能再拖了";
    //   console.log("sdfasdfasd    ", res);
    //   return res;
    // },
  },
  modules: {
    arr1: [
      { name: "A组", id: 1 },
      { name: "库存", id: 2 },
      { name: "销量", id: 3 },
      { name: "日志", id: 4 },
      { name: "AB", id: 8 },
    ],
    arr2: [
      { name: "B组", id: 5 },
      { name: "员工", id: 6 },
      { name: "报表", id: 7 },
    ],
  },
});
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
