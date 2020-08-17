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
      <div class="components">
        <div v-for="element in list2" :key="element.id" :class="{undraggable : element.flag}" class="componentsCom">
          <div class="componentsCom_Name">{{element.name}}</div>
        </div>
      </div>
      </draggable>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import draggable from 'vuedraggable'
    import { createdComponents } from "@/commonApi/components";
    import render from "@/components/render/render.vue";
    import { Getter, Action,Mutation, State, namespace } from "vuex-class"//vueX 配合typescript使用
    const comsOption = namespace('comsOption');
    @Component({
        components: {
            draggable,
            render,
        }
    })
    export default class Mains extends Vue {
        falgs = "article";
        list2: any;
        end(ev: any,index: any) {
            //清除引用关系如果这个步骤不写，生成的模板引擎会有潜引用的问题
            this.list2=[];
            this.list2=[...createdComponents().single];//赋值简单组件 将其封装成一个方法

        }
        choose(ev: any,index: any){
            // console.log(ev,777,index)
        }
        onStart(ev: any){
            // console.log(ev,666)
        }
        created(){
            //给 list2 渲染出值;
            this.list2=[...createdComponents().single];//简单组件
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .render{
        height: 700px;
    }
    .componentsRoom{
        // height: 100%;
        border: 5px red solid;
        padding-left: 10px;
        padding-right: 10px;
        .components{
            display: inline-block;
            // flex-direction: column;
        }
        .componentsCom{
            width: 100px;
            height: 100px;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content:center;
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