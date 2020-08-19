<template>
    <div>
        <div>
            <Select v-model="childValue" style="width:200px" @on-change="onChange">
                <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data:function () {
            return{
                childValue:1,
                options:[{label:1,value:1},{label:2,value:2}]
            }
        },
        props:['coms'],
        methods:{
            onChange(val){
                console.log(this.childValue);
                switch (this.coms.children.length<val) {
                    case true:
                        for (let i = 0;i<val;i++) {
                            const obj = {
                                list:[]
                            };
                            this.coms.children.push(obj);
                        }
                        break;
                    case false:
                        for (let i = 0;i<this.coms.children.length;i++) {
                            if (this.coms.children[i].list.length==0) {
                                for (let j = i+1;j<this.coms.children.length;i++) {
                                    if (this.coms.children[j].list.length!=0) {
                                        this.coms.children[i].list=[...this.coms.children[j].list];
                                        this.coms.children[j].list=[];
                                        break;
                                    }
                                }
                            }
                        }
                        break
                }
            }
        }
    }
</script>
<!--ts指向问题-->
<!--<script lang="ts">-->
    <!--import { Component, Prop, Vue } from "vue-property-decorator";-->
    <!--export default class ElgirdOptions extends Vue{-->
        <!--@Prop(Object) coms!: any;-->
        <!--childValue=1;-->
        <!--options=[-->
            <!--{-->
                <!--value:1,-->
                <!--label:1-->
            <!--},-->
            <!--{-->
                <!--value:2,-->
                <!--label:2-->
            <!--},-->
            <!--{-->
                <!--value:3,-->
                <!--label:3-->
            <!--},-->
            <!--{-->
                <!--value:4,-->
                <!--label:4-->
            <!--},-->
            <!--{-->
                <!--value:6,-->
                <!--label:6-->
            <!--},-->
            <!--{-->
                <!--value:8,-->
                <!--label:8-->
            <!--}-->
        <!--];-->
        <!--onChange(val){-->
            <!--console.log(this)-->
            <!--// const indexArray: number[]=[];-->
            <!--// switch (this.coms.children.length<val) {-->
            <!--//     case true:-->
            <!--//         for (let i = 0;i<val;i++) {-->
            <!--//             const obj = {-->
            <!--//                 list:[]-->
            <!--//             };-->
            <!--//             this.coms.children.push(obj);-->
            <!--//         }-->
            <!--//         break;-->
            <!--//     case false:-->
            <!--//         for (let i = 0;i<this.coms.children.length;i++) {-->
            <!--//             if (this.coms.children[i].list.length==0) {-->
            <!--//                 for (let j = i+1;j<this.coms.children.length;i++) {-->
            <!--//                     if (this.coms.children[j].list.length!=0) {-->
            <!--//                         this.coms.children[i].list=[...this.coms.children[j].list];-->
            <!--//                         this.coms.children[j].list=[];-->
            <!--//                         break;-->
            <!--//                     }-->
            <!--//                 }-->
            <!--//             }-->
            <!--//         }-->
            <!--//         break-->
            <!--// }-->
        <!--}-->
    <!--}-->
<!--</script>-->

<style scoped>

</style>