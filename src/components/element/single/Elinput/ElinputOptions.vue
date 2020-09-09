<template>
    <div>
        <el-input v-model="coms.value" placeholder="请输入内容">
            <template slot="prepend">值</template>
        </el-input>
        <el-input v-model="coms.label" placeholder="组件label">
            <template slot="prepend">标签名</template>
        </el-input>
        <el-switch
                v-model="coms.required"
                active-text="是否必填"
                >
        </el-switch>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component({})
    export default class ElinputOptions extends Vue {
        // value=456;
        @Prop(Object) coms: any;
        valB=true;
        created(){
            // console.log(this.valA.bind(this))
            // console.log(this.coms,999999999999);
        }
    }
</script>

<style>
</style>