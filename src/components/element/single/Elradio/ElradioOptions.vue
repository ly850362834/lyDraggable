<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容">
            <template slot="prepend">Http://</template>
            <Button slot="append" icon="ios-search"></Button>
            <Button slot="append" icon="ios-search"></Button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "ElradionOptions"
    }
</script>

<style scoped>

</style>