<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div>
                    <div class="componentsRoom">
                        <draggable
                            :list="list2"
                            :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
                            @end="end"
                            @choose="choose"
                            @start="onStart"
                        >
                            <div
                                v-for="element in list2"
                                :key="element.id"
                                :class="{undraggable : element.flag}"
                                class="components"
                            >
                                <div class="componentsCom">
                                    <div class="componentsCom_Name">{{element.name}}</div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <el-form ref="form" label-width="80px" label="活动区域">
                    <div class="draggableComBg">
                        <draggableCom :list="formList"></draggableCom>
                    </div>
                </el-form>
            </el-col>
            <el-col :span="6">
                <div>
                    <options :coms="comInformation"></options>
                </div>
            </el-col>
        </el-row>
        <!-- <HelloWorld></HelloWorld> -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable'
import { createdComponents } from "@/commonApi/components";
import render from "@/components/render/render.vue";
import options from "@/components/mains/options/options.vue"
import { Getter, Action,Mutation, State, namespace } from "vuex-class"
const comsOption = namespace('comsOption');
@Component({
  components: {
    draggable,
    render,
    options
  }
})
export default class Mains extends Vue {
  @comsOption.State(state => state.formList) formList: any;
  @comsOption.State(state => state.comInformation) comInformation: any;
  @comsOption.Mutation('setOptions') setOptions: any;
  falgs = "article";
  disabled = false;
  list1 = [];
  list2: any[] = [];
  // get mapState([
  //
  //  ])
  end(ev: any,index: any) {
      //清除引用关系
      this.list2=[];
      this.list2=[...createdComponents()];
      // console.log(ev,index)
  }
  choose(ev: any,index: any){
      // console.log(ev,777,index)
  }
  onStart(ev: any){
      // console.log(ev,666)
  }
  handleDel(index: any, id: any) {
    this.list1.splice(index, 1);
    // const q: any = this.list2.find((value, index, arr) => {
    //   return value.id === id;
    // });
    // this.$set(q, "flag", false);
    // console.log(this.list1)
  }
  created(){
      // console.log(this.list);
      // this.setOptions();
        this.list2=[...createdComponents()]
    //   console.log(createdComponents())
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