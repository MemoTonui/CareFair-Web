<template>
  <div class="flex justify-center my-16">
    <div class="grid grid-cols-3 gap-10">
      <div v-for="service in services" :key="service.serviceName">
        <Cards
          :textColor="service.textColor"
          :serviceName="service.serviceName"
          :serviceDescription="service.serviceDescription"
          :serviceImage="service.serviceImage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Cards from "/src/components/WebsiteComponents/ServiceCards.vue";
export default {
  components: {
    Cards,
  },
  data() {
    return {
      services: [
        {
          serviceName: "Child Care",
          serviceDescription:
            "Professional nannies are magical humans with a unique set of skills and the power to swoop in and make children and parents feel at ease.",
          serviceImage: "/src/assets/child.gif",
          textColor: "text-primary",
        },
        {
          serviceName: "Pet Care",
          serviceDescription:
            "A pet care giver is someone who is responsible for the well-being and daily care of pets, such as dogs, cats, and other domestic animals.",
          serviceImage: "/src/assets/pet.gif",
          textColor: "text-pink",
        },
        {
          serviceName: "Senior Care",
          serviceDescription:
            "Professional nannies are magical humans with a unique set of skills and the power to swoop in and make children and parents feel at ease.",
          serviceImage: "/src/assets/senior.gif",
          textColor: "text-orange",
        },
      ],
    };
  },
};
</script>
