<template>
  <div>
    <div class="desc_container">
      <div class="left"></div>
      <div class="right">
        <el-input type="textarea" :rows="5" resize="none" placeholder="请输入...." v-model="addDesc"></el-input>
        <el-button type="primary" class="button" @click="submit()" :disabled="disabled">提 交</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch} from "vue-property-decorator";
@Component({ components: {} })
export default class AddDesc extends Vue {
  private addDesc: any = null;
  private disabled: boolean = true;
  @Watch('addDesc')
  addDescs(val: any) {
      if(val.trim()) {
          this.disabled = false;
      } else {
          this.disabled = true;
      }
  }
  submit() {}
}
</script>

<style lang="scss" scoped>
.desc_container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 180px;
  margin-top: 10px;
  border: 1px solid #555;
  .left {
    width: 50%;
    height: 180px;
  }
  .right {
    width: 50%;
    height: 180px;
    border-left: 1px solid red;
  }
}
.button {
    float: right;
    margin-top: 10px;
    margin-right: 3px;
}
</style>