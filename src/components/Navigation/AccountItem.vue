<template>
     <div class='account-icon' @click="to?$router.push(to):null">
                <slot name="icon"></slot>
                <div><slot></slot></div>
     </div>
</template>

<script>
    export default {
        props:{
            icon:HTMLElement,
            to:String,
        }
    }
</script>

<style>
.account-icon {
    color: #050401;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 1.6rem;
    cursor: pointer;
}

.account-icon {
    transition: all 0.12s ease-in-out;
}

.account-icon:hover {
    background: #050401;
    color: #FFFAFF;
}
</style>