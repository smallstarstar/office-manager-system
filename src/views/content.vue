<template>
    <div>
      <div class="userInfo">
           {{userInfo.userName}} 欢迎 登录
      </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';
import {Getter} from 'vuex-class';


@Component({})
export default class Content extends Vue {
    @Getter('userInfo')
    userInfo!: any;

}
</script>

