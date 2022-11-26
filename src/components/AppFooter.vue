<template>
    <div class="footer">
 <div id='footer-start' class='footer-start'>
        <div class='footer-item footer-item1'>
            <h2>Subscribe</h2>
            <form class='footer-form'>
                <input class='search-input' placeholder='Enter email address'/>
                <button class='btn btn-info'>Subscribe</button>
            </form>
        </div>
        <div class='footer-item footer-item2'>
        <h2>Quick links</h2>
        <div class='links-container'>
            <div class='footer-links-left footer-links'>
                <a href="#" class="footer-link">
                    Support
                </a>
                <a href="./login.html" class="footer-link">
                    Log in
                </a>
                <a href="./register.html" class="footer-link">
                    Sign Up
                </a>
                <a href="./cart.html" class="footer-link">
                    Cart
                </a>
            </div>
            <div class='footer-item footer-links-right footer-links'>
                <a href="./shop.html" class="footer-link">
                    All categories
                </a>

                <a href="./desktops.html" class="footer-link">
                    Desktops
                </a>

                <a href="./laptop.html" class="footer-link">
                    Laptops
                </a>

                <a href="./smartphone.html" class="footer-link">
                    Smartphones
                </a>

                <a href="./accessories.html" class="footer-link">
                   Accessories
                </a>
            </div>
            </div>
        </div>
        <div class='footer-item footer-item3'>
            <h2>Follow us</h2>
            <div class='footer-icons'>
                <a href='#'>
                    <FacebookIcon/>
                </a>
                <a href='#'>
                    <InstagramIcon/>
                </a>

                <a href='#'>
                    <TwitterIcon/>
                </a>
                <a href='#'>
                    <YoutubeIcon/>
                </a>
            </div>
        </div>
    </div>
    <div class='footer-end'>
        <div class='footer-end-links'>
            <a href='#'>Terms of use</a>
            <a href='#'>Privacy Policy</a>
        </div>
        <div>Edison Qerimi &mdash; 2022 Open Source</div>
        <div class='cards'>
            <img width="35px" src="../assets/logos/mastercard.png" alt="MasterCard">
            <img width="35px" src="../assets/logos/visa.png" alt="Visa">
        </div>
    </div>
</div>
</template>

<script>

    import FacebookIcon from './Icons/FacebookIcon.vue';
    import InstagramIcon from './Icons/InstagramIcon.vue';
    import TwitterIcon from './Icons/TwitterIcon.vue';
    import YoutubeIcon from './Icons/YoutubeIcon.vue';

    export default {
        components:{
            FacebookIcon,
            InstagramIcon,
            TwitterIcon,
            YoutubeIcon
        }
    }

</script>

<style scoped>

.footer {
    font-size: 1.6rem;
}

.footer-end {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    justify-content: space-between;
    padding: 1rem 2.4rem;
    font-size: 1.4rem;
}

.footer-end-links {
    display: flex;
    gap: 1rem;
}

.footer-start {

    border-bottom: 1px rgb(160, 160, 160) solid;
    border-top: 1px rgb(160, 160, 160) solid;
    padding: 3.2rem 6.4rem;
    display: flex;
    justify-content: space-around;
    gap: 2.4rem;
}

.footer-form {
    display: flex;
    align-items: center;
}

.footer-form .btn {
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.footer-start h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 1px;
}

.footer-start .search-input {
    height: 42px;
    width: 200px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}

.footer-item1,
.footer-item3 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
}

.footer-item2 {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: space-around;
    align-items: center;
}

.links-container {
    display: flex;
    gap: 7.2rem;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.footer a {
    color: #fffaff;
    transition: all 0.12s ease-in-out;
}

.footer a:hover {
    color: #AAA;
}

.footer-item2 a {
    padding: 0.8rem 1rem;
}

.footer-icons {
    display: flex;
    gap: 1rem;
}


@media screen and (max-width:768px) {
    .footer-start,
    .footer-end {
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>