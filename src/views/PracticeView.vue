<template>
  <div class="about">
    <!-- <Request></Request> -->

    <!-- <Gallery></Gallery> -->

    <h4 v-if="num === 0">The number is 0</h4>
    <h4 v-else-if="num > 5">The number is greater than 5</h4>
    <h4 v-else-if="num == 5">The number is 5</h4>
    <h4 v-else="num < 5">The number is less than 5</h4>
    <template v-if="display === true">
      <h1>{{ message }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        provident totam vero est omnis consequatur magni ipsa eligendi explicabo
        similique!
      </p>
    </template>

    <p v-show="show">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident
      quibusdam facere explicabo at officia minima sint corporis modi, ullam
      dolorum itaque quia cum suscipit consequatur accusamus, repellendus nam
      ipsum hic? Fugit voluptatibus nemo qui et rem, iure labore dolore enim ab
      facilis magnam id dolor expedita earum fuga quisquam?
    </p>

    <h2 v-for="name in names" :key="name">{{ name }}</h2>

    <!-- Object rendering -->
    <h2 v-for="name in fullName" :key="name.first">
      {{ name.first }} {{ name.last }}
    </h2>

    <!-- Array in arrays -->
    <div v-for="tutor in tutors" :key="tutor.name">
      <h2>{{ tutor.name }}</h2>
      <h4>{{ tutor.status }}</h4>
      <p v-for="student in tutor.students" :key="student">{{ student }}</p>
    </div>
  </div>

  <!-- <Form></Form> -->

  <!-- Conditional Rendering -->
  <template v-for="name in names">
    <h3 v-if="name === 'Adnan'">{{ name }}</h3>
  </template>

  <button v-on:click="toggle">Toggle Display</button>
  <button v-on:click="removeName">Remove Name</button>

  <h1>{{ num }}</h1>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <!-- <ContactUs></ContactUs> -->

  <form @submit="testForm">
    <div>
      <label for="agree">Agreement</label>
      <input
        type="checkbox"
        name="agree"
        id=""
        v-model="agree"
        true-value="Yes"
        false-value="No"
      />
    </div>

    <!-- <h1>{{ agree ? "Yes" : "No" }}</h1> -->
    <h1>{{ agree }}</h1>

    <div>
      <label for="English">English</label>
      <input type="checkbox" name="" id="" value="English" v-model="subjects" />
      <label for="mathematics">Mathematics</label>
      <input
        type="checkbox"
        name=""
        id=""
        value="Mathematics"
        v-model="subjects"
      />
      <label for="Science">Science</label>
      <input type="checkbox" name="" id="" value="Science" v-model="subjects" />
    </div>

    <h1>{{ subjects }}</h1>

    <!-- Radio Buttons/Select Dropdowns -->
    <select name="" id="" v-model="gender">
      <option type="radio" value="Boy">Boy</option>
      <option type="radio" value="Girl">Girl</option>
    </select>

    <h1>{{ gender }}</h1>

    <fieldset>
      <caption>
        Years of experience
      </caption>
      <label for="0-2">0-2</label>
      <input type="radio" value="0-2" v-model="experience" />

      <label for="3-5">3-5</label>
      <input type="radio" value="3-5" v-model="experience" />

      <label for="5+">5+</label>
      <input type="radio" value="5+" v-model="experience" />
    </fieldset>
  </form>

  <!-- <TheMessage></TheMessage> -->

  <h1>Total {{ tutorAllowance }}</h1>

  <!-- Computed Proper/Filter/V-for -->
  <template v-for="pay in highPay" :key="pay.id">
    <h2>{{ pay.tutor }} {{ pay.pay }}</h2>
  </template>

  <input type="text" v-model.lazy="tutor.title" />
  <input type="text" v-model.number.lazy="tutor.age" />

  <div>
    <Card>
      <template #title>
        <h1>Shiraz Adnan</h1>
      </template>
      <template #desc>University for Development Studies</template>
      <template #action><button>Info</button></template>
    </Card>
  </div>

  <!-- <button @click="fetchProspectsData()" class="btn btn-primary">
    Fetch Prospect List
  </button> -->

  <!-- <div>
    <h1>Prospects List</h1>
    <ul>
      <li v-for="prospect in prospects" :key="prospect.id">
        {{ prospect.name }} - {{ prospect.email }}
      </li>
    </ul>
  </div> -->

  <input type="text" v-model="word" />
  <button @click="getDefinition">Get Definition</button>

  <div>
    <h1>Definitions</h1>
    <div v-for="meaning in meanings" :key="meaning">
      <h2>Meaning</h2>
      <div v-for="definition in meaning.definitions" :key="definition.word">
        {{ [0].meanings[0].definitions[0].definition }}
      </div>
    </div>
  </div>

  <div v-for="joke in jokes" :key="joke.id">
    <p>{{ joke }}</p>
  </div>
  <!-- <button class="btn btn-danger my-5" @click="getTutors">Tutors</button> -->

  <input type="text" v-model="jokeWord" />
  <button @click="fetchJoke" class="btn btn-primary">Fetch Joke</button>
</template>

<script>
import TheMessage from "@/components/TheMessage.vue";
import ContactUs from "@/components/ContactUs.vue";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";
import Gallery from "@/components/Gallery.vue";
import Axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
  authDomain: "lifeline-edu-site.firebaseapp.com",
  projectId: "lifeline-edu-site",
  storageBucket: "lifeline-edu-site.appspot.com",
  messagingSenderId: "1059969595497",
  appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default {
  components: { TheMessage, ContactUs, Card, Form, Gallery },

  data() {
    return {
      message: "Hello About Page",
      num: 4,
      display: true,
      show: true,
      prospects: [],
      word: "",
      meanings: [],
      jokeWord: "",
      jokes: [],
      agree: "No",
      names: ["Adnan", "Ziyaad", "Saajida", "Nazifa"],
      fullName: [
        { first: "Adnan", last: "Shiraz" },
        { first: "Ziyaad", last: "Shiraz" },
      ],
      tutors: [
        { name: "Adnan", status: "active", students: ["Timtooni", "Wunnam"] },
        { name: "Kajimbi", status: "active", students: ["Renee", "Ramona"] },
      ],

      subjects: [],
      gender: "",
      experience: "",
      salary: [
        {
          id: 1,
          tutor: "Adnan",
          pay: 200,
        },

        {
          id: 2,
          tutor: "Ibrahim",
          pay: 300,
        },

        {
          id: 3,
          tutor: "Hussein",
          pay: 500,
        },
      ],
      tutor: {
        title: "",
        age: null,
      },
    };
  },

  mounted() {
    this.fetchProspects();
  },

  methods: {
    toggle() {
      return (this.show = !this.show);
    },

    removeName() {
      return this.names.pop();
    },

    increment() {
      return this.num++;
    },

    decrement() {
      return this.num--;
    },

    agreement() {
      return this.agree ? "yes" : "no";
    },

    testForm(event) {
      event.preventDefault();
    },

    fetchProspectsData() {
      console.log("Testing fetching data.....");
    },

    // async fetchProspects() {
    //   try {
    //     const response = await axios.get("/api/prospects");
    //     this.prospects = response.data;
    //   } catch (error) {
    //     console.error("Error fetching prospects:", error);
    //   }
    // },

    getDefinition() {
      Axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.word)
        .then((response) => {
          console.log("Definition", response.data);
          this.meanings = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(function () {
          console.log("Your definition has loaded");
        });
    },

    fetchJoke() {
      Axios.get("https://official-joke-api.appspot.com/jokes/random")
        .then((response) => {
          console.log("Joke", response.data);
          this.jokes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getTutors() {
      try {
        const querySnapshot = await getDocs(
          collection(db, "Request For Tutor")
        );
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    },
  },

  computed: {
    tutorAllowance() {
      return this.salary.reduce((total, curr) => (total = total + curr.pay), 0);
    },

    highPay() {
      return this.salary.filter((salary) => salary.pay > 100);
    },
  },

  watch: {
    num(digit) {
      if (digit === 10) {
        alert("The number is ten");
      }
    },

    tutor: {
      handler(value) {
        console.log("Calling Api " + value.title + " " + value.age);
      },
      deep: true,
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: block;
    align-items: center;
    padding-top: 20px;
  }
}
</style>
