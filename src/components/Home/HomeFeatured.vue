<template>
        <section class="featured-section">
        <div class="featured-in container">
            <h1 class="section-title">Featured</h1>
            <div class="featured-items">
               <featured-item to="/laptop" :image="require('../../assets/images/laptop.jpg')">Laptop</featured-item>
               <featured-item to="/smartphone" :image="require('../../assets/images/smartphone.jpg')">Laptop</featured-item>
               <featured-item to="/desktop" :image="require('../../assets/images/desktop.jpg')">Laptop</featured-item>
               <featured-item to="/accessory" :image="require('../../assets/images/accessory.jpg')">Laptop</featured-item>
            </div>
            <router-link to="/shop" class="btn login-button">See all</router-link>
        </div>
    </section>
</template>

<script>
import FeaturedItem from '@/components/Home/FeaturedItem.vue';

export default {
    components: { FeaturedItem }
}
</script>

<style scoped>

.featured-section {
    padding: 8rem 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url("../../assets/images/background.jpg");
    background-size: cover;
    background-position: bottom;
}

.featured-in {
    display: flex;
    flex-direction: column;
}

.section-title {
    align-self: center;
}

.featured-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.6rem;
    margin-bottom: 2.4rem;
}

.featured-in .login-button {
    align-self: center;
}

.section-title {
    margin-bottom: 3.6rem;
}

@media screen and (max-width:1130px) {
    .featured-items {
        gap: 2.4rem;
        grid-template-columns: repeat(2, 1fr);
    }

}

@media screen and (max-width:640px) {
    .featured-items {
        grid-template-columns: 1fr
    }

    
}


</style>