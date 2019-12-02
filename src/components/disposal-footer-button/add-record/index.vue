<template>
  <div>
    <el-popover
      placement="top-start"
      title="处置记录"
      width="300"
      trigger="manual"
      popper-class="poppper"
      v-model="visible"
    >
      <div>添加字段</div>
      <el-button slot="reference" @click="visible = !visible">添加记录</el-button>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ components: {} })
export default class AddRecord extends Vue {
  private visible: boolean = false;
}
</script>

<style lang="scss" scoped>
/deep/ .el-button {
  background-color: #f2784b;
  border: none;
  color: #fff;
}
/deep/ .el-popover .el-popper {
  border: 1px solid red !important;
  color: #f2784b;
}
</style>