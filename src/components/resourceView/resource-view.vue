<template>
  <div>
    <div class="resource_view">
      <div class="top">
        <div class="circle"></div>
        <div class="word">查看库存</div>
      </div>
      <!-- 资源展示区域 -->
      <div class="resource_container">
        <div class="left">
            我是选择区域
        </div>
        <div class="right">
          <div class="wait_dispatch">
              我是带等区域
          </div>
          <div class="dispatch">
              我是调派区域
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class ResourceView extends Vue {}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  flex: 1;
  align-content: center;
  .circle {
    width: 20px;
    height: 20px;
    border: 2px solid #f2784b;
    border-radius: 50%;
  }
  .word {
    margin-left: 10px;
    font-size: 20px;
  }
}
.resource_container {
  width: 100%;
  height: 400px;
  border: 1px solid red;
  display: flex;
  flex: 1;
  margin-top: 10px;
  .left {
    width: 30%;
    height: 400px;
    border: 1px solid red;
  }
  .right {
    width: 70%;
    height: 400px;
    border: 1px solid red;
    .wait_dispatch {
        height: 300px;
    }
    .dispatch {
        height: 100px;
    }
  }
}
</style>