<template>
    <router-link :to="to" class="side-row">
            <div><slot></slot></div>
    </router-link>
</template>

<script>
    export default {
        props:{
            to:String
        }
    }
</script>

<style scoped>

.side-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    text-transform: uppercase;
    color: #050401;
}


.side-row:hover {
    color: #464542;
}
</style>