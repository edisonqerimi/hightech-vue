<template>
  <div class="product">
    <div class="product-image">
      <img :src="product.img" />
    </div>
    <div class="product-body">
      <div class="product-title">{{ product.brand }} {{ product.model }}</div>
      <div class="product-price">
        <div v-if="product.discount.isDiscount" class="discount-price">
          {{ product.discount.priceDiscount.toFixed(2) }}&euro;
        </div>
        <div :class="product.discount.isDiscount && 'discount'">
          {{ product.price.toFixed(2) }}&euro;
        </div>
      </div>
      <div class="product-buttons">
        <router-link class="btn product-btn" :to="`product/${product.id}`">
          More info
        </router-link>
        <div :on-click="onAddToCart" class="btn btn-info product-btn">
          Add to cart
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    onAddToCart: Function,
  },
};
</script>

<style scoped>
.product {
  background: #ddd;
  box-shadow: 0px 0px 1px #050401a8;
}
.product-image {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 200px;
}

.product-image img {
  transition: all 0.15s ease-in-out;
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.product-buttons {
  display: flex;
  justify-content: space-between;
}

.product-body {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.product-title {
  font-size: 1.6rem;
  height: 35px;
}

.discount {
  text-decoration: line-through;
  color: #460d01;
  font-size: 1.6rem;
}
.product-price {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
</style>
