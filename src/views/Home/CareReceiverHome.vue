<template>
  <div>
    <div class="app relative">
      <div>
        <LoggedInNavbar />
      </div>
      <router-view></router-view>
      <div><Footer /></div>
    </div>
  </div>
</template>

<script>
import NavBar from "/src/components/Navbars/NavBar.vue";
import LoggedInNavbar from "/src/components/Navbars/LoggedInNavbar.vue";
import Footer from "/src/components/Footer.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    NavBar,
    Footer,
    LoggedInNavbar,
  },
};
</script>
