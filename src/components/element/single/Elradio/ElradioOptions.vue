<template>
    <div>
        <el-row v-for="(item,index) in coms.options.children" :key="index">
            <el-col :span="8">
                <el-input v-model="item.label" placeholder="请输入内容" :key="index">
                </el-input>
            </el-col>
            <el-col :span="8">
                <el-input v-model="item.value" placeholder="请输入内容" :key="index">
                </el-input>
            </el-col>
            <el-col :span="8">
                <el-button type="danger" icon="el-icon-delete" circle @click="del(coms,item,index)"></el-button>
                <el-button icon="el-icon-plus" type="primary" circle @click="add(coms,item,index)"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "ElradionOptions",
        props:["coms"],
        created(){
            console.log(this.coms)
        },
        methods:{
            del(coms,item,index){
                coms.options.children.splice(index,1);
            },
            add(coms,item,index){
                coms.options.children.splice(index,0,{...item})
            }
        }
    }
</script>

<style scoped>

</style>