<template>
  <div>
    <!-- 待审的商品列表 -->
    <el-table :data="tableData" style="width: 100%" class="table">
      <el-table-column label="名称" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.typeName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="等级" width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.level }}</span>
        </template>
      </el-table-column>

      <el-table-column label="时间" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{  timeChange.changeStateTime(scope.row.time) }}</span>
        </template>
      </el-table-column>

      <el-table-column label="地址" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>

      <el-table-column label="描述" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.desc }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作"  width="320">
        <template slot-scope="scope">
          <el-button size="mini"  type="warning" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini"  type="danger" @click="handleEdit(scope.$index, scope.row)">驳回</el-button>
          <el-button size="mini" type="info" @click="handleEdit(scope.$index, scope.row)">审批</el-button>
          <el-button size="mini" type="primary" @click="getInfoDisposal(scope.row)">进入</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import eventInfoServices from "@/api/eventInfoServices";
import timeFormat from '@/utils/timeFormat';
import { Action } from 'vuex-class';
import rxevent from 'pubsub-js';
import EventKeys from '@/common/event-keys/eventKeys';

@Component({
  components: {}
})
export default class ShopInfoData extends Vue {
  @Action('saveEventInfo')
  saveEventInfo!: any;
  private tableData: Array<[]> = [];  
  private page: number = 1;
  private current: number = 7;
  private total: number = 0;
  private timeChange: any = timeFormat;

 async created() {
   const result: any = await eventInfoServices.getEventInfoByPage(this.page,this.current);
   this.tableData = result.content;
   this.total = result.totalElements;
  }

  handleEdit() {}
  handleDelete() {}
  handleSizeChange() {}
  handleCurrentChange() {}
  getInfoDisposal(e: any) {
    this.saveEventInfo(e);
    // 进入主流程
    this.$router.push('/home/disposal/reviewInfo');
    // 将头部导航置灰
    rxevent.publish(EventKeys.DISABLE_MENU_COLOR, true);
  }

}
</script>

<style lang="scss" scoped>
.table {
  height: 450px;
  /deep/ .el-table__empty-text {
    height: 450px;
    line-height: 450px;
  }
}
.page {
  float: right;
  margin-right: 10px;
  margin-top: 3px;
}
</style>