<template>
  <div>
     <el-table :data="userInfoData" class="table" v-loading="loading">
      <el-table-column label="姓名" width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.userName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="140">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="地址" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.role }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" width="200">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import textServices from "@/api/textServices";
@Component({ components: {} })
export default class UserInfoDate extends Vue {
  private userInfoData: any = [];
  private loading: any = true; 
  async created() {
    this.userInfoData = await textServices.getUserInfo();
    if(this.userInfoData.length !== 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./user-info.scss";
</style>