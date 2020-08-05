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
@Component({
  components: {
    draggable,
    render
  }
})
export default class ComponentsRoom extends Vue {
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
// .render{
//     height: 700px;
// }
// .componentsRoom{
//     // height: 100%;
//     border: 10px red solid;
//     .components{
//         display: flex;
//         // flex-direction: column;
//     }
//     .componentsCom{
//         width: 100px;
//         height: 100px;
//         padding: 10px;
//         display: flex;
//         margin-right: 10px;
//         align-items: center;
//         justify-content:center;
//         color: white;
//         .componentsCom_Name{
//             width: 100%;
//             height: 100%;
//             background: black;
//         }
//     }
// }
</style>