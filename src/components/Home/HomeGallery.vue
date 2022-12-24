<template>
    <section class="products-gallery">
        <gallery-item 
            v-for="item in galleryProducts"
            v-bind:key="item.id"
            :normalPrice="item.price" 
            :discountPrice="item.discount.priceDiscount" 
            :to="'/shop/product/'+item.id" :image="item.img"
        >
            {{ item.brand }} {{ item.model }}
        </gallery-item>
    </section>
</template>

<script>
import GalleryItem from '@/components/Home/GalleryItem.vue';
import { products } from "@/views/productsTemp";

export default{
    data(){
        return{
            galleryProducts:null
        }
    },
    components: {  GalleryItem },
    created(){
        this.galleryProducts = products.slice(0,4);
    }
}
</script>


<style scoped>
.products-gallery {
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

}



@media screen and (max-width:640px) {

.products-gallery {
    grid-template-columns: 1fr;
    height: auto;
}

}
</style>