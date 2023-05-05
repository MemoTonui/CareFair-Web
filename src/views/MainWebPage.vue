<template>
  <div>
    <div class="bg">
      <div v-if="isLoggedIn === 'true'">
        <LoggedInNavbar />
      </div>
      <div v-else>
        <NavBar />
      </div>

      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <DownloadAdvert />
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from "/src/components/Navbars/NavBar.vue";
import LoggedInNavbar from "/src/components/Navbars/LoggedInNavbar.vue";
import Footer from "/src/components/Footer.vue";
import HeroSection from "/src/components/WebsiteComponents/HeroSection.vue";
import ServicesSection from "/src/components/WebsiteComponents/ServicesSection.vue";
import Testimonials from "/src/components/WebsiteComponents/Testimonials.vue";
import DownloadAdvert from "/src/components/WebsiteComponents/DownloadAdvert.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "/src/router";
export default {
  components: {
    NavBar,
    LoggedInNavbar,
    Footer,
    HeroSection,
    ServicesSection,
    Testimonials,
    DownloadAdvert,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("is Logged In ", this.isLoggedIn);
  },
  updated() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  },
};
</script>
<style scoped>
.bg {
  background-image: url("/src/assets/confettiBg.svg");
  background-position: center;
  background-repeat: repeat;
}
</style>
