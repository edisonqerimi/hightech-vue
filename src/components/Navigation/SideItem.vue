<template>
    <div @click="onClick" class="side-row">
            <div><slot></slot></div>
    </div>
</template>

<script>
    export default {
        props:{
            onClick:Function
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
    cursor: pointer;
}


.side-row:hover {
    color: #464542;
}
</style>