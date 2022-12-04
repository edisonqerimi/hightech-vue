<template>
    <home-hero></home-hero>

    <home-featured></home-featured>

    <home-gallery></home-gallery>

    <home-offer></home-offer>
</template>

<script>


import HomeHero from '@/components/Home/HomeHero.vue';
import HomeFeatured from '@/components/Home/HomeFeatured.vue';
import HomeOffer from '@/components/Home/HomeOffer.vue';
import HomeGallery from '@/components/Home/HomeGallery.vue';

export default {
    name: "HomePage",
    components: { HomeOffer, HomeHero, HomeFeatured, HomeGallery }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


