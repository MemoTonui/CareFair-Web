<template>
  <div>
    <div v-if="isLoggedIn === 'true'">
      <LoggedInNavbar />
    </div>
    <div v-else>
      <NavBar />
    </div>
    <div class="my-16">
      <div>
        <h2 class="font-bold text-secondary text-sm uppercase text-center my-5">
          Terms and Conditions
        </h2>

        <h1 class="font-bold m-5 text-center text-4xl md:text-4xl">
          Terms and Conditions
        </h1>
      </div>
      <div class="flex justify-center my-12 mx-auto container">
        <div class="m-5">
          <div class="my-2">
            <div>
              This Privacy Policy describes Our policies and procedures on the collection,
              use and disclosure of Your information when You use the Service and tells
              You about Your privacy rights and how the law protects You.
            </div>
            <div class="mt-3">
              We use Your Personal data to provide and improve the Service. By using the
              Service, You agree to the collection and use of information in accordance
              with this Privacy Policy.
            </div>
          </div>
          <div>
            <h1 class="font-bold text-4xl my-5">Interpretation and Definitions</h1>
            <h2 class="font-semibold text-3xl my-5">Interpretation</h2>
            <p class="my-4">
              The words of which the initial letter is capitalized have meanings defined
              under the following conditions. The following definitions shall have the
              same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>
          <div>
            <h2 class="font-bold text-3xl my-5">Definitions</h2>

            <p class="my-4">For the purposes of this Privacy Policy:</p>
            <li>
              <span class="font-bold">Account</span>
              means a unique account created for You to access our Service or parts of our
              Service.
            </li>
            <li>
              <span class="font-bold"> Affiliate</span> means an entity that controls, is
              controlled by or is under common control with a party, where “control” means
              ownership of 50% or more of the shares, equity interest or other securities
              entitled to vote for election of directors or other managing authority.
            </li>
            <li>
              <span class="font-bold">Application </span> means the software program
              provided by the Company downloaded by You on any electronic device, named
              Thecarefair
            </li>
            <li>
              <span class="font-bold"> Business,</span> for the purpose of the CCPA
              (California Consumer Privacy Act), refers to the Company as the legal entity
              that collects Consumers’ personal information and determines the purposes
              and means of the processing of Consumers’ personal information, or on behalf
              of which such information is collected and that alone, or jointly with
              others, determines the purposes and means of the processing of consumers’
              personal information, that does business in the State of California.
            </li>
            <li>
              <span class="font-bold">Company</span> (referred to as either “the Company”,
              “We”, “Us” or “Our” in this Agreement) refers to The Care Fair INC, 116
              ADAMS WAY, Jackson, NJ.
            </li>
            <li>
              <span class="font-bold">Consumer,</span>for the purpose of the CCPA
              (California Consumer Privacy Act), means a natural person who is a
              California resident. A resident, as defined in the law, includes (1) every
              individual who is in the USA for other than a temporary or transitory
              purpose, and (2) every individual who is domiciled in the USA who is outside
              the USA for a temporary or transitory purpose.
            </li>
            <li>
              <span class="font-bold">Country </span> refers to: New Jersey, United States
            </li>
            <li>
              <span class="font-bold"> Device</span> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <span class="font-bold"> Do Not Track (DNT)</span> is a concept that has
              been promoted by US regulatory authorities, in particular the U.S. Federal
              Trade Commission (FTC), for the Internet industry to develop and implement a
              mechanism for allowing internet users to control the tracking of their
              online activities across websites.
            </li>
            <li>
              <span class="font-bold"> Personal Data </span> is any information that
              relates to an identified or identifiable individual.For the purposes of the
              CCPA, Personal Data means any information that identifies, relates to,
              describes or is capable of being associated with, or could reasonably be
              linked, directly or indirectly, with You.
            </li>
            <li>
              <span class="font-bold"> Sale,</span> for the purpose of the CCPA
              (California Consumer Privacy Act), means selling, renting, releasing,
              disclosing, disseminating, making available, transferring, or otherwise
              communicating orally, in writing, or by electronic or other means, a
              Consumer’s personal information to another business or a third party for
              monetary or other valuable consideration.
            </li>
            <li><span class="font-bold">Service </span> refers to the Application.</li>
            <li>
              <span class="font-bold">Service Provider</span> means any natural or legal
              person who processes the data on behalf of the Company. It refers to
              third-party companies or individuals employed by the Company to facilitate
              the Service, to provide the Service on behalf of the Company, to perform
              services related to the Service or to assist the Company in analyzing how
              the Service is used.
            </li>
            <li>
              <span class="font-bold"> Usage Data </span> refers to data collected
              automatically, either generated by the use of the Service or from the
              Service infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              <span class="font-bold"> You </span> means the individual accessing or using
              the Service, or the company, or other legal entity on behalf of which such
              individual is accessing or using the Service, as applicable.
            </li>
          </div>

          <div>
            <h1 class="font-bold text-4xl my-5">Collecting and Using Your Personal</h1>
            <h2 class="font-bold text-3xl my-5">Data Types of Data Collected</h2>
            <h5 class="font-semibold text-2xl my-5">Personal Data</h5>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or identify
              You. Personally identifiable information may include, but is not limited to:
            </p>
            <div class="my-4">
              <li>Email address</li>
              <li>First name</li>
              <li>Last name</li>
              <li>Phone number</li>
              <li>Address,State,Province,ZIP/Postal code,City</li>
              <li>Usage Data</li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "/src/components/Navbars/NavBar.vue";
import LoggedInNavbar from "/src/components/Navbars/LoggedInNavbar.vue";
import Cards from "/src/components/WebsiteComponents/TermsCard.vue";
import Footer from "/src/components/Footer.vue";

export default {
  components: {
    Cards,
    NavBar,
    Footer,
    LoggedInNavbar,
  },
  data() {
    return {
      isLoggedIn: false,
      terms: [
        {
          title: "",
          content:
            "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.",
        },
        {
          title: "Interpretation",
          content:
            "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        },
        { title: "", content: "" },
        { title: "", content: "" },
      ],
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

<style>
h1,
h2,
h3,
h4,
h5 {
  font-family: "Gentium Book Plus", serif;
}
li {
  margin-bottom: 10px;
}
</style>
