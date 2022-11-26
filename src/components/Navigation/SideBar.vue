<template>
    <div id="sidebar">
    <div class='close'>
        <CloseIcon/>
    </div>
    <div class="side-title-container">
        <a class='side-title' href="index.html">
            <div class='nav-logo'>
                <LogoIcon/>
            </div>
            <div>HIGH TECH</div>
        </a>
    </div>
    <form class='side-form search-form' action="./search.html">
        <input class='search-input side-search' name='search' placeholder='Search products'/>
    </form>
    <div id='account-side' class="account-items">
        <div id='account-items-side' class="account-items-side">
            <a class='account-icon' href="./login.html?returnUrl=${returnUrl}">
                <LoginIcon/>
                <div>Log In</div>
            </a>
            <a class='account-icon' href="./register.html">
                <RegisterIcon/>
                <div>Register</div>
            </a>
        </div>
    </div>
    <div class="side-items">
        <a href="./shop.html" class="item-1 side-row">
            <div class="side-item">All categories</div>
        </a>

        <a href="./desktops.html" class="item-2 side-row">
            <div class="side-item">Desktops</div>
        </a>

        <a href="./laptop.html" class="item-2 side-row">
            <div class="side-item">Laptops</div>
        </a>

        <a href="./smartphone.html" class="item-3 side-row">
            <div class="side-item">Smartphones</div>
        </a>

        <a href="./accessories.html" class="item-3 side-row">
            <div class="side-item">Accessories</div>
        </a>
        <a href="#footer-start" class="item-3 side-row">
            <div class="side-item">Support</div>
        </a>
    </div>
</div>
</template>

<script>
import CloseIcon from '../Icons/CloseIcon.vue';
import LoginIcon from '../Icons/LoginIcon.vue';
import LogoIcon from '../Icons/LogoIcon.vue';
import RegisterIcon from '../Icons/RegisterIcon.vue';


export default {
    components:{
    RegisterIcon,
    LoginIcon,
    LogoIcon,
    CloseIcon
}
}
</script>

<style scoped>
#sidebar {
    display: none;
    top: 0;
    background: #FFFAFF;
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

.side-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    text-transform: uppercase;
    color: #050401;
}


.side-row:hover {
    color: #464542;
}
</style>