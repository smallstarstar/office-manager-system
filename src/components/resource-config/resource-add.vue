<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" @click="open()">添 加</el-button>
    <el-dialog
      title="添加信息"
      :visible.sync="dialogVisible"
      width="60%"
      :show-close="false"
      :before-close="handleClose"
    >
      <el-form :model="resourceInfo" ref="resourceInfo" :rules="validatorRules">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="类型" :prop="validatorName.resourceName">
              <el-input placeholder="请输入" v-model="resourceInfo.resourceName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子类型" :prop="validatorName.resourceSubName">
              <el-input placeholder="请输入" v-model="resourceInfo.resourceSubName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="型号" :prop="validatorName.resourceTag">
              <el-input placeholder="请输入" v-model="resourceInfo.resourceTag"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <div class="button_group">
            <el-button @click="cancel('resourceInfo')">取 消</el-button>
            <el-button type="primary" @click="submit('resourceInfo')">确 定</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ResourceInfo } from "@/models/resource-info";
import { ValidatorName } from "@/common/enums/validator-name";
import ValidatorRules from "@/utils/validator-rules";
import timeFormat from "@/utils/timeFormat";
import { Getter } from "vuex-class";

@Component({ components: {} })
export default class ResourceAdd extends Vue {
  @Getter("userInfo")
  userInfo!: any;
  private dialogVisible: boolean = false;
  private resourceInfo: ResourceInfo = new ResourceInfo();
  private validatorRules: any = ValidatorRules;
  private validatorName: any = ValidatorName;
  private timeFormat: any = timeFormat;
  open() {
    this.dialogVisible = true;
  }
  handleClose() {
    this.dialogVisible = true;
  }
  cancel(resourceInfo: any) {
    this.dialogVisible = false;
    this.resourceInfo = {};
    (this.$refs[resourceInfo] as any).resetFields();
  }
  submit(resourceInfo: any) {
    (this.$refs[resourceInfo] as any).validate((valid: any) => {
      if (!valid) {
        return;
      } else {
        this.resourceInfo.cPersonal = this.userInfo.userName;
        this.resourceInfo.cTime = this.timeFormat.getCurrentTime();
        this.dialogVisible = false;
        this.resourceInfo = {};
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.button_group {
  float: right;
}
</style>