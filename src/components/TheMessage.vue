<template>
  <div class="d-flex justify-content-center my-3" id="message">
    <div class="row banner h-50 my-3 shadow-one">
      <div class="col-lg-6 d-none d-lg-block"></div>
      <div class="col-lg-6 bg-white shadow-two">
        <h4 class="my-lg-4 my-3">CONTACT US</h4>
        <form @submit.prevent="contactForm" class="">
          <div class="my-4">
            <label for="type" class="label">SELECT SUBJECT:</label>
            <select
              name="subject"
              id=""
              class="shadow-one apply-input"
              v-model="contactUs.type"
            >
              <option value="">
                SELECT TYPE<span><i class="fa fa-arrow-down"></i></span>
              </option>
              <option value="enquiry">ENQUIRY</option>
              <option value="counselling">COUNSELLING</option>
              <option value="consultancy">CONSULTANCY</option>
              <option value="other">OTHER</option>
              <option value="help">HELP</option>
            </select>
          </div>

          <div class="my-4">
            <label for="name" class="label">NAME</label>
            <input
              type="text"
              name="name"
              v-model.trim="contactUs.sender"
              required
              placeholder="Please Enter Your Full Name"
              class="shadow-one apply-input"
            />
          </div>

          <div class="my-4">
            <label for="email" class="label">EMAIL</label>
            <input
              type="email"
              name="email"
              v-model.trim="contactUs.email"
              required
              placeholder="Please Enter Your Email"
              class="shadow-one apply-input"
            />
          </div>

          <div class="my-4">
            <label for="contact" class="label">CONTACT</label>
            <input
              type="tel"
              required
              v-model.trim="contactUs.contact"
              name="contact"
              placeholder="Enter your phone number"
              class="shadow-one apply-input"
            />
          </div>

          <div class="">
            <label for="message" class="label">MESSAGE</label>
            <textarea
              class="shadow-one apply-input mb-0"
              name="message"
              v-model.trim="contactUs.message"
              required
              placeholder="Enter Message"
            ></textarea>
            <div class="d-lg-flex justify-content-between mt-0">
              <small class="">
                Message Max Word Limit: {{ contactUs.message.length }}/250
              </small>
              <small class="text-danger" v-if="messageError"
                >Check your message length.</small
              >
            </div>
            <br />
          </div>
          <!-- <input type="text" name="news" placeholder="News" /> -->

          <div class="py-3">
            <button class="btn btn-success shadow-two" type="submit">
              SEND MESSAGE
              <span id="loading-spinner" v-if="wheel">
                <div
                  class="spinner-border spinner-border-sm text-white"
                  role="status"
                ></div>
              </span>
            </button>
            <div class="alert">
              <p>{{ messageStatus }}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <div class="client-banner"></div> -->
  <div v-if="sentFollowUp" class="py-2 services">
    <p class="py-lg-3 lh-lg pb-lg-3 pb-2 alert alert-success">
      Thank You for reaching out to us. We have received your message and will
      get back to you shortly. Please do well to call .
      <a href="tel:0246011004">0246011004</a> or
      <a href="tel:0243934353">0243934353</a> if it is urgent. Thank you.
    </p>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import NavBar from "./NavBar.vue";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
  authDomain: "lifeline-edu-site.firebaseapp.com",
  projectId: "lifeline-edu-site",
  storageBucket: "gs://lifeline-edu-site.appspot.com/",
  storageBucket: "lifeline-edu-site.appspot.com",
  messagingSenderId: "1059969595497",
  appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      contactUs: {
        sender: "",
        email: "",
        contact: "",
        type: "",
        message: "".substring(0, 250),
        date: new Date(),
      },
      sentFollowUp: false,
      MessageSent: true,
      disableBtn: false,
      messageError: false,
      wheel: false,
      positive: true,
      messageStatus: null,
    };
  },

  methods: {
    async contactForm() {
      // console.log("Contact Form", this.contactUs);
      if (this.contactUs.message.length > 250) {
        this.messageError = true;
      } else {
        try {
          this.messageError = false;
          this.wheel = true;
          const message = this.contactUs;
          const MessageRef = await addDoc(collection(db, "Messages"), message);
          console.log("Document written with ID: ", MessageRef.id);
          this.sentFollowUp = true;
          this.contactUs.sender = "";
          this.contactUs.email = "";
          this.contactUs.contact = "";
          this.contactUs.type = "";
          this.contactUs.message = "";
        } catch {
          this.wheel = false;
          this.positive = false;
          console.error("Error Sending Message", error);
        }
      }
    },
  },

  inheritAttrs: false,
};
</script>

<style scoped></style>
