<template>
    <el-form-item :label="coms.label" :required="coms.required==0?false:true">
        <el-radio v-model="coms.value" v-for="(item,index) in coms.options.children" :key="index">{{item.label}}</el-radio>
    </el-form-item>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import SingleMixins from '../singleMixins';
    @Component({
        mixins: [SingleMixins]
    })
    export default class Elinput extends Vue {
        // value=456;
        // @Prop(Object) coms: any;
        created(){
            // console.log(this.coms,999999999999);
        }
    }
</script>

<style scoped>

</style>