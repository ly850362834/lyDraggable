<template>
    <div>
        <el-row :gutter="20">
            <!--//组件容器-->
            <el-col :span="6">
                <div>
                    <!--基本组件构造器-->
                    <componentsRoom :type="'single'"></componentsRoom>
                    <!--布局容器组件构造器-->
                    <componentsRoom :type="'layout'"></componentsRoom>
                </div>
            </el-col>
            <!--//渲染模板-->
            <el-col :span="12">
                <el-form ref="form" label-width="100px" label="活动区域" :size="formList.options.size">
                    <div class="draggableComBg">
                        <draggableCom :list="formList.children"></draggableCom>
                    </div>
                </el-form>
            </el-col>
            <!--组件配置项-->
            <el-col :span="6">
                <div>
                    <options :coms="comInformation"></options>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue , Provide} from 'vue-property-decorator';
    import options from "@/components/mains/options/options.vue"
    import { Getter, Action,Mutation, State, namespace } from "vuex-class"//vueX-class装饰器 配合typescript使用
    import componentsRoom from "./componentsRoom/componentsRoom.vue"
    const comsOption = namespace('comsOption');
    @Component({
        components: {
            options,
            componentsRoom
        }
    })
    export default class Mains extends Vue {
        @comsOption.State(state => state.formList) formList: any;//组件列表;
        @comsOption.State(state => state.comInformation) comInformation: any;//单一组件配置信息属性传递
        @comsOption.Mutation('setOptions') setOptions: any;
        // @Provide() foo = '123';
        // created(){
        //     console.log(this.foo)
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    /*.render{*/
        /*height: 700px;*/
    /*}*/
    /*.componentsRoom{*/
        /*// height: 100%;*/
        /*border: 5px red solid;*/
        /*padding-left: 10px;*/
        /*padding-right: 10px;*/
        /*.components{*/
            /*display: inline-block;*/
            /*// flex-direction: column;*/
        /*}*/
        /*.componentsCom{*/
            /*width: 100px;*/
            /*height: 100px;*/
            /*padding: 10px;*/
            /*display: flex;*/
            /*align-items: center;*/
            /*justify-content:center;*/
            /*color: white;*/
            /*.componentsCom_Name{*/
                /*width: 100%;*/
                /*height: 100%;*/
                /*background: black;*/
                /*border-radius: 2px;*/
            /*}*/
        /*}*/
    /*}*/

</style>
