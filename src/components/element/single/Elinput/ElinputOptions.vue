<template>
    <div>
        <el-input v-model="coms.value" placeholder="请输入内容"></el-input>
        <el-input v-model="coms.value" placeholder="组件Id"></el-input>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component({})
    export default class ElinputoOptions extends Vue {
        // value=456;
        @Prop(Object) coms: any;
        created(){
            // console.log(this.coms,999999999999);
        }
    }
</script>

<style>
</style>