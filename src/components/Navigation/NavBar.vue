<template>
    <div id="nav">
<div @click="onHamburgerClick" class="hamburger show-sidebar">
    <HamburgerIcon/>
</div>

<div class="nav-start">
    <router-link class='icon-title' to="/">
        <div class='nav-logo'>
            <LogoIcon/>
        </div>
        <div class="nav-title">HIGH TECH</div>
    </router-link>

    <div class="nav-items">
        <router-link to="/shop" class="nav-item">
            <div>Shop</div>
            <!--${bagIcon}-->
        </router-link>
        <div class="nav-item">
            <div>Support</div>
            <!--${supportIcon}-->
        </div>
    </div>
</div>

<div class="nav-end">

    <form class='search-form' action="/search">
        <input v-show="toggleSearch" class="search-input" name='search' placeholder='Search products'/>
    </form>

    <div @click="onSearchClick" class="search-item">
      <SearchIcon/>
    </div>

    <div class="profile icon-item">
        <ProfileIcon/>
    <div id='account' class='account-navbar'>
        <div v-if="user" class="account-items-nav">
            <account-item to="profile">
                <template v-slot:icon><ProfileIcon/></template>
                Account
            </account-item>
            <account-item to='administration'>
                <template v-slot:icon><AdminIcon/></template>
                Admin
            </account-item>
            <account-item @click="onLogout">
                <template v-slot:icon><LogoutIcon/></template>
                Log out
            </account-item>
        </div>
        <div v-else class="account-items-nav">
            <account-item to='login'>
                <template v-slot:icon><LoginIcon/></template>
                Login
            </account-item>
            <account-item to='register'>
                <template v-slot:icon><RegisterIcon/></template>
                Register
            </account-item>
        </div>
    </div>
    </div>
    <router-link class="cart icon-item" to="cart">
        <CartIcon/>
        <div class='cart-count hidden'>0</div>
    </router-link>
</div>
</div>
</template>

<script>
import CartIcon from '../Icons/CartIcon.vue';
import HamburgerIcon from '../Icons/HamburgerIcon.vue';
import LoginIcon from '../Icons/LoginIcon.vue';
import LogoIcon from '../Icons/LogoIcon.vue';
import ProfileIcon from '../Icons/ProfileIcon.vue';
import RegisterIcon from '../Icons/RegisterIcon.vue';
import SearchIcon from '../Icons/SearchIcon.vue';
import AccountItem from './AccountItem.vue';
import AdminIcon from '../Icons/AdminIcon.vue';
import LogoutIcon from '../Icons/LogoutIcon.vue';

export default {
    data(){
        return{
            toggleSearch:false
        }
    },
    props:{
        onHamburgerClick:Function,
        user:Object
    },
    methods:{
        onSearchClick(){
            this.toggleSearch=!this.toggleSearch
        }
    },
    components:{
    CartIcon,
    RegisterIcon,
    LoginIcon,
    ProfileIcon,
    SearchIcon,
    LogoIcon,
    HamburgerIcon,
    AccountItem,
    AdminIcon,
    LogoutIcon
}
}
</script>

<style scoped>


#nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 4.8rem;
    border-bottom: 1px rgb(160, 160, 160) solid;
    position: sticky;
    top: 0;
    z-index: 999;
}

.nav-start {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.nav-item {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.4rem;
    padding: 1rem 0.6rem;
    transition: all 0.2s ease-in-out;
    position: relative;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
}

.nav-item::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 0px;
    bottom: 0;
    left: 0;
    transition: width 0.2s ease-in;
}

.nav-item:hover::after {
    width: 100%;
    background-color: #FFFAFF;
}

.nav-title {
    font-size: 2.8rem;
    letter-spacing: 1px;
    white-space: nowrap;
    /* animation: slide-title 0.12s forwards; */
}

@keyframes slide-title {
    from {
        clip-path: inset(0 100% 0 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

.nav-logo {
    height: 30px;
    width: 30px;
}

.nav-items {
    display: flex;
    gap: 0.8rem;
}

.nav-end {
    gap: 0.8rem;
    display: flex;
    align-items: center;
    position: relative;
}

.icon-title {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.profile,
.cart,
.search-item {
    padding: 0.6rem 1rem;
}



.cart{
    position: relative;
}

.cart-count{
    position: absolute;
    background-color: #A0351F;
    top: -10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    right: -15%;
}

.search-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    position: relative;
}

.search {
    transition: transform 0.3s ease-in-out;
}



@keyframes slide-search {
    from {
        clip-path: inset(0 0 0 100%);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}


.account-navbar {
    position: absolute;
    display: none;
    top: 35px;
    right: -65px;
    border-radius: 3px;
    flex-direction: column;
    background: #FFFAFF;
    padding: 1.6rem 3.2rem;
    animation: opacity 0.15s ease;
    box-shadow: 0px 2px 4px #05040159;
}

.account-items-nav {
    gap: 1.2rem;
    display: flex;
    flex-direction: column;
}

.account-icon>svg {
    transition: all 0.15s ease-in-out;
}

.login:hover>svg {
    transform: translateX(2px);
}

.register:hover>svg {
    transform: scale(110%)
}

.profile {
    position: relative;
}

.profile:hover .account-navbar{
    display: flex;
}

.search-item:hover .search {
    transform: translateY(-2px);
}

.cart {
    transition: transform 0.17s ease-in;
}

.cart:hover {
    transform: translateY(-2px);
}

.hamburger {
    display: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
    padding: 0.8rem;
    border-radius: 50%;
    transition: background 0.15s ease-in-out;
}

.hamburger:active {
    outline: 1px solid rgba(255, 255, 255, 0.63);
}

.hamburger:hover {
    background: rgba(255, 255, 255, 0.24);
}


@media screen and (max-width:768px) {
    #nav {
        padding: 0.8rem;
    }

    .nav-title {
        display: block;
    }

    .search-item,
    .profile,
    .support,
    .nav-items {
        display: none;
    }

    .hamburger {
        display: block;
    }

}

</style>