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
                        <draggableCom :list="list1"></draggableCom>
                    </div>
                </el-form>
            </el-col>
            <el-col :span="6">
                <div>
                    <options></options>
                </div>
            </el-col>
        </el-row>
        <!-- <HelloWorld></HelloWorld> -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable'
import HelloWorld from "../HelloWorld.vue";
import { createdComponents } from "@/commonApi/components";
import render from "@/components/render/render.vue";
import options from "@/components/mains/options/options.vue"
@Component({
  components: {
    draggable,
    HelloWorld,
    render,
    options
  }
})
export default class Mains extends Vue {
  sss={name:333};
  falgs = "article";
  disabled = false;
  list1 = [];
  list2: any[] = [];
  end(ev: any,index: any) {
      this.list2=[];
      this.list2=[...createdComponents()]
      console.log(ev,index)
    // if (ev.to.className === "dragArea11") {
    //   this.$set(this.list2[ev.oldIndex], "flag", true);
    // }
    // if (this.list1>)
    // console.log(666)
    // if (this.list1.length>1){
    //     this.list1[1].option.children[0].list=[]
    // }
  }
  choose(ev: any,index: any){
      console.log(ev,777,index)
  }
  onStart(ev: any){
      console.log(ev,666)
  }
  handleDel(index: any, id: any) {
    this.list1.splice(index, 1);
    // const q: any = this.list2.find((value, index, arr) => {
    //   return value.id === id;
    // });
    // this.$set(q, "flag", false);
    console.log(this.list1)
  }
  created(){
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