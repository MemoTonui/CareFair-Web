<template>
  <div>
    <div class="flex mt-3">
      <div class="rounded-sm">
        <div class="">
          <label class="inline-block mb-2 text-gray-500">{{ label }}</label>
          <div class="flex items-center border-gray-300 justify-center w-full">
            <label
              class="flex flex-col w-full h-32 border-2 border-border border-dashed hover:bg-gray-100 hover:border-gray-300"
            >
              <div class="text-center my-10" v-if="isLoading">
                <LoaderSpinner />
              </div>
              <div v-if="imageData != null">
                <img class="preview h-32" :src="img1" />
                <br />
              </div>
              <div class="flex flex-col w-full items-center justify-center pt-7" v-else>
                <span class="material-icons">image</span>
                <div v-if="img1">
                  <p class="pt-1 text-sm text-gray-400 group-hover:text-gray-600">
                    Update photo
                  </p>
                  <p
                    class="pt-1 text-sm text-center text-gray-400 group-hover:text-gray-600"
                  >
                    Supports JPG, SVG, PNG
                  </p>
                </div>

                <div v-else>
                  <p
                    class="pt-1 text-sm font-semibold text-gray-400 group-hover:text-gray-600"
                  >
                    Drag your image here or <span class="text-primary">Browse</span>
                  </p>
                  <p
                    class="pt-1 text-sm text-gray-400 text-center group-hover:text-gray-600"
                  >
                    Supports JPG, SVG, PNG
                  </p>
                </div>
              </div>

              <input
                type="file"
                class="opacity-0 w-full"
                accept="image/*"
                ref="input1"
                @change="previewImage"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <ActionButton v-if="isLoaded" text="Upload Media File" @click.prevent="onUpload" />
      <ButtonLoading v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

import LoaderSpinner from "/src/components/loaders/LoaderSpinner.vue";
import ActionButton from "/src/components/ActionButton.vue";
import ButtonLoading from "/src/components/loaders/ButtonLoading.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
export default {
  name: "ImageUpload",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  components: { LoaderSpinner, ActionButton, ButtonLoading },

  data() {
    return {
      isLoaded: false,
      isLoading: false,
      img1: "",
      imageData: null,
    };
  },
  created() {
    this.getUserByFirebase();
    if (this.userInfo) {
      this.img1 = this.userInfo.profileImage;
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    ...mapActions(["editUserProfile", "getUserByFirebase"]),

    loaded() {
      this.isLoaded = true;
      this.isLoading = false;
    },
    loading() {
      this.isLoading = true;
      this.isLoaded = false;
    },

    click1() {
      this.$refs.input1.click();
    },
    previewImage(event) {
      this.loading();
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
      this.loaded();
    },

    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
            this.editUserProfile({
              profileImage: this.img1,
            });
          });
        }
      );
    },
  },
};
</script>

<style></style>
