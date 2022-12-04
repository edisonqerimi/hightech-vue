<template>
      <router-link :to="to" class="featured-item">
                    <div class="featured-image-container">
                        <div class="featured-image" :style="{backgroundImage: `linear-gradient(to right, #b8b4b828, rgba(255, 255, 255, 0.5)), url(${image}`}"></div>
                    </div>
                    <div class="featured-content">
                        <slot></slot>
                    </div>
       </router-link>
</template>

<script>

export default {
    props:{
        to:String,
        image:null
    }
}

</script>

<style scoped>

.featured-item {
    min-width: 220px;
    border-radius: 3px;
    color: #050401;
    overflow: hidden;
}

.featured-item:hover .featured-image {
    transform: scale(1.03);
}
.featured-image-container {
    width: 100%;
    height: 220px;
    overflow: hidden;
}

.featured-image {
    width: 100%;
    height: 100%;
    transition: all 0.12s ease-in;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.featured-content {
    padding: 1.4rem 2.4rem;
    display: flex;
    font-size: 1.6rem;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.6rem;
    font-weight: 500;
    color: #222;
    background-color: #f0f0f0;
}
</style>