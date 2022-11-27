<template>
    <NavBar :user="user" :onHamburgerClick="toggleSideBar"/>
    <SideBar :user="user" :onClose="toggleSideBar" v-show="isSidebarActive" />
</template>

<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';

export default {
    created() {
        window.addEventListener("resize", this.windowResizeHandler);
    },
    unmounted() {
        window.removeEventListener("resize", this.windowResizeHandler);
    },
    data(){
        return {
            isSidebarActive:false,
            user:{
                role:"guest"
            }
    }
    },
    methods:{
        toggleSideBar(){
            this.isSidebarActive = !this.isSidebarActive
        },
        windowResizeHandler(){
            if(window.innerWidth>768&&this.isSidebarActive){
                this.isSidebarActive = false;
            }
        }
    },
    components:{
    NavBar,
    SideBar,
}
}

</script>

