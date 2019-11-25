<template>
  <div>
    <div class="icon">
      <i
        class="el-icon-document"
        title="新办事项"
        :class="{'islight': showLight}"
        @click="openDialog()"
      ></i>
    </div>
    <!-- 弹窗 -->
    <el-dialog
      title="填写事件"
      :visible.sync="dialogVisible"
      width="60%"
      :show-close="false"
      :before-close="handleClose" 
    >
      <el-form :model="eventInfo" ref="eventInfo" :rules="validatorRules">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="名称" :prop="validatorName.name">
              <el-input placeholder="请输入..." v-model="eventInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="类型" :prop="validatorName.subName">
              <el-input placeholder="请输入..." v-model="eventInfo.subName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="等级" :prop="validatorName.level">
              <el-input placeholder="请输入..." v-model="eventInfo.level"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="16">
            <el-form-item label="地址" :prop="validatorName.address">
              <el-input placeholder="请输入..." v-model="eventInfo.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间" :prop="validatorName.time">
              <el-date-picker v-model="eventInfo.time" type="datetime" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="描述" :prop="validatorName.desc">
          <el-input
            type="textarea"
            resize="none"
            :rows="2"
            placeholder="请输入..."
            v-model="eventInfo.desc"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel('eventInfo')">取 消</el-button>
          <el-button type="primary" @click="submit('eventInfo')">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventInfo } from "@/models/event-info";
import { ValidatorName } from "@/common/enums/validator-name";
import ValidatorRules from "@/utils/validator-rules";
import eventInfoServices from '@/api/eventInfoServices';
import rxevent from 'pubsub-js';
import EventKeys from '@/common/event-keys/eventKeys';
import { Getter } from 'vuex-class';


@Component({
  components: {}
})
export default class NewEvent extends Vue {
  @Getter('userInfo')
  userInfo!: any;
  private showLight: boolean = false;
  private dialogVisible: boolean = false;
  private eventInfo: EventInfo = new EventInfo();
  private validatorName: any = ValidatorName;
  private validatorRules: any = ValidatorRules;

  handleClose() {
    this.dialogVisible = true;
  }
  cancel(eventInfo: any) {
    this.dialogVisible = false;
    this.showLight = false;
    this.eventInfo = {};
    (this.$refs[eventInfo] as any).resetFields();
  }
  submit(eventInfo: any) {
    (this.$refs[eventInfo] as any).validate( async (valid: any) => {
      if (!valid) {
        return;
      } else {
        this.eventInfo.disposalStatus = 0;
        this.eventInfo.personal = this.userInfo.userName;
        this.eventInfo.role = this.userInfo.role;
        const result = await eventInfoServices.saveEventInfo(this.eventInfo);
        if(result) {
        this.dialogVisible = false;
        this.showLight = false;
        rxevent.publish(EventKeys.REFRESH_GETDATE, true);
        const messageInfo: any = {
          type: 'success',
          position: 'bottpm-right',
          message: '添加事件成功'
        }
        this.$notify(messageInfo);
        }
      }
    });
  }
  openDialog() {
    this.dialogVisible = true;
    this.showLight = true;
  }
}
</script>

<style lang="scss" scoped>
.el-icon-document {
  margin-top: 10px;
  font-size: 30px;
  width: 30px;
  height: 30px;
  padding: 3px;
  background-color: #333;
  cursor: pointer;
  color: #fff;
}
.islight {
  color: #f2784b;
  background-color: #fff;
}

/deep/ .el-dialog__title {
  font-size: 23px;
  font-weight: 700;
}
</style>