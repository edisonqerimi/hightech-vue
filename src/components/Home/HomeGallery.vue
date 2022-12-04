<template>
    <section class="products-gallery">
        <gallery-item 
            class="photo1"
            discountPrice="699.99" 
            normalPrice="1099.99" 
            to="/details/1" :image="require('../../assets/images/hp-envy.png')"
        >
            HP ENVY 17t-ch000
        </gallery-item>
        <gallery-item 
            class="photo2" 
            discountPrice="1150.49" 
            normalPrice="1199.50" 
            to="/details/2" :image="require('../../assets/images/iphone13promax.png')"
        >
            iPhone 13 Pro Max
        </gallery-item>
        <gallery-item 
            class="photo3" 
            discountPrice="279.99" 
            normalPrice="349.99" 
            to="/details/3" :image="require('../../assets/images/sony.png')"
            >
                Sony WH-1000XM4
        </gallery-item>
    </section>
</template>

<script>
import GalleryItem from '@/components/Home/GalleryItem.vue';

export default{
    components: {  GalleryItem }
}
</script>


<style scoped>
.products-gallery {
    display: grid;
    grid-template-areas: 'first first second'
        'first first third';

}

.photo1 {
    height: 100vh;
    grid-area: first;
}

.photo2 {
    grid-area: second;
}

.photo3 {
    grid-area: third;
}

@media screen and (max-width:1130px) {
    .photo1 {
        height: 50vw;
    }
}

@media screen and (max-width:640px) {

.products-gallery {
    grid-template-columns: 1fr;
    grid-template-areas: 'first'
        'second'
        'third';
}

}
</style>