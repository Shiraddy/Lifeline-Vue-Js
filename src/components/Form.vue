<template>
  <KeepAlive>
    <form @submit.prevent="formSubmit" class="form-apply">
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          :class="
            (parentInfo && 'stepOne') ||
            (studentInfo && 'stepTwo') ||
            (preference && 'stepThree') ||
            (confirm && 'stepFour')
          "
        >
          Progress Bar
        </div>
      </div>

      <div class="confirm mb-5">
        <!-- CLIENT INFORMATION -->
        <fieldset
          v-if="parentInfo"
          class="form-field"
          data-section="1"
          id="parentInfo"
        >
          <div class="text-start pt-3">
            <p>Dear Parent,</p>
            <p>
              Thank you for choosing us. We have tutored hundreds of students in
              Tamale and beyond. It is your turn now. Please review
              our
              <RouterLink class="link" to="/faq"
                >Frequently Asked Questions</RouterLink
              >
              for any information.
            </p>
          </div>
          <h5 class="legend me-auto">Parent/Guardian Details</h5>

          <div class="row">
            <div class="col-lg-6">
              <label class="label" for="parent"
                >Name<span class="text-danger pt-1 mx-1"> * </span></label
              >
              <input
                class="apply-input"
                type="text"
                name="parent"
                v-model.trim="requestForm.parentName"
                @change="validation()"
                placeholder="Enter your Full Name"
              />
              <small class="text-danger d-block" v-if="error.parentName">
                This is a required field
              </small>
            </div>

            <div class="col-lg-6">
              <label class="label" for="address"
                >Address<span class="text-danger pt-1 mx-1"> * </span></label
              >
              <input
                class="apply-input"
                type="text"
                name="address"
                @change="validation()"
                v-model.trim="requestForm.address"
                placeholder="Enter address"
              />
              <small class="text-danger d-block" v-if="error.address">
                This is a required field
              </small>
            </div>
          </div>

          <div class="row my-2">
            <div class="col-lg-6">
              <label class="label" for="relationship"
                >Relationship to Student<span class="text-danger pt-1 mx-1">
                  *
                </span></label
              >
              <input
                class="apply-input"
                type="text"
                name="relationship"
                @change="validation()"
                v-model.trim="requestForm.relationship"
                placeholder="Example: Father, Mother, Uncle"
              />
              <small class="text-danger d-block" v-if="error.relationship">
                This is a required field
              </small>
            </div>

            <div class="col-lg-6">
              <label class="label" for="email">Email Address(optional)</label>
              <input
                class="apply-input"
                type="email"
                name="email"
                v-model.trim="requestForm.email"
                id="parentEmail"
                placeholder="Enter email address"
              />
              <!-- <div class="text-danger" v-if="!requestForm.parentName">
              Please Enter Your Name
            </div> -->
            </div>
          </div>

          <div class="row my-2">
            <div class="col-lg-6">
              <label class="label" for="number"
                >Contact<span class="text-danger pt-1 mx-1"> * </span></label
              >
              <input
                class="apply-input"
                type="tel"
                @change="validation()"
                name="contact"
                v-model.trim="requestForm.contact"
              />
              <small class="text-danger d-block" v-if="error.contact">
                This is a required field
              </small>
            </div>

            <div class="col-lg-6">
              <label class="label" for="number"
                >Other Contact( optional )</label
              >
              <input
                id="parentOtherNumber"
                class="apply-input"
                type="tel"
                name="altContact"
                v-model.trim="requestForm.altContact"
                inputmode="numeric"
                maxlength="10"
              />
            </div>
          </div>

          <!-- BUTTON -->
          <div class="py-3 d-flex justify-content-between">
            <small>Stage 1/3</small>
            <button class="btn btn-success" type="button" @click="stage2()">
              Next Stage
            </button>
          </div>
        </fieldset>

        <!-- STUDENT'S INFORMATION -->
        <fieldset v-if="studentInfo" class="form-field" data-section="2">
          <h4 class="legend me-auto">Learner's Details</h4>

          <div class="row my-2">
            <div class="col-lg-6">
              <label class="label" for="Student"
                >Name of Student<span class="text-danger pt-1 mx-1">
                  *
                </span></label
              >
              <input
                name="student"
                class="apply-input"
                v-model.trim="requestForm.student"
                type="text"
                @change="validation2()"
                placeholder="Enter Full Name"
              />
              <small class="text-danger d-block" v-if="error.student">
                This is a required field
              </small>
            </div>
            <div class="col-lg-6">
              <label class="label" for="sex"
                >Sex<span class="text-danger pt-1 mx-1"> * </span></label
              >
              <select
                v-model.trim="requestForm.sex"
                name="sex"
                id="studentGender"
                @change="validation2()"
                class="apply-input"
              >
                <option value="Nan" disabled>Gender</option>
                <option value="Male">MALE</option>
                <option value="Female">FEMALE</option>
              </select>
              <small class="text-danger d-block" v-if="error.sex">
                This is a required field
              </small>
            </div>
          </div>

          <div class="row my-2">
            <div class="col-lg-6 col-sm-12">
              <label class="label" for="DoB"
                >Date of Birth<span class="text-danger pt-1 mx-1">
                  *
                </span></label
              >
              <input
                name="DoB"
                v-model.trim="requestForm.DoB"
                class="apply-input"
                type="date"
              />
              <!-- <small class="text-danger" v-if="error.DoB">
                This is a required field
              </small> -->
            </div>
            <div class="col-lg-6">
              <label class="label" for="schoolName"
                >Current School Name(if in school)</label
              >
              <input
                class="apply-input"
                type="text"
                name="schoolName"
                v-model.trim="requestForm.schoolName"
                placeholder="Enter school name"
              />
            </div>
          </div>

          <div class="row my-2">
            <div class="col-lg-6 col-sm-12">
              <label class="label" for="level">Level of Student</label>
              <select class="apply-input" v-model="requestForm.level" required>
                <option value="" disabled>Select Level</option>
                <option value="preSchool">PRE-SCHOOL</option>
                <option value="primary">PRIMARY</option>
                <option value="jhs">JHS</option>
                <option value="shs">SHS</option>
                <option value="other">OTHER</option>
              </select>
            </div>

            <div class="col-lg-6 col-sm-12">
              <label class="label" for="class">Class</label>
              <select v-model="requestForm.class" class="apply-input">
                <option value="" disabled>Select Class</option>
                <option
                  v-for="option in selectedClassOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
          </div>

          <!-- <div class="row my-2">
            <div class="col-lg-6">
              <label class="label" for="emergencyContact"
                >Emergency Contact Person</label
              >
              <input
                class="apply-input"
                type="text"
                required
                name="emergencyContactName"
                v-model.trim="requestForm.emergencyContactName"
                id="emergencyContactName"
                placeholder="Enter name of person"
              />
              <div class="error-message">This is a required field</div>
            </div>

            <div class="col-lg-6 col-sm-12">
              <label class="label" for="emergencyContact"
                >Emergency Contact Person's Number</label
              >
              <input
                class="apply-input"
                type="number"
                required
                name="emergencyContactNumber"
                v-model.trim="requestForm.emergencyContactNumber"
                id="emergencyContactNumber"
                placeholder="Enter the phone number of your contact person"
              />
              <div class="error-message">This is a required field</div>
            </div>
          </div> -->

          <!-- ACADEMIC CHALLENGES -->
          <div id="option" class="confirm mt-4 mx-lg-1 mx-3">
            <!-- SUBJECT SELECT -->
            <p class="label ps-lg-3 pt-lg-2">Academic Challenge(s)</p>
            <div class="mb-lg-3 border">
              <div class="row text-start">
                <div class="col-lg-6 col-6">
                  <div class="">
                    <input
                      name="challenge"
                      class="m-2"
                      type="checkbox"
                      v-model="requestForm.challenge"
                      value="Reading"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >Reading</label
                    >
                  </div>
                  <div class="">
                    <input
                      name="challenge"
                      class="m-2"
                      type="checkbox"
                      v-model="requestForm.challenge"
                      value="Writing"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                      >Writing</label
                    >
                  </div>
                  <div class="">
                    <input
                      name="challenge"
                      class="m-2"
                      v-model="requestForm.challenge"
                      type="checkbox"
                      id="inlineCheckbox3"
                      value="Mathematics"
                    />
                    <label class="form-check-label" for="inlineCheckbox3"
                      >Mathematics</label
                    >
                  </div>
                </div>
                <div class="col-lg-6 col-6">
                  <div class="">
                    <input
                      name="challenge"
                      v-model="requestForm.challenge"
                      class="m-2"
                      type="checkbox"
                      value="Phonics"
                    />
                    <label class="" for="">Phonics</label>
                  </div>
                  <div class="">
                    <input
                      name="challenge"
                      class="m-2"
                      type="checkbox"
                      id="inlineCheckbox5"
                      value="Spelling"
                      v-model="requestForm.challenge"
                    />
                    <label class="" for="">Spelling</label>
                  </div>
                  <div class="">
                    <input
                      name="challenge"
                      class="m-2"
                      type="checkbox"
                      value="Speaking"
                      v-model="requestForm.challenge"
                    />
                    <label class="" for="">Speaking</label>
                  </div>
                </div>
              </div>

              <div class="my-4 text-start">
                <label for="" class="">Special Needs?</label>
                <textarea
                  class="apply-input"
                  name="other-challenges"
                  v-model="requestForm.otherChallenges"
                  placeholder="You can tell us more about the challenge"
                  id="otherSubjects"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- BUTTONS -->
          <div class="py-3 d-lg-flex justify-content-between">
            <small>stage 2/3</small>
            <div>
              <button
                class="btn btn-danger mx-2"
                type="button"
                @click="prev1()"
              >
                Back
              </button>

              <button class="btn btn-success" type="button" @click="stage3()">
                Next
              </button>
            </div>
          </div>
        </fieldset>

        <fieldset
          v-if="preference"
          id="Preferences"
          class="form-field"
          data-section="3"
        >
          <h4 class="legend me-auto">Tuition Preferences</h4>
          <label class="my-lg-2" for="btn-group"
            >Preferred Mode of Tuition</label
          >
          <div>
            <div
              class="btn-group"
              role="group"
              aria-label="Vertical radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="modeOfTeaching"
                id="vbtn-radio1"
                autocomplete="off"
                v-model="requestForm.modeOfTeaching"
                value="person"
                checked
              />
              <label
                id="inPersonClick"
                class="btn btn-outline-primary"
                for="vbtn-radio1"
                >In-Person</label
              >
              <input
                type="radio"
                class="btn-check"
                name="modeOfTeaching"
                id="vbtn-radio2"
                autocomplete="off"
                value="online"
                v-model="requestForm.modeOfTeaching"
                @click="online()"
              />
              <label
                id="onlineClick"
                class="btn btn-outline-primary"
                for="vbtn-radio2"
                >Online</label
              >
            </div>
          </div>
          <br />
          <div id="price-display" class="bg-success form-apply pt-1">
            <h5 class="text-white mx-2">
              <strong>TUITION FEES:</strong> GHC {{ calculatedFee }}.00
            </h5>
            <small class="text-white mx-2">
              NB: Mode of Tuition, Frequency and Duration affect pricing
            </small>
          </div>

          <!-- Sessions per week -->
          <div class="container-fluid form-check" id="weeklySession">
            <div class="row">
              <div v-show="online" class="my-lg-2 my-3">
                <label class="label" for="online"
                  >Preferred Tuition Platform(s)</label
                >
                <select
                  name=""
                  id=""
                  v-model="requestForm.onlinePlatform"
                  class="apply-input"
                >
                  <option disabled>Select Preferred Online Platform</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Telegram">
                    Telegram <i class="fa fa-telegram"></i>
                  </option>
                  <option value="WhatsApp">
                    WhatsApp <i class="fa fa-whatsapp"></i>
                  </option>
                  <option value="Google-Meet">
                    Google Meet <i class="fa fa-google"></i>
                  </option>
                </select>
              </div>

              <!-- TUITION SESSION -->
              <div class="py-3 col-lg-6">
                <label class="label" for="">Lesson Frequency</label>

                <select
                  class="apply-input"
                  v-model.number="requestForm.weeklySession"
                >
                  <option value="2">2 times per week</option>
                  <option value="3">3 times per week</option>
                  <option value="4">4 times per week</option>
                  <option value="5">5 times per week</option>
                </select>
              </div>

              <div class="py-3 col-lg-6">
                <!-- DURATION OF LESSONS -->
                <label class="label" for="">Lesson Duration</label>
                <select
                  class="apply-input"
                  name=""
                  id=""
                  v-model.number="requestForm.periodLength"
                >
                  <option value="1">1 hour</option>
                  <option value="1.5">1.5 hours</option>
                  <option value="2">2 hours</option>
                  <option value="2.5">2.5 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>
            </div>
            <div class="col-lg-12 mt-4 text-start">
              <label class="label my-3" for="online"
                >Preferred Subject(s)</label
              >

              <div class="row confirm mx-1">
                <div class="col-lg-6">
                  <h6>Core Subjects</h6>
                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="English"
                      value="English Language"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="English">English Language</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="Mathematics"
                      value="Mathematics"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="Mathematics">Mathematics</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="Science"
                      value="Science"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="Science">Science</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="Social Studies"
                      value="Social Studies"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="Social Studies">Social Studies</label>
                  </div>
                </div>
                <div class="col-lg-6 my-4 my-lg-0">
                  <h6>Elective Subjects</h6>
                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="French"
                      value="French"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="French">French</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="R.M.E"
                      value="R.M.E"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="R.M.E">R.M.E</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="Computing"
                      value="Computing"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="Computing">Computing</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      class="m-2"
                      name="Dagbani"
                      value="Dagbani"
                      v-model="requestForm.preferredSubjects"
                    />
                    <label for="Dagbani">Dagbani</label>
                  </div>
                </div>
                <small
                  class="text-danger d-block my-3"
                  v-if="error.preferredSubjects"
                >
                  This is a required field
                </small>
              </div>
              <textarea
                name="otherTuitionSubjects"
                class="apply-input mt-4 mt-lg-4"
                v-model="requestForm.otherTuitionSubjects"
                placeholder="State other subjects or special needs here.  Example: I need someone to help with Homework"
              ></textarea>
            </div>
          </div>

          <!-- 
        <div class="container-sm">
          <div class="row shadow-two py-3">
            <div class="col-lg-6">
              <label class="label" for="locationOfStudent"
                >Student's Location</label
              >
              <input
                id="studentLocation"
                required
                class="apply-input"
                type="text"
                placeholder="Enter name of student's location"
              />
              <div class="error-message">This is a required field</div>
            </div>
            <div class="col-lg-6">
              <label class="label" for="locationName"
                >Ghana Post GPS Address</label
              >
              <input
                id="studentLocationGPS"
                required
                class="apply-input"
                type="text"
                placeholder="GPS Location of student"
              />
              <div class="error-message">This is a required field</div>
            </div>
          </div>
        </div> -->
          <!-- BUTTONS -->
          <div class="py-3 d-lg-flex justify-content-between">
            <small>Stage 3/3</small>
            <div>
              <a
                class="btn btn-danger me-2"
                type="button"
                @click="backBtn()"
                href="#"
                >Back</a
              >
              <button
                class="btn btn-success"
                type="button"
                alt="Next"
                @click="next3()"
              >
                Next
              </button>
            </div>
          </div>
        </fieldset>

        <fieldset v-if="confirm" class="form-field" data-section="4">
          <div class="container-sm">
            <!-- <div class="text-start my-4">
            <p>Dear <span id="parentNameDisplay"></span>,</p>
            <p>
              We're grateful that you're considering our tuition service for
              your child. Prior to sending in your request, please ensure that
              the details are accurate.
            </p>

            <p>
              Regards, <br />
              Lifeline.
            </p>
          </div> -->

            <div class="border px-2">
              <h5 class="my-2 d-flex justify-content-center">
                Confirm Details
              </h5>
              <!-- Student Information -->
              <div class="row">
                <h6 class="label my-4">Student Information</h6>

                <div class="col-lg-6">
                  <div class="label">Name of Student</div>
                  <p class="confirm">{{ requestForm.student }}</p>
                </div>

                <div class="col-lg-6">
                  <div class="label">Age of Student</div>
                  <p class="confirm">{{ requestForm.DoB }}</p>
                </div>

                <div class="col-lg-6">
                  <div class="label">Level</div>
                  <p class="confirm">{{ requestForm.level }}</p>
                </div>

                <div class="col-lg-6">
                  <div class="label">Class of Student</div>
                  <p class="confirm">{{ requestForm.class }}</p>
                </div>

                <div class="col-lg-6">
                  <div class="label">Contact</div>
                  <p class="confirm">{{ requestForm.contact }}</p>
                </div>

                <!-- <div class="col-lg-6">
              <div class="label">Email</div>
              <p class="confirm">{{ requestForm.email }}</p>
            </div> -->

                <div class="col-lg-6">
                  <div class="label">Mode of Tuition</div>
                  <p class="confirm">{{ requestForm.modeOfTeaching }}</p>
                </div>

                <div class="col-lg-6">
                  <div class="label">Lessons Per Week</div>
                  <p class="confirm">{{ requestForm.weeklySession }} lessons</p>
                </div>

                <div class="col-lg-6">
                  <div class="label">Lesson Duration</div>
                  <p class="confirm">
                    {{ requestForm.periodLength }} hour(s) per period
                  </p>
                </div>

                <div class="col-lg-12 confirm textarea text-start">
                  <div class="label">Challenges</div>
                  <!-- <h4>{{ requestForm.challenge }}</h4> -->
                  <small
                    v-for="challenge in requestForm.challenge"
                    :key="challenge"
                    class="me-3"
                  >
                    {{ challenge }}
                  </small>
                </div>

                <div class="col-lg-12 text-start my-4 confirm textarea">
                  <div class="label pb-2">Preferred Subjects</div>
                  <!-- <p class="confirm">{{ requestForm.preferredSubjects }}</p> -->

                  <small
                    v-for="subject in requestForm.preferredSubjects"
                    :key="subject"
                    class="me-3"
                  >
                    {{ subject }}
                  </small>
                </div>

                <div class="col-lg-12 textarea confirm">
                  <label for="" class="label">Other Challenges</label>
                  <p>{{ requestForm.otherChallenges }}</p>
                </div>

                <div class="col-lg-12 mt-3 textarea confirm">
                  <h5>TUITION FEE PER MONTH</h5>
                  <h3>Ghc {{ calculatedFee }}. 00</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              class="mx-1 my-3"
              true-value="Yes"
              false-value="No"
              v-model="requestForm.agreement"
            />
            <label for="">I confirm the accuracy of this Information</label>
          </div>

          <!-- <h1>{{ requestForm.agreement }}</h1> -->

          <!-- EDIT AND SUBMIT BUTTONS -->
          <div class="py-5 py-sm-5 d-lg-flex justify-content-end" id="sendBtn">
            <button
              type="button"
              class="btn btn-danger me-3"
              @click="reviewBtn"
            >
              Review
            </button>

            <button class="btn btn-success me-lg-4" type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </div>

      <!-- TUITION PREFERENCES -->
    </form>
  </KeepAlive>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth(firebase);

