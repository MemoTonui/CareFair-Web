<template>
  <div>
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <Testimonials />
    <DownloadAdvert />
    <Footer />
  </div>
</template>

<script>
import NavBar from "/src/components/NavBar.vue";
import Footer from "/src/components/Footer.vue";
import HeroSection from "/src/components/WebsiteComponents/HeroSection.vue";
import ServicesSection from "/src/components/WebsiteComponents/ServicesSection.vue";
import Testimonials from "/src/components/WebsiteComponents/Testimonials.vue";
import DownloadAdvert from "/src/components/WebsiteComponents/DownloadAdvert.vue";

export default {
  components: {
    NavBar,
    Footer,
    HeroSection,
    ServicesSection,
    Testimonials,
    DownloadAdvert,
  },
};
</script>

<style></style>
