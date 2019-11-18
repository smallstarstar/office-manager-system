<template>
    <div>
        <div class="right">
            <NewEvent />
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import NewEvent from '@/components/newEvent/index.vue';
@Component({
    components:{
        NewEvent
    }
})
export default class FooterComponent extends Vue {

}
</script>

<style lang="scss" scoped>
.right {
    width: 200px;
    height: 50px;
    top:2px;
    position: absolute;
    right: 10px;
}
</style>