<template>
  <div class="bg">
    <div v-if="isLoggedIn === 'true'">
      <LoggedInNavbar />
    </div>
    <div v-else>
      <NavBar />
    </div>
    <body class="overflow-y-hidden text-black dark:bg-gray-900">
      <div class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        <div>
          <h2 class="font-bold text-black text-sm uppercase text-center my-5">FAQs</h2>

          <h2 class="font-semibold text-secondary m-5 text-center text-4xl md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p
            class="font-normal text-center dark:text-gray-300 text-sm leading-5 text-black mx-auto my-5"
          >
            Do you have questions? We are here to help.
          </p>
        </div>
        <div class="grid grid-cols-1">
          <div class="lg:w-9/12 w-full mt-12 mx-auto">
            <!-- Question 1 -->
            <hr class="w-full border-border lg:mt-10 md:mt-12 md:mb-8 my-8" />

            <div class="w-full md:px-6 text-sm">
              <div id="mainHeading" class="flex justify-between items-center w-full">
                <div class="">
                  <p
                    class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"
                  >
                    <span
                      class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                      >Q1.</span
                    >
                    How do i sign up to be a nanny?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  @click="showA1()"
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  data-menu
                >
                  <img
                    class="transform dark:hidden"
                    v-if="showQ1 == false"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    class="transform dark:hidden rotate-180"
                    v-if="showQ1 == true"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              <div id="menu" v-if="showQ1" class="mt-6 w-full">
                <p
                  class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal"
                >
                  After you download the app from play store or Apple store, create a
                  profile that highlights your talents, work experience and
                  qualifications.
                </p>
              </div>
            </div>

            <!-- Question 2 -->

            <hr class="w-full lg:mt-10 my-8 border-border" />

            <div class="w-full md:px-6">
              <div id="mainHeading" class="flex justify-between items-center w-full">
                <div class="">
                  <p
                    class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
                  >
                    <span
                      class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                      >Q2.</span
                    >
                    How do i sign up as a caregiver?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  @click="showA2()"
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  data-menu
                >
                  <img
                    class="transform dark:hidden"
                    v-if="showQ2 == false"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    class="transform dark:hidden rotate-180"
                    v-if="showQ2 == true"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              <div id="menu" v-if="showQ2" class="mt-6 w-full">
                <p
                  class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal"
                >
                  Download the app from Google Play store or Apple store, create a
                  profile. Proceed to search for a care giver in your area, interview the
                  preferred care giver of your choice, hire and pay for the service!
                </p>
              </div>
            </div>

            <!-- Question 3 -->

            <hr class="w-full lg:mt-10 my-8 border-border" />

            <div class="w-full md:px-6">
              <div id="mainHeading" class="flex justify-between items-center w-full">
                <div class="">
                  <p
                    class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
                  >
                    <span
                      class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                      >Q3.</span
                    >How do i know when a caregiver is verified
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  @click="showA3()"
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  data-menu
                >
                  <img
                    class="transform dark:hidden"
                    v-if="showQ3 == false"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    class="transform dark:hidden rotate-180"
                    v-if="showQ3 == true"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              <div id="menu" v-if="showQ3" class="mt-6 w-full">
                <p
                  class="text-base leading-6 text-left text-gray-600 dark:text-gray-300 font-normal"
                >
                  Caregivers must upload documentation attesting to their identities and
                  credentials to be verified.
                </p>
              </div>
            </div>

            <!-- Question 4 -->

            <hr class="w-full lg:mt-10 my-8 border-border" />

            <div class="w-full md:px-6">
              <div id="mainHeading" class="flex justify-between items-center w-full">
                <div class="">
                  <p
                    class="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800"
                  >
                    <span
                      class="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                      >Q4.</span
                    >How do i ensure my workplace is safe?
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  @click="showA4()"
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  data-menu
                >
                  <img
                    class="transform dark:hidden"
                    v-if="showQ4 == false"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                  <img
                    class="transform dark:hidden rotate-180"
                    v-if="showQ4 == true"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              <div id="menu" v-if="showQ4" class="mt-6 w-full">
                <p
                  class="text-base text-left leading-6 text-gray-600 dark:text-gray-300 font-normal"
                >
                  The caretaker can do a two-way background check on their possible
                  clients using the integrated API in our app to pre-evaluate the care
                  receiver.
                </p>
              </div>
            </div>

            <hr class="w-full lg:mt-10 my-8 border-border" />
          </div>
          <div
            class="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto"
          >
            <div class="grid justify-center items-center">
              <div class="md:mb-0 mb-8">
                <h2 class="font-semibold text-lg">Questions</h2>
                <p
                  class="font-normal dark:text-gray-300 text-sm leading-5 text-black mx-auto my-5"
                >
                  If you don’t find your answer, Please contact us or Leave a Message,
                  we’ll be more than happy to assist you.
                </p>
              </div>

              <div class="my-5 grid justify-center items-center">
                <div class="mb-2">
                  <TextBox
                    v-model="name"
                    type="text"
                    placeholder="Jane Doe"
                    label="Name"
                  />
                </div>
                <div class="mb-2">
                  <TextBox
                    v-model="email"
                    type="email"
                    placeholder="janedoe@gmail.com"
                    label="Email"
                  />
                </div>
                <div class="mb-2">
                  <TextBox
                    v-model="subject"
                    type="text"
                    placeholder="Enter subject here .."
                    label="Subject"
                  />
                </div>
                <div class="mb-2">
                  <TextArea
                    v-model="message"
                    type="text"
                    placeholder="Enter your message here .."
                    label="Message"
                  />
                </div>
                <div class="my-5">
                  <ActionButton @click="sendEmail" text="Send Question" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <Footer />
  </div>
</template>

<script>
import NavBar from "/src/components/Navbars/NavBar.vue";
import LoggedInNavbar from "/src/components/Navbars/LoggedInNavbar.vue";
import Footer from "/src/components/Footer.vue";
import TextBox from "/src/components/TextBox.vue";
import TextArea from "/src/components/TextArea.vue";

import ActionButton from "/src/components/ActionButton.vue";

export default {
  data() {
    return {
      showQ1: false,
      showQ2: false,
      showQ3: false,
      showQ4: false,
      showQ5: false,
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoggedIn: false,
    };
  },
  components: {
    NavBar,
    LoggedInNavbar,
    Footer,
    ActionButton,
    TextBox,
    TextArea,
  },

  mounted() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("is Logged In ", this.isLoggedIn);
  },
  updated() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  },
  methods: {
    sendEmail() {
      Email.send({
        SecureToken: "",
        To: "support@thecarefair.com",
        From: this.email,
        name: this.name,
        Subject: this.subject,
        Body: this.message,
      }).then((message) => alert(message));
    },
    showA1() {
      if (this.showQ1 == false) {
        this.showQ1 = true;
      } else {
        this.showQ1 = false;
      }
    },
    showA2() {
      if (this.showQ2 == false) {
        this.showQ2 = true;
      } else {
        this.showQ2 = false;
      }
    },
    showA3() {
      if (this.showQ3 == false) {
        this.showQ3 = true;
      } else {
        this.showQ3 = false;
      }
    },
    showA4() {
      if (this.showQ4 == false) {
        this.showQ4 = true;
      } else {
        this.showQ4 = false;
      }
    },
    showA5() {
      if (this.showQ5 == false) {
        this.showQ5 = true;
      } else {
        this.showQ5 = false;
      }
    },
  },
};
</script>

<style></style>
