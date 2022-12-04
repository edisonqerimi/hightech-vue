<template>
    <section class="offers-section">
        <div class="container">
            <h1 class="section-title">What we offer</h1>
            <div class="offers">
                
                <offer-item :image="require('../../assets/images/free-shipping.png')" title="Free domestic shipping">
                      Spend $100 or more prior to tax/shipping on HIGH Tech to receive Free Domestic Standard
                      shipping. Offer is automatically applied at checkout.
                </offer-item>

                <offer-item reverse :image="require('../../assets/images/guarantee.webp')" title="Satisfaction guarantee">
                        We give you a 30-day 100% satisfaction guarantee on all products we sell if you are not happy
                        for any reason with the quality.
                </offer-item>
            </div>

            <a class="btn login-button" href="#">Learn more</a>
        </div>
    </section>
</template>

<script>
import OfferItem from './OfferItem.vue';

export default {
    components:{OfferItem}
}

</script>


<style scoped>
.offers-section {
    padding: 8rem 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url("../../assets/images/laptop2.jpg");
    background-size: cover;
    background-position: bottom;

}

.offers-section .container {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    align-items: center;
}

.offers {
    color: #050401;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 1.2rem;
    margin-bottom: 2rem;
}

.section-title {
    align-self: center;
}

.section-title {
    margin-bottom: 3.6rem;
}
@media screen and (max-width:768px) {

.offers-section .container {
    align-items: flex-start;
}

.offers {
    grid-template-columns: 1fr;
}

}

</style>