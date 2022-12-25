<template>
  <div class="sidebar" ref="sidebarRef">
    <div class="close" @click="onClose">
      <CloseIcon />
    </div>
    <div class="side-title-container">
      <router-link class="side-title" to="/">
        <div class="nav-logo">
          <LogoIcon />
        </div>
        <div>HIGH TECH</div>
      </router-link>
    </div>
    <form class="side-form search-form" action="./search.html">
      <input
        class="search-input side-search"
        name="search"
        placeholder="Search products"
      />
    </form>
    <div>
      <div class="account-items-side" v-if="user">
        <account-item to="/profile">
          <template v-slot:icon><ProfileIcon /></template>
          Account
        </account-item>
        <account-item to="/administration">
          <template v-slot:icon><AdminIcon /></template>
          Admin
        </account-item>
        <account-item @click="onLogout">
          <template v-slot:icon><LogoutIcon /></template>
          Log out
        </account-item>
      </div>
      <div class="account-items-side" v-else>
        <account-item to="/login">
          <template v-slot:icon><LoginIcon /></template>
          Login
        </account-item>
        <account-item to="/register">
          <template v-slot:icon><RegisterIcon /></template>
          Register
        </account-item>
      </div>
    </div>
    <div class="side-items">
      <side-item @click="onSideItemClick('/shop')">All categories</side-item>
      <side-item @click="onSideItemClick('/shop/desktop')">Desktops</side-item>
      <side-item @click="onSideItemClick('/shop/laptop')" >Laptops</side-item>
      <side-item @click="onSideItemClick('/shop/smartphone')" >Smartphones</side-item>
      <side-item @click="onSideItemClick('/shop/accessory')" >Accessories</side-item>
      <side-item @click="onSupportClick">Support</side-item>
    </div>
  </div>
</template>

<script>
import AdminIcon from "../Icons/AdminIcon.vue";
import CloseIcon from "../Icons/CloseIcon.vue";
import LoginIcon from "../Icons/LoginIcon.vue";
import LogoIcon from "../Icons/LogoIcon.vue";
import ProfileIcon from "../Icons/ProfileIcon.vue";
import RegisterIcon from "../Icons/RegisterIcon.vue";
import LogoutIcon from "../Icons/LogoutIcon.vue";
import SideItem from "./SideItem.vue";
import AccountItem from "./AccountItem.vue";

import {ref} from "vue"

import { onClickOutside } from '@vueuse/core'

export default {
  setup(props){
    const sidebarRef = ref(null)
    onClickOutside(sidebarRef,props.onClose)

    return {sidebarRef}
  },
  props: {
    onClose: Function,
    user: Object,
  },
  methods: {
    onLogout(e) {
      console.log(e);
    },
    onSideItemClick(to){
      this.$router.push({path:to})
      this.onClose()
    },
    onSupportClick(){
      this.$router.push({hash:'#footer-start'});
      this.onClose()
    }
  },
  components: {
    RegisterIcon,
    LoginIcon,
    LogoIcon,
    CloseIcon,
    SideItem,
    ProfileIcon,
    AdminIcon,
    LogoutIcon,
    AccountItem,
  },
};
</script>

<style scoped>
.sidebar {
  top: 0;
  background: #fffaff;
  left: 0;
  position: fixed;
  width: 75%;
  padding: 0 1.6rem;
  height: 100vh;
  animation-name: slide;
  animation-duration: 0.4s;
  z-index: 1000;
}

@keyframes slide {
  from {
    left: -50%;
  }

  to {
    left: 0;
  }
}

.close:active {
  border: 1px solid rgba(0, 0, 0, 0.596);
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  padding: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease-in-out;
}

.close:hover {
  background: rgba(0, 0, 0, 0.25);
}

.side-title {
  color: #050401;
  font-size: 2.8rem;
  margin: 1rem 0;
  padding: 0.6rem;
  display: flex;
  align-items: center;
}

.side-search {
  border: 1px solid #464542;
  border-radius: 2px;
  font-size: 1.6rem;
  padding-left: 0.6rem;
  width: 100%;
  height: 35px;
}

.side-form {
  margin-bottom: 10px;
  padding: 0 10px;
}

.account-items-side {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.side-title-container {
  display: flex;
  justify-content: center;
}

.side-items {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-weight: 600;
}
</style>
