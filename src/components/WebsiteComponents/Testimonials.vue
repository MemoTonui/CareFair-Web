<template>
  <div class="py-5 bg">
    <div>
      <h2 class="font-bold text-secondary text-sm uppercase text-center my-5">
        Testimonials
      </h2>

      <h2 class="font-semibold m-5 text-center text-4xl md:text-4xl">
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
            "I am a single parent and before now, it has been such a struggle trying to joggle work and taking care of my kids at the same time. However, since I came across care Fair, they have connected me to one of the most professional, compassionate care givers that meets my children's needs so well. I will recommend them to every parent out there! Honestly the best I have worked with so far",
          name: "Kristen Harrison",
        },
        {
          testimonial:
            "As a caregiver, getting connected to clients in my area has not been easy due to so many factors, payment plan being the major reason. This changed when I signed up at the care fair as the pay is highly competitive and equal to the responsibilities I have. I do not regret signing up and it has been an amazing experience so far!",
          name: "Joanna Martins",
        },
        {
          testimonial:
            "I have two lovely pet dogs- coco and moon that I absolutely love so much but sometimes I cannot be there for them, and this has bothered me so much. I needed to find someone who understood pets and how to care for them in my absence which is why I am so grateful to the care fair for connecting me to an amazing pet care giver who takes very good care of my babies in my absence. Totally worth it folks!”",
          name: "Jake Walt",
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
