<template>
  <section>
    <div class="text-white bg-danger banner">
      <NavBar></NavBar>

      <section class="container-sm">
        <div id="offer" class="row py-lg-3 form-sign-in">
          <div class="col-lg-8 text-start d-none d-lg-block"></div>
          <div class="col-lg-4 col-md-6 col-sm-12 py-4 shadow-two login">
            <div class="py-2">
              <h3>WELCOME BACK</h3>
              <p>Login With Your Credentials</p>
            </div>
            <form @submit.prevent="signInUser">
              <input
                required
                type="text"
                class="apply-input mb-4 res-shadow"
                name="email"
                @keydown="loginErrorDisplay"
                placeholder="Enter your email"
                v-model.trim="email"
              />

              <!-- <small id="email-error" class="error-message"></small> -->
              <br />

              <input
                required
                class="apply-input res-shadow"
                type="password"
                name="password"
                placeholder="Password"
                @keydown="loginErrorDisplay"
                v-model.trim="password"
              />
              <br />

              <!-- Login Error Message -->
              <p v-if="loginError" class="my-2 mx-5 mx-lg-0">
                {{ errorMessage }}
              </p>

              <!-- SWITCH TO KEEP LOGGED IN -->
              <!-- <div class="text-end">
                  <input class="" type="checkbox" role="switch" />
                  <small class="" for="flexSwitchCheckDefault"
                    >Keep Me Logged In</small
                  >
                </div> -->

              <!-- SUBMIT BUTTON -->
              <button type="submit" class="btn btn-danger apply-input mt-3">
                Sign In
                <span id="loading-spinner" v-if="wheel">
                  <div
                    class="spinner-border spinner-border-sm text-white"
                    role="status"
                  ></div>
                </span>
              </button>
              <br />

              <div class="row text-white">
                <small class="col">
                  <a class="link" href="#">Forgot Password</a>
                </small>
                <small class="col">
                  <RouterLink class="link" to="/apply">Sign-Up</RouterLink>
                </small>
              </div>
              <!-- OTHER LOG IN OPTIONS -->
              <!-- <div>
                  <div class="py-lg-2">
                    <p>
                      Or Login Using:
                      <i class="fa fa-google-plus-circle"></i>
                      <i class="fa fa-facebook-official"></i>
                      <i class="fa fa-twitter"></i>
                    </p>
                  </div>
                </div> -->
            </form>

            <!-- <button class="btn btn-danger" id="test">Test</button>
              <div id="error-message"></div> -->
          </div>
        </div>
        <!-- NAVBAR -->
        <div class="d-flex justify-content-end d-none d-lg-flex">
          <!-- <div class="me-auto">
              <a class="link" href="/">HOME </a>
              <a class="link" href="/faq"> FAQ </a>
              <a class="link" href="#"> CONTACT </a>
              <a class="link" href="#"> TERMS OF USE</a>
            </div> -->
          <p class="me-5 pe-3">Lifeline Educational Solutions Limited&copy;</p>
        </div>
      </section>
    </div>
  </section>

  <div v-if="personal"></div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const auth = getAuth(firebase);

export default {
  name: "Login",
  components: {
    NavBar,
  },
  data() {
    return {
      wheel: false,
      personal: false,
      loginError: true,
      errorMessage: "",
      email: "",
      password: "",
    };
  },

  methods: {
    signInUser() {
      this.wheel = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Sign in successful
          console.log("Login Successful");
          this.$router.push("/personal");
        })
        .catch((error) => {
          this.loginError = true;
          this.wheel = false;
          console.error("Sign-in error:", error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Invalid email";
              break;

            case "auth/user-not-found":
              this.errorMessage = "Email not registered";
              break;

            case "auth/wrong-password":
              this.errorMessage = "Wrong password";
              break;

            case "auth/network-request-failed":
              this.errorMessage = "No internet connection";
              break;

            default:
              this.errorMessage = "Incorrect Email or Password";
              break;
          }
        });
    },

    loginErrorDisplay() {
      this.loginError = false;
    },
  },
};
</script>

<style scoped></style>
