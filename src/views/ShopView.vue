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
        Accessories
      </router-link>
      <div class="category category-more show-sidebar">MORE</div>
    </div>
    <div class="product-filter shop-grid-item">
      <div class="filter-head">
        <div class="filter-title">Product Filter</div>
        <div class="fitler-clear-icon">
          <div class="filter-clear" @click="onClearFilter">Clear</div>
          <LeftArrow class="filter-icon" />
        </div>
      </div>
      <div class="filter-body">
        <div class="filter-price">
          <div>Price</div>
          <div class="price-label">
            <div class="min-price">{{ minPrice }}</div>
            <div class="output-price">{{ outputPrice }}</div>
          </div>
          <div class="price-io">
            <input
              :min="minPrice"
              :max="maxPrice"
              :value="outputPrice"
              step="1"
              type="range"
              id="price-Input"
              @change="onPriceRangeChange"
            />
          </div>
        </div>
        <div class="filter">
          <div
            class="filter-item-container"
            v-for="filter in filters"
            v-bind:key="filter.id"
          >
            <div class="filter-header" @click="onFilterHeaderClick(filter.id)">
              <div>{{ filter.name }}</div>
              <LeftArrow />
            </div>
            <div
              v-show="!filter.hidden"
              v-for="value in filter.values"
              v-bind:key="value"
              class="filter-items"
            >
              <label :for="value" class="filter-item"
                >{{ value }}
                <input
                  :id="value"
                  type="checkbox"
                  :checked="
                    filterData.some(
                      (item) =>
                        item.filterBy == filter.name && item.value === value
                    )
                  "
                  @change="onFilterChange({ value, filterBy: filter.name })"
                  class="filter-check"
              /></label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="products-section">
      <div class="sort-products">
        <form>
          <div class="select-control">
            <label for="sort">Sort:</label>
            <select @change="onSortChange" name="sort" class="sort">
              <option value="relevant">Relevant</option>
              <option value="ascendingPrice">Price lowest to highest</option>
              <option value="descendingPrice">Price highest to lowest</option>
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
            </select>
          </div>
        </form>
      </div>
      <div class="products">
        <product-card
          @click="()=>$router.push({ path: `/shop/product/${product.id}`})"
          v-for="product in productsFiltered"
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
// import _ from "lodash";
export default {
  data() {
    return {
      products,
      productsFilteredByCategory: products,
      productsFiltered: [],
      filterData: [],
      minPrice: 0,
      maxPrice: 0,
      outputPrice: 0,
      filters: [],
      sortBy:"relevant"
    };
  },
  created() {
    const categoryParam = this.$route.params.category;
    let prices = [];
    if (categoryParam) {
      const productsFilteredByCategory = this.products.filter(({ category }) =>
        category
          .toLowerCase()
          .includes(this.$route.params.category?.toLowerCase())
      );
      prices = productsFilteredByCategory.map((item) =>
        item.discount.isDiscount ? item.discount.priceDiscount : item.price
      );
      this.productsFilteredByCategory = productsFilteredByCategory;
      this.productsFiltered = productsFilteredByCategory;
    } else {
      prices = this.products.map((item) =>
        item.discount.isDiscount ? item.discount.priceDiscount : item.price
      );
      this.productsFilteredByCategory = this.products;
      this.productsFiltered = this.products;
    }
    this.filters = [
      {
        id: 1,
        name: "color",
        values: [
          ...new Set(this.productsFilteredByCategory.map(({ color }) => color)),
        ],
      },
      {
        id: 2,
        name: "brand",
        values: [
          ...new Set(this.productsFilteredByCategory.map(({ brand }) => brand)),
        ],
      },
    ];
    this.prices = prices;
    this.minPrice = Math.min(...this.prices);
    this.maxPrice = Math.max(...this.prices);
    this.outputPrice = Math.max(...this.prices);
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        let prices = [];
        this.filterData = [];
        if (toParams.category) {
          // document.title = toParams.category.toUpperCase();
          const productsFilteredByCategory = this.products.filter(
            ({ category }) =>
              category.toLowerCase().includes(toParams.category.toLowerCase())
          );
          this.productsFilteredByCategory = productsFilteredByCategory;
          this.productsFiltered = productsFilteredByCategory;
          prices = this.productsFilteredByCategory.map((item) =>
            item.discount.isDiscount ? item.discount.priceDiscount : item.price
          );
        } else {
          prices = this.products.map((item) =>
            item.discount.isDiscount ? item.discount.priceDiscount : item.price
          );
          this.productsFilteredByCategory = this.products;
          this.productsFiltered = this.products;
        }
        this.filters = [
          {
            id: 1,
            name: "color",
            values: [
              ...new Set(
                this.productsFilteredByCategory.map(({ color }) => color)
              ),
            ],
          },
          {
            id: 2,
            name: "brand",
            values: [
              ...new Set(
                this.productsFilteredByCategory.map(({ brand }) => brand)
              ),
            ],
          },
        ];
        this.prices = prices;
        this.minPrice = Math.min(...this.prices);
        this.maxPrice = Math.max(...this.prices);
        this.outputPrice = Math.max(...this.prices);
      }
    );
  },
  methods: {
    onFilterHeaderClick(id) {
      const index = this.filters.findIndex((item) => item.id === id);
      this.filters[index].hidden = !this.filters[index].hidden;
    },
    onFilterChange({ value, filterBy }) {
      if (
        this.filterData.some(
          (item) => item.value == value && item.filterBy == filterBy
        )
      ) {
        this.filterData = this.filterData.filter(
          (item) => !(item.value == value && item.filterBy == filterBy)
        );
      } else {
        this.filterData = [...this.filterData, { value, filterBy }];
      }

      this.productsFiltered = this.productsFilteredByCategory.filter((item) =>
        item.discount.isDiscount
          ? item.discount.priceDiscount <= this.outputPrice
          : item.price <= this.outputPrice
      );
      if (this.filterData.length > 0) {
        // this.productsFiltered = this.productsFiltered.filter((item) =>
        //   this.filterData.some(
        //     (filter) => item[filter.filterBy] === filter.value
        //   )
        // );
        const filterBySet = [
          ...new Set(this.filterData.map(({ filterBy }) => filterBy)),
        ];
        filterBySet.forEach((f) => {
          this.productsFiltered = this.productsFiltered.filter((item) =>
            this.filterData.some(
              (filter) =>
                item[filter.filterBy] === filter.value && filter.filterBy === f
            )
          );
        });
      }
    },
    onPriceRangeChange(e) {
      console.log(e.target.value);
      console.log(this.filterData);
      this.outputPrice = e.target.value + 2;
      this.productsFiltered = this.productsFilteredByCategory.filter((item) =>
        item.discount.isDiscount
          ? item.discount.priceDiscount <= this.outputPrice
          : item.price <= this.outputPrice
      );

      if (this.filterData.length > 0) {
        // this.productsFiltered = this.productsFiltered.filter((item) =>
        //   this.filterData.some(
        //     (filter) => item[filter.filterBy] === filter.value
        //   )
        // );
        const filterBySet = [
          ...new Set(this.filterData.map(({ filterBy }) => filterBy)),
        ];
        filterBySet.forEach((f) => {
          this.productsFiltered = this.productsFiltered.filter((item) =>
            this.filterData.some(
              (filter) =>
                item[filter.filterBy] === filter.value && filter.filterBy === f
            )
          );
        });
      }
    },
    onClearFilter() {
      this.filterData = [];
      this.productsFiltered = this.productsFilteredByCategory;
      this.outputPrice = Math.max(...this.prices);
    },
    onSortChange(e){
      const value = e.target.value;
      switch (value) {
        case 'az':
        this.productsFiltered.sort((a, b) => a.brand.localeCompare(b.brand));
            break;
        case 'za':
            this.productsFiltered.sort((a, b) => b.brand.localeCompare(a.brand));
            break;
        case 'ascendingPrice':
        this.productsFiltered.sort((a, b) => {
                let aPrice = a.price;
                let bPrice = b.price;
                if (a.discount.isDiscount) {
                    aPrice = a.discount.priceDiscount;
                }
                if (b.discount.isDiscount) {
                    bPrice = b.discount.priceDiscount;
                }
                return bPrice - aPrice;
            });
            break;
        case 'descendingPrice':
        this.productsFiltered.sort((a, b) => {
                let aPrice = a.price;
                let bPrice = b.price;
                if (a.discount.isDiscount) {
                    aPrice = a.discount.priceDiscount;
                }
                if (b.discount.isDiscount) {
                    bPrice = b.discount.priceDiscount;
                }
                return aPrice - bPrice;
            });
            break;
        default:
          
            break;
    }
    }
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

.filter-item-container,
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
  text-transform: capitalize;
}

.filter-item-container {
  margin-bottom: 8px;
}

.filter-price {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.4rem;
  gap: 0.8rem;
}

.filter-item {
  width: 100%;
  text-transform: capitalize;
  background-color: #ccc;
  padding: 1rem;
  display: block;
  margin-bottom: 0.8rem;
}

#price-Input {
  width: 100%;
  font-size: 1.6rem;
  appearance: none;
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
  margin-bottom: 0;
}

.filter-header:hover {
  color: #460d01;
}

.filter-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;
}

.filter-title {
  text-transform: uppercase;
  font-size: 1.8rem;
}

.filter-icon {
  display: none;
}

.filter-clear {
  cursor: pointer;
  width: 45px;
  justify-content: center;
  display: flex;
  padding: 0.4rem 0;
}

.fitler-clear-icon {
  display: flex;
  gap: 0.8rem;
  align-items: center;
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

.sort {
  background: transparent;
  font-size: 1.5rem;
  padding: 1rem;
  border: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
}

.sort option {
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
  .filter-body{
    display: none;
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
  .sort {
    width: 100%;
  }
  .product-image {
    height: 40vh;
    background-size: contain;
  }
}
</style>
