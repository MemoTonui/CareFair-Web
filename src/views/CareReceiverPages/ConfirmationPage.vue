<template>
  <main>
    <div class="shadow-sm rounded-md justify center">
      <div>
        <p class="text-sm">Hire {{ firstName }} {{ lastName }} for:</p>
        <div class="border border-border p-3 rounded-sm">
          <span class="uppercase text-light my-1">{{ careType }}</span>
          <h5 class="font-semibold my-1">{{ jobTitle }}</h5>
          <div class="flex gap-3 my-1 text-xs">
            <span class="material-icons-outlined text-xs"> location_on </span>
            <p>{{ city }}, {{ country }}</p>
          </div>
          <div class="my-2">
            <p>{{ jobDescription }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="my-5">
          <h5 class="my-1 font-semibold">Summary</h5>
          <p class="my-1">Payment Summary</p>
          <div class="mt-5">
            <div class="border-b border-border flex justify-between my-2 p-2">
              <div><p>Hourly Rate</p></div>
              <div>
                <p>$ {{ rate }}</p>
              </div>
            </div>

            <div class="border-b border-border flex justify-between my-2 p-2">
              <div><p>Max Amount of Hours(Weekly)</p></div>
              <div>
                <p>{{ maxHours }} hours</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mt-10">
            <h5 class="font-semibold my-2">Contract Terms</h5>
            <p>Please preview your contract terms before sending the offer</p>
            <div class="my-3">
              <a :href="contract_url" target="_blank" class="flex gap-2">
                <span class="material-icons-outlined text-dark-pink">
                  picture_as_pdf
                </span>
                <p>Contract Terms</p>
              </a>
            </div>
          </div>
          <div>
            <check-box
              label="I agree to the Terms of Use. For details on collection and use of your information, see our Privacy Policy. "
            />
          </div>
          <div class="flex justify-between mt-5">
            <div></div>
            <div>
              <action-button text="Confirm and Send Offer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CheckBox from "../../components/CheckBox.vue";
export default {};
</script>

<style></style>

CheckBox
