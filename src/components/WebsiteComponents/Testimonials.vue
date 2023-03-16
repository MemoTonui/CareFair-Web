<template>
  <div class="my-16">
    <div>
      <h2 class="font-bold text-secondary text-sm uppercase text-center my-5">
        Testimonials
      </h2>

      <h2 class="font-semibold m-5 text-center text-2xl">
        What our Clients say about us
      </h2>
    </div>
    <div class="flex justify-center my-12 m-12">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 m-5">
        <div v-for="testimonial in testimonials" :key="testimonial.name">
          <Cards :testimonial="testimonial.testimonial" :name="testimonial.name" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cards from "/src/components/WebsiteComponents/Testimonial.vue";
export default {
  components: {
    Cards,
  },
  data() {
    return {
      testimonials: [
        {
          testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          name: "John Doe",
        },
        {
          testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          name: "John Doe",
        },
        {
          testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          name: "John Doe",
        },
      ],
    };
  },
};
</script>
