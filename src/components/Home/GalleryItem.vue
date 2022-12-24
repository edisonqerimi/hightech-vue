<template>
     <router-link :to="to" class="photo">
            <div class="img-holder" :style="{backgroundImage: `linear-gradient(to right, #b8b4b828, rgba(255, 255, 255, 0.2)), url(${image}`}"></div>
            <div class="gallery-product1 gallery-product">
                <div class="gallery-product-title"><slot></slot></div>
                <div class="cmimi">
                    <span>
                        {{discountPrice}}
                        &euro;</span>{{" "}}
                    <span class="cmimi-normal">{{normalPrice}}&euro;</span>
                </div>
            </div>
     </router-link>
</template>

<script>
export default {
    props:{
        to:String,
        image:null,
        normalPrice:null,
        discountPrice:null
    }
}
</script>

<style scoped>
.gallery-product-title {
    font-size: 2.4rem;
}

.cmimi {
    font-size: 1.8rem;
}

.cmimi-normal{
    text-decoration: line-through;
    color: #362417;
    font-size: 1.6rem;
}
.img-holder {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: all 0.4s ease-in-out;
}
.photo {
    position: relative;
    overflow: hidden;
    color: #050401;
    display: flex;
    align-items: flex-end;
    background-color: #fffaff;
}
.photo:hover .img-holder {
    transform: scale(1.05);
}

.gallery-product {
    background: #fffaffb6;
    width: 100%;
    text-align: center;
    z-index: 1;
    padding: 1rem;
}

@media screen and (max-width:640px) {
    .photo {
        height: 55vw;
    }
}
</style>