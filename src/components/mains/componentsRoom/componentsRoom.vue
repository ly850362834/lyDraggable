<template>
    <div class="componentsRoom">
      <draggable
        :list="list2"
        :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
        touchStartThreshold="20"
        @end="end"
        @choose="choose"
        @start="onStart"
      >
        <div v-for="element in list2" :key="element.id" :class="{undraggable : element.flag}" class="componentsCom">
          <div class="componentsCom_Name">{{element.name}}</div>
        </div>
      </draggable>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import draggable from 'vuedraggable'
    import CreatedComponents from "@/commonApi/components";//导入类
    import render from "@/components/render/render.vue";
    import { Getter, Action,Mutation, State, namespace } from "vuex-class"//vueX 配合typescript使用
    const comsOption = namespace('comsOption');
    // interface ComponentsInterface {
    //     readonly single: any;
    //     readonly layout: any;
    // }
    @Component({
        components: {
            draggable,
            render,
        }
    })
    export default class ComponentsRoom extends Vue {
        @Prop(String) type;//组件传值接收类别
        falgs = "article";
        list2;
        //在组件拖拽结束后的回调函数触发事件
        end(ev: any,index: any) {
            //清除引用关系如果这个步骤不写，生成的模板引擎会有潜引用的问题
            this.list2=[];
            //直接数组清空不会引起重渲染，需要使用特定方法splice或者$set或者深度监听
            this.$forceUpdate();
            this.list2=new CreatedComponents()[this.type];//赋值简单组件 将其封装成一个方法
        }
        choose(ev: any,index: any){
            // console.log(ev,777,index)
        }
        onStart(ev: any){
            // console.log(ev,666)
        }
        created(){
            this.list2=new CreatedComponents()[this.type];//简单组件
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .render{
        height: 700px;
    }
    .componentsRoom{
        width: 100%;
        // height: 100%;
        border: 5px red solid;
        padding-left: 10px;
        padding-right: 10px;
        /*.components{*/
            /*width: 100%;*/
            /*!*background: red;*!*/
            /*!*display: inline-block;*!*/
        /*}*/
        .componentsCom{
            display: inline-block;
            width: 90px;
            height: 90px;
            padding: 10px;
            /*margin-right: 10px;*/
            /*display: flex;*/
            /*align-items: center;*/
            /*justify-content:center;*/
            color: white;
            .componentsCom_Name{
                width: 100%;
                height: 100%;
                background: black;
                border-radius: 2px;
            }
        }
    }

</style>