export default {
  name: "Tutor Request",
  request: false,
  data() {
    return {
      // online: false,
      parentInfo: true,
      studentInfo: false,
      preference: false,
      confirm: false,
      error: {
        parentName: false,
        address: false,
        contact: false,
        relationship: false,
        contact: false,
        student: false,
        sex: false,
        DoB: false,
        preferredSubjects: false,
        agreement: false,
      },
      classOptions: {
        preSchool: ["Nursery", "Kindergarten"],
        primary: [
          "Basic One",
          "Basic Two",
          "Basic Three",
          "Basic Four",
          "Basic Five",
          "Basic Six",
        ],
        jhs: ["Basic Seven", "Basic Eight", "Basic Nine"],
        shs: ["Basic Ten", "Basic Eleven", "Basic Twelve"],
        other: ["Home School", "Preparation", "Other"],
      },

      requestForm: {
        parentName: "",
        address: "",
        relationship: "",
        email: "",
        contact: "",
        otherContact: "",
        student: "",
        sex: "",
        DoB: "",
        schoolName: "",
        level: "",
        class: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
        challenge: [],
        otherChallenges: "",
        modeOfTeaching: "person",
        onlinePlatform: "",
        weeklySession: 3,
        periodLength: 1,
        preferredSubjects: [],
        otherTuitionSubjects: "",
        charges: "",
        calculatedFee: "",
        agreement: false,
      },
    };
  },

  methods: {
    formSubmit(e) {
      console.log("Form Data", this.requestForm);
    },

    validation() {
      const form = this.requestForm;

      if (form.parentName.trim() === "") {
        this.error.parentName = true;
      } else {
        this.error.parentName = false;
      }

      if (form.address.trim() === "") {
        this.error.address = true;
      } else {
        this.error.address = false;
      }

      if (form.contact.trim() === "") {
        this.error.contact = true;
      } else {
        this.error.contact = false;
      }

      if (form.relationship.trim() === "") {
        this.error.relationship = true;
      } else {
        this.error.relationship = false;
      }

      if (form.preferredSubjects.length === 0) {
        this.error.preferredSubjects = true;
      } else {
        this.error.preferredSubjects = false;
      }
    },

    validation2() {
      let form = this.requestForm;
      if (form.sex.trim() === "") {
        this.error.sex = true;
      } else {
        this.error.sex = false;
      }

      if (form.student.trim() === "") {
        this.error.student = true;
      } else {
        this.error.student = false;
      }

      // if (form.DoB.trim() === "") {
      //   this.error.DoB = true;
      // } else {
      //   this.error.DoB = false;
      // }
    },

    prev1() {
      if (this.studentInfo) {
        // console.log("This is good")
        this.studentInfo = false;
        this.parentInfo = true;
      }
    },

    stage2() {
      if (this.parentInfo) {
        const form = this.requestForm;

        if (form.parentName.trim() === "") {
          this.error.parentName = true;
        } else {
          this.error.parentName = false;
        }

        if (form.address.trim() === "") {
          this.error.address = true;
        } else {
          this.error.address = false;
        }

        if (form.contact.trim() === "") {
          this.error.contact = true;
        } else {
          this.error.contact = false;
        }

        if (form.relationship.trim() === "") {
          this.error.relationship = true;
        } else {
          this.error.relationship = false;
        }

        if (
          !this.error.parentName &&
          !this.error.address &&
          !this.error.contact &&
          !this.error.relationship
        ) {
          this.parentInfo = false;
          this.studentInfo = true;
        }

        // if (form.sex.trim() === "") {
        //   this.error.sex = true;
        // }

        // if (form.student.trim() === "") {
        //   this.error.student = true;
        // }

        // if (form.preferredSubjects.length === 0) {
        //   this.error.preferredSubjects = true;
        // }
      }
    },

    stage3() {
      if (this.studentInfo) {
        if (this.requestForm.student.trim() === "") {
          this.error.student = true;
        } else {
          this.error.student = false;
        }

        if (this.requestForm.sex.trim() === "") {
          this.error.sex = true;
        } else {
          this.error.sex = false;
        }

        if (this.requestForm.DoB.trim() === "") {
          this.error.DoB = true;
        } else {
          this.error.DoB = false;
        }

        if (!this.error.student && !this.error.sex) {
          this.studentInfo = false;
          this.preference = true;
        }
      }
    },

    next3() {
      if (this.preference) {
        let form = this.requestForm;
        if (form.preferredSubjects.length === 0) {
          this.error.preferredSubjects = true;
        } else this.error.preferredSubjects = false;

        if (!this.preferredSubjects) {
          this.preference = false;
          this.confirm = true;
        }
      }
    },

    reviewBtn() {
      if (this.confirm) {
        this.confirm = false;
        this.preference = true;
      }
    },

    backBtn() {
      if (this.preference) {
        // this.confirm = false;
        this.preference = false;
        this.studentInfo = true;
      }
    },

    nextBtn() {
      if (this.personalInfo) {
        const form = this.requestForm;

        if (form.parentName.trim() === "") {
          this.error.parentName = true;
        }

        if (form.address.trim() === "") {
          this.error.address = true;
        }

        if (form.contact.trim() === "") {
          this.error.contact = true;
        }

        if (form.relationship.trim() === "") {
          this.error.relationship = true;
        }

        if (form.sex.trim() === "") {
          this.error.sex = true;
        }

        if (form.student.trim() === "") {
          this.error.student = true;
        }

        if (form.preferredSubjects.length === 0) {
          this.error.preferredSubjects = true;
        }
      } else {
        this.personalInfo = false;
        this.preference = true;
      }
    },

    contact() {
      if (this.error.contact === "") {
        this.error.contact = true;
      } else {
        this.error.contact = false;
      }
    },
  },

  computed: {
    calculatedFee() {
      let mode = this.requestForm.modeOfTeaching;
      let weeklySession = this.requestForm.weeklySession;
      let monthlySession = weeklySession * 4;
      let periodLength = this.requestForm.periodLength;
      let pricePerLesson;

      // Determine price per lesson based on mode and period length
      if (mode === "person") {
        if (periodLength === 3) {
          pricePerLesson = 15;
        } else if (periodLength === 2.5) {
          pricePerLesson = 16;
        } else if (periodLength === 2) {
          pricePerLesson = 18;
        } else if (periodLength === 1.5) {
          pricePerLesson = 20;
        } else {
          pricePerLesson = 25; // Default price per lesson
        }
      } else {
        pricePerLesson = 20; // Default price per lesson for other modes
      }

      // Calculate total price for all sessions in the specified period
      let totalPrice = monthlySession * periodLength * pricePerLesson;

      // Add an increment of 50 to the total price
      let increment = totalPrice + 50;

      // Return the calculated price (total price + increment)
      return increment;
    },

    selectedClassOptions() {
      return this.classOptions[this.requestForm.level] || [];
    },

    online() {
      if (this.requestForm.modeOfTeaching === "online") {
        return true;
      }
    },
  },
};
</script>

<style scoped>
.confirm {
  border: 1px black solid;
  padding: 10px;
}

.textarea {
  width: 100%;
  margin: auto 1%;
}

.label {
  text-align: start;
}

.stepOne {
  width: 20%;
  height: 10px;
  background-color: red;
}

.stepTwo {
  width: 40%;
  height: 10px;
  background-color: yellow;
}

.stepThree {
  width: 100%;
  height: 10px;
  background-color: green;
}

.stepFour {
  display: none;
}

.link {
  text-decoration: none;
  color: blue;
}

.link:hover {
  color: rgb(83, 83, 173);
}

.link:clicked {
  color: brown;
}
</style>
