<template>
    <div class="banner">
    <!-- Empty div needed for justify between -->
    <div></div> 

    <div>Free domestic shipping.</div>
    <div class="close-banner">
        <CloseIcon/>
    </div>
    </div>
</template>

<script>
import CloseIcon from './Icons/CloseIcon.vue';


    export default {
        components:{
    CloseIcon
}
    }
</script>

<style scoped>
.banner {
    cursor: default;
    text-align: center;
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.close-banner {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.close-banner:hover {
    color: #aaa;
}
</style>