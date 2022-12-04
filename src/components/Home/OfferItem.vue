<template>
        <div class="offer" :class="{'offer-reverse':reverse}">
                <div>
                    <h2 class="title">{{title}}</h2>
                    <p class="paragraph"> 
                        <slot></slot>
                    </p>
                </div>

                <div class="offer-image">
                    <img :src="image" alt="">
                </div>
            </div>

</template>

<script>
export default {
    props:{
        title:String,
        image:null,
        reverse:Boolean
    }
}

</script>

<style scoped>
.offer{
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}
.offer-reverse{
    flex-direction: column-reverse;
}
.offer-image {
    display: flex;
    justify-content: center;
}

.offer-image img {
    object-fit: contain;
    filter: grayscale(100%);
    filter: contrast(200%);
    width: 190px;
    height: 190px;
    border-radius: 50%;
}

.title {
    font-size: 3rem;
    letter-spacing: -1px;
    margin-bottom: 1.4rem;
    font-weight: 500;
}


.paragraph {
    font-size: 1.8rem;
    line-height: 1.4;
    color: #222;
    font-weight: 500;
}

@media screen and (max-width:768px) {
    .offer-image img {
        width: 110px;
        height: 110px;
    }
    .offer-image {
        justify-content: flex-start;
    }

    .offer{
        flex-direction: column;
    }

}


</style>