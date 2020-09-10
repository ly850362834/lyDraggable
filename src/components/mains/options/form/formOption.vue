<template>
    <div>
        <el-radio-group v-model="formList.options.size">
            <el-radio-button  label="medium">大</el-radio-button>
            <el-radio-button label="small">中</el-radio-button>
            <el-radio-button label="mini">小</el-radio-button>
        </el-radio-group>
    </div>
</template>
<script lang='ts'>
    import { Getter, Action,Mutation, State, namespace } from "vuex-class"//vueX-class装饰器 配合typescript使用
    const comsOption = namespace('comsOption');
    import { Component, Prop, Vue } from "vue-property-decorator";
    @Component({
        components: {
        }
    })
    export default class ElementOption extends Vue {
        @Prop(Object) coms!: any;
        @comsOption.State(state => state.formList) formList: any;//组件列表;
    }
</script>
<style lang='less'>
</style>