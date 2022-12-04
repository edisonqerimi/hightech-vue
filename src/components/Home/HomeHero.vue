<template>
     <section class="hero-section">
        <div class="container hero">
            <div class="hero-content hero-item">
                <div class="hero-title">
                    Technology for your needs
                </div>
                <p class="hero-desc">
                    Shop for tech products with us, guaranteed quality, fast delivery and arrived
                    safely to the destination.
                  </p>
                <div class="hero-buttons">
                  <router-link class="btn btn-info shop-button" to="/shop">
                      Shop
                  </router-link>
                  <router-link class="btn btn-info login-button" to="/register">
                    Sign Up
                  </router-link>
                </div>
            </div>
            <div class="hero-image hero-item">
                <img draggable="false" src="../../assets/images/dell.png" alt="Dell">
            </div>
        </div>
    </section>

</template>

<style scoped>
.hero-section {
    min-height: 90vh;
    color: #050401;
    background: linear-gradient(to bottom, #fffaff, rgba(255, 255, 255, 0.9)), url('../../assets/images/main2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;
}

.hero {
    display: flex;
    align-items: center;
    gap: 1.6rem;
}

.hero-item {
    flex: 50%;
}

.hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 300px;
}

.hero-image img {
    object-fit: contain;
    width: 95%;
}

.hero-title {
    font-size: 3.8rem;
    text-transform: uppercase;
    margin-bottom: 1.4rem;
    font-weight: 600;
    color: #050401;
}

.hero-desc {
    margin-bottom: 3.6rem;
    line-height: 1.4;
    letter-spacing: 1px;
    font-size: 1.8rem;
    font-weight: 500;
    color: #222;
}

.hero-buttons {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.shop-button,
.login-button {
    font-size: larger;
    border-radius: 2px;
    text-transform: uppercase;
    padding: 0.8rem 2.4rem;
}

.shop-button {
    border: 2px solid #307692;
}
    
@media screen and (max-width:768px) {

.hero-title {
    font-size: 3.2rem;
}
}
@media screen and (max-width:640px) {
    .hero {
        gap: 3.2rem;
        flex-direction: column;
    }
}

</style>