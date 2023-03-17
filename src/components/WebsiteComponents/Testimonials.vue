<template>
  <div class="my-16">
    <div>
      <h2 class="font-bold text-secondary text-sm uppercase text-center my-5">
        Testimonials
      </h2>

      <h2 class="font-semibold m-5 text-center text-4xl md:text-3xl">
        What our Clients say about us
      </h2>
    </div>
    <div class="flex justify-center my-12 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 m-5">
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
            "I cannot say enough good things about Carefair! The app is incredibly user-friendly and allowed me to find a caregiver for my aging parents quickly and easily.The caregiver we found through the app is amazing - she is kind, patient, and highly skilled. The app also makes it easy to communicate with her and stay informed about my parents care.I highly recommend Carefair to anyone in need of a reliable and compassionate caregiver.",
          name: "Kristen Harrison",
        },
        {
          testimonial:
            "I am so impressed with Carefair! The app is incredibly efficient and streamlined, making it easy to find a qualified caregiver for my disabled sister. The apps background checks and user reviews gave me peace of mind knowing that we were working with a highly vetted and experienced caregiver. I also love the apps messaging feature, which allows us to communicate with the caregiver quickly and easily. Carefair is a lifesaver and I highly recommend it to anyone in need of caregiving services.",
          name: "John Doe",
        },
        {
          testimonial:
            "I have been using Carefair for a few months now and I am so grateful for this amazing app. It has made finding and working with a caregiver for my elderly mother incredibly easy and stress-free. The caregiver we found through the app is highly skilled and compassionate, and my mother adores her. The app's scheduling and messaging features have been a huge help in keeping everyone on the same page and ensuring that my mother receives the care she needs. I highly recommend Carefair to anyone in need of caregiving services - it's truly a game-changer!",
          name: "Jane Doe",
        },
      ],
    };
  },
};
</script>
<style scoped>
h2 {
  font-family: "Gentium Book Plus", serif;
}
</style>
