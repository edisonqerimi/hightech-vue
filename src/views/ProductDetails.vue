<template>
    <div class="details">
      <div class='added-cart hidden'></div>
    <div :style="{backgroundImage:`url(${product.img})`}" class="d-photo">
        
    </div>
    <div class="main-details">
        <div class="main-first">
            <div class="product-title">{{product.brand}} {{product.model}}</div>
            <div class="product-amount">Pieces available: {{product.amount}}</div>
            <div class="product-price">
                <div v-if="product.discount.isDiscount" class="discount-price">{{product.discount.priceDiscount.toFixed(2)}}&euro;</div>

                <div :class="{discount:product.discount.isDiscount}">{{product.price.toFixed(2)}}&euro;</div>  
            </div>
        </div>
        <div class='description'>
            {{product.description}}
        </div>
        <div class="product-buttons">
            <router-link to="/shop" class="btn btn-red">Back to shop</router-link>
            <div @click="()=>console.log('add to cart')" class="btn btn-info">Add to cart</div>
        </div>
        
    </div>
    <div class="more-details">
    <div class='more-title'>All details</div>
    <div class='more-body'>
    
    </div>
    </div>
</div>
</template>

<script>
import { products } from "./productsTemp";

 export default {
    data(){
        return {
            product:null
        }
    },
    created(){
        const productId = this.$route.params.id
        this.product = products.find(product=>product.id==productId)
    }
 }
</script>

<style scoped>
.details{
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas: 'photo main'
                         'more .';
}

.d-photo{
    min-height: 40vh;
    grid-area: photo;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.main-details,.more-details,.d-photo{ 
    background-color: #ddd;
    box-shadow: 0px 0px 1px #050401a8;
}

.main-details{
    grid-area: main;
}
.more-details{
    grid-area: more;
}

.more-details,.main-details{
    padding: 3.2rem;
    color: #050401;
}

.more-title{
    font-size: 2.4rem;
    font-weight: 500;
    padding-bottom: 5px;
    border-bottom: 1px solid #beb9bf;
    margin-bottom: 12px;
}

.detail{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.6rem;
}

.detail-name{
    font-weight: 500;
}

.product-buttons{
    display: flex;
    gap: 1rem;
    align-self: flex-end;
}

.product-title{
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 0.6rem;
}


.main-details{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.description{
    padding: 1rem 0;
}

.main-first{
    border-bottom: 1px solid #beb9bf;
    padding-bottom: 1rem;
}

.discount{
    text-decoration: line-through;
    color: #460D01;
    font-size: 1.6rem;
}
.product-price{
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
}

.product-amount{
    font-size: 1.6rem;
    margin-bottom: 12px;
}

@media screen and (max-width:768px) {
    .details{
        gap: 5px;
        grid-template-columns: 100%;
        grid-template-areas: 'photo'
                             'main'
                             'more';
    }
    .d-photo,.main-details,.more-details{
        min-height: 50vh;
    }
}
</style>