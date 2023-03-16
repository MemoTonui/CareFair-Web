<template>
  <div class="flex justify-center my-16">
    <div class="grid grid-cols-3 gap-10 m-5">
      <Cards
        :textColor="services[0].textColor"
        :serviceName="services[0].serviceName"
        :serviceDescription="services[0].serviceDescription"
        serviceImage="/src/assets/child.gif"
      />
      <Cards
        :textColor="services[1].textColor"
        :serviceName="services[1].serviceName"
        :serviceDescription="services[1].serviceDescription"
        serviceImage="/src/assets/pet.gif"
      />
      <Cards
        :textColor="services[2].textColor"
        :serviceName="services[2].serviceName"
        :serviceDescription="services[2].serviceDescription"
        serviceImage="/src/assets/senior.gif"
      />
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
          textColor: "text-primary",
        },
        {
          serviceName: "Pet Care",
          serviceDescription:
            "A pet care giver is someone who is responsible for the well-being and daily care of pets, such as dogs, cats, and other domestic animals.",
          textColor: "text-pink",
        },
        {
          serviceName: "Senior Care",
          serviceDescription:
            "Professional nannies are magical humans with a unique set of skills and the power to swoop in and make children and parents feel at ease.",
          textColor: "text-orange",
        },
      ],
    };
  },
};
</script>
