<template>
    <draggable
            :list="list"
            :options="{group:'article', disabled: disabled}"
            chosenClass="sortable-chosen"
            @start="start22"
            @end="end22"
            @add='onadd'
            @choose='onchoose'
            @change="onchange"
            style="min-height:100%"
    >
        <template v-for="(coms, index) in list">
            <render :key="index" :coms="coms" :data-com="coms.comId"></render>
        </template>
    </draggable>
</template>
<script lang='ts'>
    import render from "@/components/render/render.vue";
    import {Component, Prop, Vue} from "vue-property-decorator";
    import draggable from "vuedraggable";
    import {Getter, Action, Mutation, State, namespace} from "vuex-class"

    const comsOption = namespace('comsOption');
    @Component({
        components: {
            draggable,
            render
        }
    })
    export default class Render extends Vue {
        @comsOption.State(state => state.formList) formList: any;
        @comsOption.Mutation('setOptions') setOptions: any;
        @Prop(Array) list!: any[];
        disabled = false;

        onchange(index1: any, index2: any) {
            // console.log(index1)
            const keyArr = Object.keys(index1);
            switch (keyArr[0]) {
                case 'added':
                    index1[keyArr[0]].element.comId = new Date().getTime(); //生成comId
                    this.setOptions(index1[keyArr[0]].element.comId);
                    break;
                default:
            }
            this.$forceUpdate();
            // console.log(this.list,999)
            // console.log(keyArr)
        }

        //选择节点
        onchoose(dom: any) {
            const comId = dom.item.dataset.com;
            this.setOptions(comId);
            // this
            // console.log(this.formList);
            // console.log(dom.item.dataset.com);
        }

        onadd(index1: any, index2: any) {
            // console.log(index1,index2,'add')
        }

        start22(event: any) {
            // console.log(event)
            // this.falgs = "222222";
            // console.log(this.list,)
        }

        end22(ev: any) {
            // this.falgs = "article";
            // console.log(this.list,666666)
        }
    }
</script>
<style lang='less'>
    // .sortable-chosen{
    //   position: relative;
    //   top:5px;
    //   background: red;
    //   border: 10px black solid !important;
    // }
</style>