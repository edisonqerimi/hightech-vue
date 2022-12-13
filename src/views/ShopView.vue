<template>
  <div class="shop-grid">
    <div class="categories shop-grid-item">
      <router-link to="/shop" class="category">All</router-link>
      <router-link to="/shop/desktop" class="category category-hidden">
        Desktops
      </router-link>
      <router-link to="/shop/laptop" class="category">Laptops</router-link>
      <router-link to="/shop/smartphone" class="category"
        >Smartphones</router-link
      >
      <router-link to="/shop/accessory" class="category category-hidden">
        Accessory
      </router-link>
      <div class="category category-more show-sidebar">MORE</div>
    </div>
    <div class="product-filter shop-grid-item">
      <div class="filter-head">
        <div class="filter-title">Product Filter</div>
        <LeftArrow />
      </div>
      <div class="filter-body">
        <div class="filter-price">
          <div>Price</div>
          <div class="price-label">
            <div class="min-price">min</div>
            <div class="output-price">max</div>
          </div>
          <div class="price-io">
            <input step="10" type="range" id="price-Input" />
          </div>
        </div>
      </div>
    </div>
    <div class="products-section">
      <div class="sort-products">
        <form>
          <div class="select-control">
            <label for="sort">Sort:</label>
            <select onchange="this.form.submit()" name="sort" id="sort">
              <option value="relevant">Relevant</option>
              <option value="to-highest">Price lowest to highest</option>
              <option value="to-lowest">Price highest to lowest</option>
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
            </select>
          </div>
        </form>
      </div>
      <div class="products">
        <product-card
          v-for="product in filteredProducts"
          :product="product"
          v-bind:key="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Shop/ProductCard.vue";
import LeftArrow from "@/components/Icons/LeftArrowIcon.vue";
import { products } from "./productsTemp";
export default {
  data() {
    return {
      products,
      filteredProducts: products,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        if (toParams.category) {
          this.filteredProducts = this.products.filter(({ category }) =>
            category.toLowerCase().includes(toParams.category.toLowerCase())
          );
        } else {
          this.filteredProducts = this.products;
        }
      }
    );
  },
  components: { ProductCard, LeftArrow },
};
</script>

<style scoped>
.shop-grid {
  display: grid;
  grid-template-areas:
    "categ categ"
    "filter products";
  grid-template-columns: 1fr 3fr;
  gap: 1.6rem;
}

.shop-grid-item {
  background: #ddd;
}

/* ----------- CATEGORIES Start ----------- */

.categories {
  grid-area: categ;
  display: flex;
  gap: 1.6rem;
  padding: 0.6rem 4rem;
}

.category {
  color: #050401;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.8rem;
  position: relative;
  transition: all 0.15s ease-in-out;
}
.category:active {
  border-radius: 3px;
}

.category::after {
  position: absolute;
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  right: 0;
  transition: width 0.15s ease-in;
}

.category:hover:after {
  width: 100%;
  background-color: #050401;
}

.category:active::after {
  display: none;
}

/* ----------- CATEGORIES End ----------- */

/* ----------- PRODUCT-FILTER Start ----------- */

.product-filter {
  grid-area: filter;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.4rem;
  min-width: 300px;
}

.filter-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 0.8rem;
}

.filter,
.filter-price {
  color: #050401;
  border-bottom: 1px solid #beb9bf;
}
.filter:last-child {
  border-bottom: 0;
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.8rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.filter-items {
  background-color: #ccc;
  padding: 1rem;
}

.filter-price {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.4rem;
  gap: 0.8rem;
}

.filter-name {
  text-transform: capitalize;
}

.filter-item-name {
  width: 100%;
}

#price-Input {
  width: 100%;
  font-size: 1.6rem;
  -webkit-appearance: none;
  background: #307692;
  outline: none;
  height: 9px;
  opacity: 0.9;
  border-radius: 4px;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

#price-Input:hover {
  opacity: 1;
}

#price-Input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #050401;
  cursor: pointer;
}

#price-Input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #050401;
  cursor: pointer;
}

.price-label {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
}

.price-io {
  display: flex;
  align-items: center;
}

.filter-check {
  margin: 0;
  width: 16px;
  height: 16px;
}

.filter-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.filter-item:last-child {
  margin-bottom: 0;
}

.filter-header:hover {
  color: #460d01;
}

.filter-head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0;
  cursor: pointer;
}

.filter-title {
  text-transform: uppercase;
  font-size: 1.8rem;
}

.filter-icon {
  display: none;
}
/* ----------- PRODUCT-FILTER End ----------- */

/* ----------- PRODUCTS Start ----------- */

.products-section {
  max-width: 120rem;
}

.products {
  display: grid;
  grid-area: products;
  grid-template-columns: repeat(auto-fill, 220px);
  justify-content: space-around;
  align-self: flex-start;
  gap: 1rem;
  margin-bottom: 2.4rem;
}

.product-filter,
.categories {
  box-shadow: 0px 0px 1px #050401a8;
}

/* ----------- PRODUCTS End ----------- */

/* ----------- SORT Start ----------- */

#sort {
  background: transparent;
  font-size: 1.5rem;
  padding: 1rem;
  border: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
}

#sort option {
  background-color: #ddd;
}

.select-control {
  border: #beb9bf 1px solid;
  width: max-content;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
}

.sort-products {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.8rem;
}
/* ----------- SORT End ----------- */

.category-more {
  display: none;
}

@media screen and (max-width: 800px) {
  .shop-grid {
    grid-template-areas:
      "categ"
      "filter"
      "products";
    grid-template-columns: 100%;
    gap: 0.8rem;
  }
  .categories {
    gap: 0.6rem;
    padding: 1rem;
    justify-content: space-between;
    width: 100%;
  }
  .product-filter {
    position: sticky;
    z-index: 300;
    top: 55px;
    min-height: auto;
    width: 100%;
    padding: 0.4rem 1.2rem;
  }
  .filter-head {
    justify-content: space-between;
  }
  .filter-title {
    font-size: 1.6rem;
  }
  .filter-icon {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: block;
    transition: all 0.1s ease-in-out;
  }
  .rotate {
    transform: rotate(-90deg);
  }
  .product-filter,
  .categories,
  .products {
    justify-self: center;
  }
  .category-hidden {
    display: none;
  }
  .category-more {
    display: block;
  }
  .category {
    cursor: pointer;
    padding: 0.6rem 1rem;
  }
  .products {
    padding: 0 4.8rem;
  }
}

@media screen and (min-width: 561px) {
  .product {
    transition: all 0.12s ease-in-out;
  }
  .product:hover {
    transform: scale(1.02);
  }
}

@media screen and (max-width: 560px) {
  .products {
    grid-template-columns: 1fr;
  }
  .sort-products form {
    width: 100%;
  }
  .select-control {
    width: 100%;
    justify-content: space-between;
  }
  #sort {
    width: 100%;
  }
  .product-image {
    height: 40vh;
    background-size: contain;
  }
}
</style>
