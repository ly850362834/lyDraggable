<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容">
            <template slot="prepend">Http://</template>
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