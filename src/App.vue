<!-- src/App.vue -->
<template>
    <div>
      <header class="app-header">
        <app-nav></app-nav>
        <app-banner v-if="isBannerOpen" :onClose="onBannerClose"></app-banner>
      </header>
      <main class="container container-height">
        <router-view></router-view>
      </main>
      <footer>
      <app-footer></app-footer>
    </footer>
    </div>
  </template>
  
  <script>
  import AppNav from './components/Navigation/AppNav'
  import AppBanner from "./components/AppBanner.vue"
  import AppFooter from './components/AppFooter.vue';
  export default {
    created() {
        this.isBannerOpen=!JSON.parse(sessionStorage.getItem("bannerHidden"))
    },
    data(){
        return{
            isBannerOpen:true
        }
    },  
    methods:{
        onBannerClose(){
            this.isBannerOpen = false;
            sessionStorage.setItem("bannerHidden",true);
        }
    },
    components: {
      AppNav,
      AppBanner,
      AppFooter
    }
  }
  </script>

<style>

html {
    font-size: 10px;
    scroll-behavior: smooth;
}
#app {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
    background-color: #eee;
    font-size: 1.6rem;
}



* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.validation {
    color: #BF3E25;
}

.container-height {
    min-height: 100vh;
}

.container {
    max-width: 130rem;
    padding: 0 4.8rem;
    margin: 0 auto;
}


.cont-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    padding: 1rem 0.8rem;
    background: #050401;
    color: #FFFAFF;
    width: max-content;
    cursor: pointer;
    display: inline-block;
    border-radius: 3px;
    border: 0;
    font-size: 1.6rem;
    transition: all 0.13s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.form {
    box-shadow: 0px 0px 1px #050401a8;
    width: 500px;
    margin: 1rem 0;
    background-color: #ddd;
    padding: 4.8rem;
    gap: 1.8rem;
    color: #050401;
    display: flex;
    flex-direction: column;
}

.buttons {
    display: flex;
    gap: 1rem;
}

.form-control {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    color: #050401;
}

.form-control input {
    font-size: 1.6rem;
    outline: none;
    height: 38px;
    border: 0;
    box-shadow: 0px 1px 2px #05040177;
    background-color: #FFFAFF;
    padding-left: 1rem;
    transition: all 0.15s ease-in;
}

.form-control input:focus {
    font-size: 1.55rem;
    box-shadow: 0px 0px 3px #05040177;
}

.center-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.modal {
    top: 0;
    right: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.603);
    width: 100%;
    height: 100vh;
}


.product-btn {
    font-size: 1.3rem;
    text-transform: uppercase;
}

.btn-info {
    background: #307692;
}

.btn-red {
    background: #A0351F;
}

.btn:hover {
    background: #1e1d1a;
}

.btn:active {
    background: #373634;
}

.btn-info:hover {
    background: #45849d;
}

.btn-info:active {
    background: #6e9fb3;
}

.btn-red:hover {
    background: #BF3E25;
}

.btn-red:active {
    background: #FC5130;
}

.center {
    width: 80%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

}

.section-title {
    color: #307692;
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: 500;
}


</style>


<style>
#nav,
.banner,
.nav-item,
.nav-title,
.icon-item,
.support,
.footer,
.icon-title {
    color: #FFFAFF;
}

#nav,
.banner,
.footer {
    background: #050401;
}
</style>

<style>

.search-input {
    top: 0;
    cursor: text;
    outline: none;
    height: 30px;
    width: 160px;
    font-size: 1.6rem;
    color: #050401;
    background-color: #FFFAFF;
    padding-left: 0.8rem;
    border: 0;
    border-radius: 1px;
    margin: 0;
    animation: slide-search 0.15s forwards;
}

.hidden {
    display: none;
}

.added-cart {
    background: green;
    color: #fffaff;
    padding: 1rem 4.8rem;
    border-radius: 3px;
    margin-bottom: 5px;
    animation: opacity 0.3s ease-in-out;
}

.added-carts{
    position: fixed;
    right: 10%;
    bottom: 1%;
    z-index: 200;
}

@keyframes opacity {
    from {
        opacity: 0;
    }

    to {
        opacity: 100%;
    }
}

/* 
@media screen and (min-width:1300px) {
    html{
        font-size: 70%;
    }
} */

@media screen and (max-width:768px) {
    html{
        font-size: 57%;
    }
    .container{
        padding: 0 2.4rem;
    }
   
  
}
</style>