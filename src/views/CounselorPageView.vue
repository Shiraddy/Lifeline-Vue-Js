<template>
  <div class="row">
    <div
      class="col-lg-2 shadow-two col-sm-12 bg-success d-none d-lg-block"
      id=""
    >
      <!-- SIDE BAR -->
      <div class="side-bar">
        <div class="d-flex justify-content-start">
          <div class="mt-lg-2">
            <div class="">
              <img
                class="profile-pic d-none d-lg-block"
                src="images/Pic.png"
                alt=""
              />

              <div class="">
                <h5 class="text-uppercase text-white mb-0 fs-6">
                  <%= fullName %>
                </h5>
                <small class="mt-0 text-white d-6 fs-beauty"
                  ><%= profile.email %></small
                >
              </div>
              <ul class="navbar-nav text-start ms-4 mt-4">
                <li class="nav-item">
                  <a class="link-user" href="#dashboard"
                    ><i class="bi-columns-gap me-2 text-white"></i>DASHBOARD</a
                  >
                </li>

                <li class="nav-item">
                  <a class="link-user" href="#resourceCentre"
                    ><i class="bi-collection me-2"></i>RESOURCES</a
                  >
                </li>

                <li class="nav-item">
                  <a class="link-user" href="#training"
                    ><i class="fa fa-laptop me-2"></i>TRAINING</a
                  >
                </li>

                <li class="nav-item">
                  <a class="link-user" href="#offers"
                    ><i class="bi-files me-2"></i>OFFERS</a
                  >
                </li>

                <li class="nav-item">
                  <a class="link-user" href="#tutorForms"
                    ><i class="bi-clipboard-data me-2"></i>SUBMIT FORMS</a
                  >
                </li>
              </ul>
            </div>
            <div class="">
              <form action="/logout" method="GET">
                <button class="btn btn-danger shadow-two my-3" type="submit">
                  <i class="bi-box-arrow-left text-white me-2"></i>Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE NAVBAR -->
    <div class="d-lg-none sticky-top">
      <nav class="navbar bg-success">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">Lifeline</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tutorNavbar"
          >
            <span class="bi-filter-square fs-2 text-white"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="tutorNavbar">
          <ul class="navbar-nav text-start ms-4 mt-4 bg-dark">
            <li class="nav-item">
              <a class="link-user" href="#dashboard"
                ><i class="bi-columns-gap me-2 text-white"></i>DASHBOARD</a
              >
            </li>

            <li class="nav-item">
              <a class="link-user" href="#resourceCentre"
                ><i class="bi-collection me-2"></i>RESOURCES</a
              >
            </li>

            <!-- <li class="nav-item">
            <a class="link-user" href="#training"
              ><i class="fa fa-laptop me-2"></i>TRAINING</a
            >
          </li> -->

            <li class="nav-item">
              <a class="link-user" href="#offers"
                ><i class="bi-files me-2"></i>OFFERS</a
              >
            </li>

            <li class="nav-item">
              <a class="link-user" href="#tutorForms"
                ><i class="bi-clipboard-data me-2"></i>SUBMIT FORMS</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- MAIN BODY AREA -->
    <div class="col-lg-10 col-sm-12 col-md-12">
      <div class="tutor-profile-banner">
        <nav class="d-none d-lg-block">
          <div class="container-fluid">
            <div class="nav">
              <a class="navbar-brand text-danger fs-3 me-auto" href="#"
                >LIFELINE</a
              >
              <div class="text-white me-4">
                <i class="fa fa-bell-o me-3"></i>
                <i class="bi-chat-square-text"></i>
              </div>
              <h6 class="text-white mt-1"><%= fullName %></h6>
              <i class="bi-sliders mx-1 text-white"></i>
            </div>
          </div>
        </nav>

        <div class="row mt-lg-5">
          <div class="col-lg-4 col-sm-12">
            <div class="tutor-profile-hero py-1 px-1">
              <h2 class="fs-3 fw-bolder mb-0">Hello <%= fullName %>,</h2>
              <p class="fs-beauty fs-5 mt-0 pb-0">It's <%= date %>.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="admin-body mt-lg-3">
        <!-- DASHBOARD -->
        <section
          class="row shadow-two rounded bg-white profile my-lg-4"
          id="dashboard"
        >
          <div class="col-lg-12 col-sm-12 py-3 row">
            <h5 class="text-start fw-bolder py-1">MY DASHBOARD</h5>

            <div class="col-lg-4 col-12">
              <div class="profit shadow-two bg-white text-primary">
                <h6>BONUS</h6>
                <h6><i class="bi-graph-up me-2"></i>Ghc 000.00</h6>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="client shadow-two bg-white text-danger">
                <h6>DEDUCTIONS</h6>
                <h6><i class="bi-graph-down me-2"></i>Ghc 000.00</h6>
              </div>
            </div>

            <div class="col-lg-4 col-12">
              <div class="revenue shadow-two bg-white text-success">
                <h6>REMUNERATION</h6>
                <h6><i class="bi-receipt-cutoff me-2"></i>Ghc 000.00</h6>
              </div>
            </div>
          </div>

          <!-- BOARD -->
          <section class="row">
            <!-- <h4 class="text-start mx-3">My Board</h4> -->
            <div class="col-lg-8">
              <!-- NOTICE BOARD -->
            </div>

            <!-- PROFILE -->
            <div class="col-lg-4">
              <div class="quote shadow-two text-start my-lg-1 my-3">
                <h4 class="fw-bolder mt-2">My Profile</h4>
                <div class="col mt-4">
                  <h6 class="fs-beauty text-muted text-uppercase">
                    <i class="fa fa-user me-2"></i><%= fullName %>
                  </h6>
                </div>

                <div class="col">
                  <h6 class="fs-beauty text-muted text-uppercase">
                    <i class="fa fa-play me-2"></i>Category: <%=
                    profile.category %>
                  </h6>
                </div>

                <div class="col">
                  <h6 class="fs-beauty text-muted text-uppercase">
                    <i class="fa fa-codepen me-2"></i> Status: <%=
                    profile.status %>
                  </h6>
                </div>
              </div>
            </div>
          </section>

          <!-- RESOURCE CENTRE -->
          <section id="resourceCentre" class="col-lg-12 mt-5 mt-lg-2">
            <!-- <h4>Resource Centre</h4> -->
            <div class="section shadow-two">
              <!-- LIFELINE -->
              <a class="navbar-brand" href="#">Resource Centre</a>

              <div class="row">
                <!-- <div class="col-lg-12 row my-5">
              <div class="col">
                <div class="res hover" id="lBtn">
                  <img class="image-link" src="/images/logo.png" alt="" />
                  <div class="card-title">LIFELINE RESOURCE</div>
                </div>
              </div>

              <div class="col">
                <div class="res hover" id="gBtn">
                  <img class="image-link" src="/images/ges.png" alt="" />
                  <div class="card-title">G.E.S RESOURCE</div>
                </div>
              </div>
              <div class="col">
                <div class="res hover" id="tBtn">
                  <img class="image-link" src="/images/res.png" alt="" />
                  <div class="card-title">TUTOR RESOURCE</div>
                </div>
              </div>

            </div> -->

                <!-- <div class="col"><i class="fa-regular fa-file-pdf"></i></div>
            <div class="col"><i class="fa-regular fa-file-pdf"></i></div>
            <div class="col"><i class="fa-solid fa-file-pdf"></i></div> -->
                <div class="col-12">
                  <div class="lifeline text-start" id="lesResource">
                    <div class="row my-3 py-2">
                      <div class="col-lg-6">
                        <h5>Lifeline Tutor Repository</h5>
                        <!-- <small>Download Lifeline's Resources</small> -->
                      </div>
                      <div class="col-lg-6 col-sm-12">
                        <form class="d-flex" role="search">
                          <input
                            class="form-control me-2 shadow-one"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            id="lesResSearch"
                          />
                        </form>
                      </div>
                      <div class="col-lg-12 col-sm-12 my-2">
                        <button type="button" class="btn btn-outline-primary">
                          Lifeline Repository
                        </button>
                        <button type="button" class="btn btn-outline-secondary">
                          Reading Clinic
                        </button>
                        <button type="button" class="btn btn-outline-success">
                          G.E.S Repository
                        </button>
                      </div>
                    </div>

                    <table
                      class="table table-sm table-bordered border-primary table-hover resource"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Download</th>
                        </tr>
                      </thead>

                      <tbody class="table-group-divider" id="lesResCentre">
                        <tr>
                          <td>1</td>
                          <td>Log Sheet</td>
                          <td>This is used to record tutor attendance.</td>
                          <td>
                            <a
                              class="btn btn-danger"
                              href="https://firebasestorage.googleapis.com/v0/b/lifeline-edu-site.appspot.com/o/Tutor%20Resources%2FLog%20sheet.pdf?alt=media&token=a1a2927c-c086-4f20-8930-808a782794bb"
                              id="download"
                              ><i class="fa fa-download"></i
                            ></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Code of Conduct</td>
                          <td>This documents spells out our rules.</td>
                          <td>
                            <a
                              class="btn btn-danger"
                              href="https://firebasestorage.googleapis.com/v0/b/lifeline-edu-site.appspot.com/o/Tutor%20Resources%2FLifeline's%20Tutor%20Code%20of%20Conduct.pdf?alt=media&token=17cbb614-401f-495f-9311-8b4aa8076a6e"
                              id="download"
                              ><i class="fa fa-download"></i
                            ></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Tutor's Handbook</td>
                          <td>
                            This document will help you become a better tutor.
                          </td>
                          <td>
                            <a class="btn btn-danger" href="#" id="download"
                              ><i class="fa fa-download"></i
                            ></a>
                          </td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td>Phonics</td>
                          <td>
                            Learn the sounds of letters, blending and more.
                          </td>
                          <td>
                            <a
                              class="btn btn-danger"
                              href="https://www.readingbear.org/"
                              target="framename"
                              ><i class="fa fa-download"></i
                            ></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- READING CLINIC -->
                  <section class="shadow-two my-lg-4 my-3">
                    <h5 class="text-start pt-4">Reading Clinic</h5>
                    <iframe
                      src="https://www.uniteforliteracy.com/"
                      class="shadow-two resource-frame"
                      frameborder="0"
                    ></iframe>
                  </section>

                  <!-- GES DATA TABLE -->
                  <template>
                    <div class="text-start mt-5">
                      <div class="row my-3">
                        <div class="col-lg-6">
                          <h5>Standards Based Curriculum</h5>
                        </div>
                        <div class="col-lg-6">
                          <form class="d-flex" role="search">
                            <input
                              class="form-control me-2 shadow-one"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                              id="gesResSearch"
                            />
                          </form>
                        </div>
                      </div>

                      <!-- <p>Ghana Education Service (GES) Standards Based Curriculum.</p> -->
                      <table
                        class="table table-sm table-bordered border-primary table-hover resource"
                      >
                        <thead class="">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">CLASS</th>
                            <th scope="col">SUBJECT</th>
                            <th scope="col">DOWNLOAD</th>
                          </tr>
                        </thead>
                        <tbody class="table-group-divider" id="gesResCentre">
                          <tr>
                            <td>1</td>
                            <td>BASIC ONE</td>
                            <td>ENGLISH LANGUAGE</td>
                            <td>
                              <a class="btn btn-danger" href="#" id="download"
                                ><i class="fa fa-download"></i
                              ></a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>BASIC ONE</td>
                            <td>MATHEMATICS</td>
                            <td>
                              <a class="btn btn-danger" href="#" id="download"
                                ><i class="fa fa-download"></i
                              ></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>BASIC ONE</td>
                            <td>SCIENCE</td>
                            <td>
                              <a class="btn btn-danger" href="#" id="download"
                                ><i class="fa fa-download"></i
                              ></a>
                            </td>
                          </tr>

                          <tr>
                            <td>4</td>
                            <td>BASIC TWO</td>
                            <td>ENGLISH LANGUAGE</td>
                            <td>
                              <button class="btn btn-danger">
                                <i class="fa fa-download"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>BASIC TWO</td>
                            <td>MATHEMATICS</td>
                            <td>
                              <button class="btn btn-danger">
                                <i class="fa fa-download"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>BASIC TWO</td>
                            <td>SCIENCE</td>
                            <td>
                              <button class="btn btn-danger">
                                <i class="fa fa-download"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </template>

                  <!-- <div class="reading text-start px-5 mt-5">
                <h5>Reading Centre</h5>
                <p>Reading resource to help you teach reading effectively.</p>
                <table
                  id="rResCentre"
                  class="table table-sm table-bordered border-primary table-hover resource"
                >
                  <thead class="">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Material</th>
                      <th scope="col">Description</th>
                      <th scope="col">Download</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    <tr>
                      <td>1</td>
                      <td>Teaching Guide</td>
                      <td>Teaching students using varied approaches.</td>
                      <td>
                        <a class="btn btn-danger" href="#" id="download"
                          ><i class="fa-solid fa-download"></i
                        ></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
                </div>
              </div>
            </div>
          </section>

          <!-- CONTRACTS -->

          <!-- FORMS -->
          <section id="tutorForms" class="col-lg-12 shadow-two my-3">
            <!-- SWITCH BTN -->
            <div class="btn-group my-4" role="group">
              <button
                type="button"
                class="btn btn-outline-primary"
                id="logsheetBtn"
              >
                LOG SHEET
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                id="progressBtn"
              >
                PROGRESS REPORT
              </button>
              <!-- <button type="button" class="btn btn-outline-primary" id="assessmentBtn" >ASSESSMENT REPORT</button> -->
            </div>

            <!-- PROGRESS REPORT -->
            <div id="progress" class="px-5">
              <div class="row shadow-two">
                <div class="col-lg-6 d-none d-lg-block"></div>
                <div class="col-lg-6 shadow-two bg-white">
                  <h4 class="my-lg-4 my-2">PROGRESS REPORT</h4>
                  <div class="my-lg-3">
                    <!-- <label for="">CONTRACT TYPE:</label> <br /> -->
                    <select name="type" id="" class="profile-input">
                      <option value="">CONTRACT TYPE</option>
                      <option value="DUO">DUO</option>
                      <option value="TRI">TRI</option>
                      <option value="QUAD">QUAD</option>
                      <option value="PENT">PENT</option>
                    </select>
                  </div>

                  <div class="">
                    <!-- <label class="" for="">Mode of Tuition:</label> <br /> -->
                    <select name="mode" id="" class="profile-input">
                      <option value="">MODE OF TUITION</option>
                      <option value="online">Online</option>
                      <option value="in-person">In-Person</option>
                    </select>
                  </div>

                  <div class="my-3">
                    <!-- <label for="">Level:</label> <br /> -->
                    <select name="level" id="" class="profile-input">
                      <option value="">LEVEL OF STUDENT</option>
                      <option value="KG">KINDERGARTEN</option>
                      <option value="PRIMARY">PRIMARY</option>
                      <option value="JHS">JHS</option>
                      <option value="SHS">SHS</option>
                    </select>
                  </div>

                  <div class="div">
                    <!-- <label for="">Class:</label> <br /> -->
                    <input
                      class="profile-input"
                      type="tel"
                      name="class"
                      placeholder="CLASS"
                    />
                  </div>

                  <div class="my-3">
                    <!-- <label for="">Subjects:</label> <br /> -->
                    <textarea
                      name="subjects"
                      id=""
                      class="profile-input-textarea"
                      placeholder="TUITION SUBJECT(S)"
                    ></textarea>
                  </div>

                  <div class="div">
                    <!-- <label for="">Lesson Duration</label> <br /> -->
                    <select name="duration" id="" class="profile-input">
                      <option value="">LESSON DURATION</option>
                      <option value="1 hour">1 hour</option>
                      <option value="1.5 hours">1.5 hrs</option>
                      <option value="2 hours">2 hrs</option>
                      <option value="2.5 hours">2.5 hrs</option>
                      <option value="3 hours">3 hrs</option>
                    </select>
                  </div>

                  <div class="my-3">
                    <!-- <label for="">Location:</label> <br /> -->
                    <input
                      class="profile-input"
                      type="text"
                      name="location"
                      placeholder="LOCATION"
                    />
                  </div>

                  <button
                    class="btn btn-success my-lg-4 my-3 shadow-two"
                    type="submit"
                    name="postContract"
                  >
                    UPLOAD REPORT
                  </button>
                </div>
              </div>
            </div>

            <!-- LOG SHEET -->
            <div id="logsheet" class="px-5 py-3">
              <div class="row shadow-two">
                <div class="col-lg-6 d-none d-lg-block"></div>
                <div class="col-lg-6 shadow-two bg-white py-3">
                  <h4 class="my-lg-3">LOG SHEET</h4>
                  <form action="" method="post">
                    <div class="div">
                      <label class="label" for="">Tutor ID:</label>
                      <input
                        class="apply-input"
                        type="text"
                        name="tutorId"
                        disabled
                      />
                    </div>

                    <div class="div">
                      <label class="label" for="">Contact:</label>
                      <input
                        class="apply-input"
                        type="tel"
                        name="contact"
                        disabled
                      />
                    </div>

                    <div class="div">
                      <label class="label" for="">Log Sheet For (Month):</label>
                      <input class="apply-input" type="month" name="date" />
                    </div>

                    <div class="div">
                      <label class="label" for="">Contract Id:</label>
                      <input
                        class="apply-input"
                        type="text"
                        name="contractId"
                      />
                    </div>

                    <div class="div">
                      <label class="label" for="">Upload Log Sheet</label>
                      <input class="apply-input" type="file" name="logSheet" />
                    </div>

                    <button class="btn btn-success my-lg-4" type="submit">
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <!-- TRAINING -->
          <section class="d-none d-lg-block px-5 py-3 shadow-two" id="training">
            <div class="px-5 py-5">
              <a class="navbar-brand" href="#">Training</a>

              <div class="">
                <iframe
                  src="https://docs.google.com/presentation/d/e/2PACX-1vS6LQfaUqPWGECS-5B8CotEciAAFI3PuLIacC9AXLYehYpd0cHSuTuoyZxxX6bZ41Hot8qi0UjHiJYK/embed?start=false&loop=false&delayms=3000"
                  frameborder="0"
                  width="920"
                  height="569"
                  allowfullscreen="true"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                ></iframe>
              </div>
            </div>
          </section>

          <!-- MESSAGE -->
          <section class="px-5 py-3 shadow-two my-4">
            <%- include('partials/message') %>
          </section>
        </section>

        <%- include('partials/dictionary') %>
      </div>
    </div>
  </div>

  <nav class="d-none sticky-bottom bg-success">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <ul class="nav justify-content-between">
            <li class="nav-item">
              <a class="nav-link" href="#dashboard">
                <i class="bi-columns-gap"></i
                ><span class="d-block">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#offers">
                <i class="bi-journal-richtext"></i
                ><span class="d-block">Offers</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resourceCentre">
                <i class="bi-command"></i><span class="d-block">Resources</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tutorForms">
                <i class="bi-filter-square"></i
                ><span class="d-block">Forms</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Counsellor Page",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
