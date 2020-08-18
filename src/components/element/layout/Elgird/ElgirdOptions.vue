<template>
    <div>
        <div>
            <el-select v-model="childValue" placeholder="请选择" @change="onChange">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    export default class ElgirdOptions extends Vue{
        @Prop(Object) coms!: {};
        childValue=1;
        options=[
            {
                value:1,
                label:1
            },
            {
                value:2,
                label:2
            },
            {
                value:3,
                label:3
            },
            {
                value:4,
                label:4
            },
            {
                value:6,
                label:6
            },
            {
                value:8,
                label:8
            }
        ]
        onChange(val){
            console.log(this.childValue)
            // this.childValue=val;
        }
    }
</script>

<style scoped>

</style>