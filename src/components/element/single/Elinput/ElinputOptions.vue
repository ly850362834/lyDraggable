<template>
    <div>
        <el-input v-model="coms.value" placeholder="请输入内容"></el-input>
        <el-input v-model="coms.label" placeholder="组件label"></el-input>
        <el-switch
                v-model="valB"
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
        // get required{
        //     return this.coms.required==0?false:true;
        // }
        valB=true;
        // valA={
        //     set function(val){
        //         // val?this.coms.required='1':this.coms.required='0';
        //     },
        //     get function(){
        //         console.log(this.coms)
        //         return true;
        //     }
        // };
        // valA=false;
        created(){
            // console.log(this.valA.bind(this))
            // console.log(this.coms,999999999999);
        }
    }
</script>

<style>
</style>