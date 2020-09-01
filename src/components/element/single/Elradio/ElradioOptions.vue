<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容" size="mini">
            <template slot="prepend">Http://</template>
            <el-button slot="append" icon="el-icon-delete"></el-button>
            <el-button slot="append" icon="el-icon-circle-plus-outline"></el-button>
        </el-input>
        <i class="el-icon-delete"></i><i class="el-icon-circle-plus-outline"></i>
    </div>
</template>

<script>
    export default {
        name: "ElradionOptions"
    }
</script>

<style scoped>

</style>