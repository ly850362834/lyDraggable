<template>
    <div>
        <el-input v-model="coms.value" placeholder="请输入内容"></el-input>
        <el-input v-model="coms.label" placeholder="组件label"></el-input>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component({})
    export default class ElinputOptions extends Vue {
        // value=456;
        @Prop(Object) coms: any;
        created(){
            // console.log(this.coms,999999999999);
        }
    }
</script>

<style>
</style>