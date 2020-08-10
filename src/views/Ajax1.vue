<template>
    <div>
        <button @click="handle">获取服务器数据</button>
        <p>{{this.$store.state.product[0].title}}</p>
    </div>
</template>
<script>
export default {
    methods:{
        handle(){
            this.$store.dispatch("get_data_action");
        }
    }
}
</script>