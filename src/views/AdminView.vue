<template>
  <!-- BODY -->
  <div class="container-fluid">
    <div class="row">
      <!-- SIDE BAR -->
      <div class="col-lg-2 col-md-3 col-sm-12">
        <nav id="nav" class="admin-side shadow-two">
          <button
            class="navbar-toggler d-lg-none d-flex justify-content-end my-2 ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
          >
            <span
              class="navbar-toggler-icon navbar-dark bg-tertiary d-flex"
            ></span>
          </button>
          <div
            class="offcanvas-lg offcanvas-start"
            tabindex="-1"
            id="offcanvasResponsive"
            aria-labelledby="offcanvasResponsiveLabel"
          >
            <div class="offcanvas-header">
              <a class="navbar-brand d-lg-none" href="#">LIFELINE</a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsive"
              ></button>
            </div>
            <div class="mt-lg-2">
              <!-- <a class="navbar-brand" href="#">LIFELINE</a> -->
              <img class="admin-pic" src="/images/Pic.png" alt="" />
              <ul class="nav navbar-nav admin-ul">
                <a class="admin-list" href="#adminDash"
                  ><i class="bi-columns-gap me-2 text-white"></i> DASHBOARD
                </a>

                <a
                  @click="parentTableView"
                  class="admin-list"
                  href="#adminClient"
                  ><i class="bi-people-fill me-2"></i> PARENTS
                </a>

                <a @click="tutorTableView" class="admin-list" href="#adminTutor"
                  ><i class="bi-person-square me-2"></i> TUTORS
                </a>

                <a
                  class="admin-list"
                  href="#adminClient"
                  @click="uploadsSectionBtn"
                  ><i class="bi-chat-right-text me-2"></i>UPLOADS
                </a>

                <a href="#adminClient" class="admin-list"
                  ><i class="bi-clipboard-data me-2 text-white"></i>
                  FINANCE
                  <span class="admin-icon"></span
                ></a>
              </ul>

              <button @click="signOut" class="btn btn-danger">LOG OUT</button>
            </div>
          </div>
        </nav>
      </div>

      <!-- MAIN AREA -->
      <div class="col-lg-10">
        <nav class="navbar navbar-expand-lg d-none d-lg-block shadow-one">
          <div class="">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand me-auto mb-2 mb-lg-0 text-danger" href="#"
                >LIFELINE</a
              >

              <div class="me-2">
                <a class="link">
                  <i class="bi-chat-left-text"></i>
                </a>
                <a class="link">
                  <i class="bi-bell"></i>
                </a>
                <small class="">
                  {{ date() }}
                  <i class="fa-solid fa-calendar-check ps-1"></i>
                </small>
              </div>

              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 shadow-two"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-danger" type="submit">
                  <i class="bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>

        <section id="adminDash" class="admin-body mb-5">
          <section v-if="dashboard">
            <!-- STATISTICS -->
            <div class="row my-lg-4 my-5 pt-3">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="revenue shadow-two bg-white hover">
                  <h4>Applicants</h4>
                  <h5>{{ applicantsList().length }}</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="tutor shadow-two bg-white hover">
                  <h4>Tutors</h4>
                  <h5>{{ tutorsList().length }}</h5>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="client shadow-two bg-white hover">
                  <h4>Contracts</h4>
                  <h5>{{ clientsList().length }}</h5>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="profit shadow-two bg-white hover">
                  <h4>Prospects</h4>
                  <h5>{{ prospectsList().length }}</h5>
                </div>
              </div>
            </div>
            <div class="my-5">
              <div class="row">
                <div class="col-lg-8">
                  <div class="message shadow-two">
                    <h4 class="pt-3">Messages</h4>
                    <div class="head d-flex justify-content-between mx-5">
                      <h4>Subject: {{ currentMessage().data.subject }}</h4>
                      <h5>Date: {{ currentMessage().data.date }}</h5>
                      <!-- <small>{{ currentMessage().length() }}</small> -->

                      <a @click="deleteMessage" class="delete">
                        <i class="bi-trash2"></i>
                      </a>
                    </div>

                    <p class="px-5 text-start">
                      {{ currentMessage().data.message.substring(0, 200) }}
                    </p>

                    <div class="d-flex justify-content-between mx-5">
                      <small>{{ currentMessage().data.name }}</small>
                      <small
                        >Contact: {{ currentMessage().data.contact }}</small
                      >
                      <small>Total Messages: {{ messages.length }}</small>
                    </div>

                    <div class="py-2">
                      <button
                        @click="prevMessage"
                        class="btn btn-outline-success me-3"
                      >
                        <i class="fa fa-arrow-circle-o-left"></i>
                      </button>
                      <button
                        @click="nextMessage"
                        class="btn btn-outline-success"
                      >
                        <i class="fa fa-arrow-circle-o-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="todoApp shadow-one bg-white">
                    <h4>To Do List</h4>
                    <div
                      v-for="(todo, index) in todoList"
                      class="text-start mx-3"
                      :key="index"
                    >
                      <input type="checkbox" v-model="todo.done" />
                      <label
                        class="text-start ms-2"
                        :class="todo.done ? 'red' : 'green'"
                      >
                        {{ todo.text }}
                      </label>
                    </div>
                    <div class="mx-3 my-3 text-center">
                      <input
                        type="text"
                        v-model="todoItem"
                        @keyup.enter="addTodo"
                        class="todoinput"
                      />
                      <button class="btn btn-danger me-1" @click="addTodo">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- PARENT PANEL -->
          <section
            id="adminClient"
            class="shadow-two py-2 px-lg-3"
            v-if="parentTable"
          >
            <div class="row">
              <!-- Buttons -->
              <div class="col-lg-9 me-auto">
                <div class="btn-toolbar my-3" role="toolbar">
                  <div class="me-2" role="group">
                    <ul class="nav nav-tabs bg-success">
                      <a class="navbar-brand me-4 fs-4"> Parents</a>
                      <li class="nav-item">
                        <button class="nav-link" @click="clientsTabBtn">
                          <span class="badge text-bg-danger me-2">{{
                            clientsList().length
                          }}</span
                          >Clients
                        </button>
                      </li>
                      <li class="nav-item">
                        <button class="nav-link" @click="prospectsTabBtn">
                          <span class="badge text-bg-danger me-2">{{
                            prospectsList().length
                          }}</span
                          >Prospects
                        </button>
                      </li>
                      <li class="nav-item">
                        <button
                          class="nav-link"
                          data-bs-toggle="modal"
                          data-bs-target="#regClient"
                        >
                          <i class="fa fa-user-plus"></i> Add client
                        </button>
                      </li>
                      <li class="nav-item">
                        <button class="nav-link" href="#">
                          <i class="bi-arrow-repeat"></i> Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-3">
                <form class="form-control-sm" role="search">
                  <input
                    class="shadow-one form-control mt-lg-2 mt-3"
                    type="search"
                    v-model="parentSearch"
                    placeholder="Search"
                    @keydown="findParent"
                  />
                </form>
              </div>
            </div>

            <!-- CLIENT REGISTRATION MODAL -->
            <div
              class="modal fade"
              id="regClient"
              tabindex="-1"
              aria-labelledby="regClient"
              aria-hidden="true"
            >
              <div
                class="modal-content modal-dialog modal-dialog-centered modal-dialog-scrollable"
              >
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    CLIENT REGISTRATION
                  </h1>
                </div>

                <div class="modal-body">
                  <!-- Include Modal here -->
                  <Form></Form>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-danger px-2"
                    data-bs-dismiss="modal"
                  >
                    Close <i class="fa-regular fa-circle-xmark"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- CLIENT AND PROSPECTS DATA TABLE -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover h-100">
                <!-- <h4>Tutors</h4> -->
                <thead class="fw-bolder shadow-one fixed">
                  <tr>
                    <th>S/NO</th>
                    <th>Client</th>
                    <th>Contact</th>
                    <th>Ward</th>
                    <th>Relation</th>
                    <th>Sessions</th>
                    <th class="d-none">Client Id</th>
                    <th>Fees</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody
                  v-if="clientsTab"
                  class="shadow-one"
                  v-for="(parent, index) in clientsList()"
                  :key="parent.data.student"
                >
                  <tr data-application-id="<%= client.id %>">
                    <td>{{ index + 1 }}</td>
                    <td class="text-start">
                      <small> {{ parent.data.parent }}</small>
                    </td>
                    <td>
                      <a href="tel:{{ parent.data.contact }}"
                        ><small>{{ parent.data.contact }}</small>
                      </a>
                    </td>

                    <td class="text-start">
                      <a
                        href="#"
                        class="student-link"
                        data-clientId="<%= client.id %>"
                      >
                        <small>{{ parent.data.student }}</small>
                      </a>
                    </td>

                    <td>
                      <small>{{ parent.data.relationship }}</small>
                    </td>
                    <td>{{ parent.data.weeklySession }}</td>
                    <td class="d-none"><%= client.id %></td>
                    <td class="text-white">
                      <small class="bg-danger px-2 py-1">
                        Ghc
                        {{ parent.data.fees }}.00
                      </small>
                    </td>

                    <!-- ACTION BUTTONS -->
                    <td>{{ parent.data.periodLength }}</td>
                    <td>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#contractInfo"
                        @click="detailedInfo(parent)"
                        ><i class="bi-three-dots-vertical"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>

                <tbody
                  v-if="prospectsTab"
                  class="shadow-one text-start"
                  v-for="(prospect, index) in prospectsList()"
                  :key="prospect.data.student"
                >
                  <tr data-application-id="<%= prospect.id %>">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <small>{{ prospect.data.parent }}</small>
                    </td>
                    <td>
                      <a href="tel:{{prospect.data.contact}}">
                        <small> {{ prospect.data.contact }}</small>
                      </a>
                    </td>

                    <td>
                      <a
                        href="#"
                        class="student-link"
                        data-prospectId="<%= prospect.id %>"
                      >
                        <small>{{ prospect.data.student }}</small>
                      </a>
                    </td>

                    <td>
                      <small>{{ prospect.data.relationship }}</small>
                    </td>
                    <td>{{ prospect.data.weeklySession }}</td>
                    <td class="d-none"><%= prospect.id %></td>
                    <td class="text-white">
                      <small class="bg-success">
                        {{ prospect.data.fees }}
                      </small>
                    </td>

                    <!-- ACTION BUTTONS -->
                    <td>{{ prospect.data.periodLength }}</td>
                    <td>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#contractInfo"
                        @click="detailedInfo(prospect)"
                        ><i class="bi-three-dots-vertical"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Parent Update Modal -->
              <div
                class="modal fade"
                id="contractInfo"
                tabindex="-1"
                aria-labelledby="contractInfo"
                aria-hidden="true"
              >
                <div
                  class="modal-content modal-dialog modal-dialog-centered modal-dialog-scrollable"
                >
                  <!-- Modal Body (updated) -->
                  <div class="modal-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          PARENT
                        </h1>
                      </div>
                      <ul class="nav nav-tabs bg-success">
                        <li class="nav-item">
                          <a class="nav-link" @click="parentDetailTabBtn"
                            >Details</a
                          >
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" @click="parentUpdateTabBtn"
                            >Update</a
                          >
                        </li>
                      </ul>
                    </div>

                    <!-- Details -->
                    <div v-if="parentDetailTab">
                      <div class="row text-start">
                        <div class="bg-primary my-2">Personal Information</div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Parent:</strong>
                            {{
                              selectedParent ? selectedParent.data.parent : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Contact:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.altContact
                                : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Student:</strong>
                            {{
                              selectedParent ? selectedParent.data.student : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>DoB:</strong>
                            {{ selectedParent ? selectedParent.data.DoB : "" }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Sex:</strong>
                            {{ selectedParent ? selectedParent.data.sex : "" }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Started:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.starting_date
                                : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Status:</strong>
                            {{
                              selectedParent ? selectedParent.data.status : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Address: </strong>
                            {{
                              selectedParent ? selectedParent.data.address : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Level:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.schoolName
                                : ""
                            }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Level:</strong>
                            {{
                              selectedParent ? selectedParent.data.level : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Class:</strong>
                            {{
                              selectedParent ? selectedParent.data.class : ""
                            }}
                          </p>
                        </div>

                        <div class="bg-primary my-2">Tutorial Preferences</div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Fees:</strong>
                            {{ selectedParent ? selectedParent.data.fees : "" }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Mode:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.modeOfTeaching
                                : ""
                            }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>weekly Session:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.weeklySession
                                : ""
                            }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Category:</strong>
                            {{
                              selectedParent ? selectedParent.data.category : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Challenges:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.challenge
                                : ""
                            }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Tuition Subjects:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.preferredSubjects
                                : ""
                            }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Tutor:</strong>
                            {{
                              selectedParent ? selectedParent.data.tutor : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Contact:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.tutor_contact
                                : ""
                            }}
                          </p>
                        </div>

                        <div class="col-lg-6">
                          <p>
                            <strong>Remuneration:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.remuneration
                                : ""
                            }}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="container-fluid" v-if="parentUpdateTab">
                      <form>
                        <div class="row text-start">
                          <div class="col-lg-6">
                            <label for="status">Status</label>
                            <select class="apply-input">
                              <option value="active">Active</option>
                              <option value="suspended">Suspended</option>
                              <option value="completed">Completed</option>
                              <option value="terminated">Terminated</option>
                            </select>
                          </div>

                          <div class="col-lg-6">
                            <label for="sessions">Sessions</label>
                            <input class="apply-input" type="text" />
                          </div>

                          <div class="col-lg-6">
                            <label for="Fees">Fees</label>
                            <input class="apply-input" type="text" />
                          </div>

                          <div class="col-lg-6">
                            <label for="Remuneration">Remuneration</label>
                            <input class="apply-input" type="text" />
                          </div>

                          <div class="col-lg-6">
                            <label for="Tutor">Tutor</label>
                            <input class="apply-input" type="text" />
                          </div>

                          <div class="col-lg-6">
                            <label for="Contact">Contact</label>
                            <input class="apply-input" type="number" />
                          </div>

                          <div class="col-lg-6">
                            <label for="levels">Levels</label>
                            <input class="apply-input" type="text" />
                          </div>

                          <div class="col-lg-6">
                            <label for="date">Date</label>
                            <input class="apply-input" type="date" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-outline-danger px-2"
                      data-bs-dismiss="modal"
                    >
                      Close <i class="fa-regular fa-circle-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Toast to show update -->
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
              <div
                id="toastContainer"
                class="toast hide"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="toast-header">
                  <strong class="me-auto">Update Status</strong>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="toast-body" id="toastMessage"></div>
              </div>
            </div>
          </section>

          <section v-if="financeTable">
            <!-- FINANCE TABLE -->
            <div class="table-responsive my-5">
              <div>
                <a class="navbar-brand me-4 fs-4" href="#">Pay Sheet</a>
              </div>

              <div class="d-flex justify-content-between">
                <div>
                  <button class="btn btn-primary me-2">Parent</button>
                  <button class="btn btn-primary">Tutor</button>
                </div>
              </div>

              <div class="row my-lg-4 my-5 pt-3">
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="revenue shadow-two bg-white hover">
                    <h4>Tutor Pay</h4>
                    <h5>{{ applicantsList().length }}</h5>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="tutor shadow-two bg-white hover">
                    <h4>Revenue</h4>
                    <h5>{{ lifelineRevenue }}</h5>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="client shadow-two bg-white hover">
                    <h4>Deductions</h4>
                    <h5>{{ clientsList().length }}</h5>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="profit shadow-two bg-white hover">
                    <h4>Considerations</h4>
                    <h5>{{ prospectsList().length }}</h5>
                  </div>
                </div>
              </div>

              <form>
                <label for="">Month:</label> <input type="month" />

                <label for="filter">Sort by:</label>
                <select name="" id="">
                  <option value="paid">Paid</option>
                  <option value="paid">Owing</option>
                </select>
              </form>

              <table class="table table-bordered table-hover">
                <!-- <h4>Tutors</h4> -->
                <thead class="fw-bolder">
                  <tr>
                    <th><small>S/NO</small></th>
                    <th>Client</th>
                    <th>Ward</th>
                    <th>Fee</th>
                    <th>Discount</th>
                    <th>Penalty</th>
                    <th>Payable</th>
                    <th>Month</th>
                    <th>Tutor</th>
                    <th>Status</th>
                    <th>Contact</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody
                  id="clientsData"
                  class="shadow-one text-start"
                  v-for="(client, index) in clientsList()"
                >
                  <tr data-application-id="<%= client.id %>">
                    <td>
                      <small>{{ index + 1 }}</small>
                    </td>
                    <td>
                      <small>{{ client.data.parent }}</small>
                    </td>

                    <td class="text-start">
                      <a
                        href="#"
                        class="student-link"
                        data-clientId="<%= client.id %>"
                        ><small>{{ client.data.student }}</small></a
                      >
                    </td>

                    <td class="text-white">
                      <small class="py-1 px-2">
                        Ghc {{ client.data.fees }}
                      </small>
                    </td>

                    <td>
                      <a href="tel:<%= client.data.contact %>"
                        ><small>{{ client.data.contact }}</small>
                      </a>
                    </td>

                    <td>
                      <small></small>
                    </td>
                    <td>
                      <small> </small>
                    </td>
                    <td>
                      <small></small>
                    </td>
                    <td>
                      <small>{{ client.data.remuneration }}</small>
                    </td>

                    <td>
                      <small>{{}}</small>
                    </td>

                    <td>{{ client.data.contact }}</td>

                    <td>
                      <a @click="updatePayment(client)"
                        ><i class="bi-three-dots-vertical"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- TUTORS PANEL -->
          <section v-if="tutorTable" class="my-3 py-2 px-lg-3 shadow-two">
            <!-- NavBar -->
            <nav class="container-fluid">
              <div class="row my-3">
                <div class="col-lg-9">
                  <ul class="nav nav-tabs bg-success">
                    <a class="navbar-brand fs-4 me-4"> Tutors</a>
                    <li class="nav-item">
                      <button class="nav-link" @click="tutorTableBtn">
                        <span
                          class="badge bg-danger me-2 shadow-two rounded-pill"
                          >{{ tutorsList().length }}</span
                        >Tutors
                      </button>
                    </li>
                    <li class="nav-item">
                      <button class="nav-link" @click="applicantTableBtn">
                        <span
                          class="badge bg-danger me-2 shadow-two rounded-pill"
                          >{{ applicantsList().length }}</span
                        >Applicants
                      </button>
                    </li>
                    <li class="nav-item">
                      <button class="nav-link" @click="refreshTutors()">
                        Refresh <i class="bi-arrow-repeat"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3">
                  <form role="search">
                    <input
                      class="shadow-one form-control-sm"
                      type="search"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
            </nav>

            <!-- TUTORS TABLE -->
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th class="d-none">Pic</th>
                    <th>Contact</th>
                    <th>Education</th>
                    <th>Status</th>
                    <!-- <th>Location</th> -->
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody
                  v-if="tutorsTable"
                  class="shadow-one table-responsive"
                  v-for="(tutor, index) in tutorsList()"
                >
                  <tr class="text-start">
                    <td>
                      <small>{{ index + 1 }}</small>
                    </td>
                    <td>
                      <small>{{ tutor.lastName }} {{ tutor.firstName }}</small>
                    </td>
                    <td class="d-none">
                      <small>{{ tutor.profilePictureURL }}</small>
                    </td>
                    <td>
                      <a href="{{tutor.contact}}"
                        ><small>{{ tutor.contact }}</small>
                      </a>
                    </td>
                    <td>
                      <small>{{ tutor.studentStatus }}</small>
                    </td>
                    <td>
                      <small>{{ tutor.status }}</small>
                    </td>
                    <!-- <td><%#= tutor.data.location %></td> -->
                    <td>
                      <small>{{ tutor.email }}</small>
                    </td>
                    <td>
                      <!-- ACTION BUTTONS -->
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn tutorIcon me-2 update-data"
                          data-bs-toggle="modal"
                          data-bs-target="#update"
                          @click="detailedTutorInfo(tutor)"
                        >
                          <a><i class="bi-three-dots"></i></a>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>

                <tbody
                  v-if="applicantsTable"
                  class="shadow-one table-responsive"
                  v-for="(applicant, index) in applicantsList()"
                >
                  <tr class="text-start">
                    <td>
                      <small>{{ index + 1 }}</small>
                    </td>
                    <td>
                      <small
                        >{{ applicant.lastName }}
                        {{ applicant.firstName }}</small
                      >
                    </td>
                    <td>
                      <a href="{{applicant.contact}}">
                        <small>{{ applicant.contact }}</small>
                      </a>
                    </td>
                    <td>
                      <small>{{ applicant.studentStatus }}</small>
                    </td>
                    <td>
                      <small>{{ applicant.status }}</small>
                    </td>
                    <!-- <td><%#= application.data.location %></td> -->
                    <td>
                      <small>
                        <small>{{ applicant.email }}</small>
                      </small>
                    </td>
                    <td>
                      <!-- ACTION BUTTONS -->
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn tutorIcon me-2 update-data"
                          data-bs-toggle="modal"
                          data-bs-target="#update"
                          @click="detailedTutorInfo(applicant)"
                        >
                          <a><i class="fa fa-info-circle me-2"></i></a>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- UPDATE INFO -->
            <form class="modal" tabindex="-1" id="update">
              <fieldset
                class="modal-content modal-dialog modal-dialog-centered modal-dialog-scrollable"
                data-section="1"
              >
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <h1 class="modal-title fs-5 mt-2 me-3 me-lg-5">TUTOR</h1>
                  </div>
                  <ul class="nav nav-tabs bg-success">
                    <li class="nav-item">
                      <a class="nav-link" @click="tutorDetailTabBtn">Details</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" @click="tutorUpdateTabBtn">Update</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" @click="tutorContractTabBtn"
                        >Contract</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="row modal-body modal-dialog-scrollable">
                  <div class="container-fluid" v-if="tutorInfoTab">
                    <div class="row text-start mx-1">
                      <div class="bg-primary my-2">Personal Details</div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Name:
                            {{ selectedTutor ? selectedTutor.lastName : "" }}
                            {{
                              selectedTutor ? selectedTutor.firstName : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small>{{
                            selectedTutor ? selectedTutor.email : ""
                          }}</small>
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >DoB:
                            {{ selectedTutor ? selectedTutor.DoB : "" }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Mobile:
                            {{
                              selectedTutor ? selectedTutor.contact : ""
                            }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >Category:
                            {{
                              selectedTutor ? selectedTutor.category : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Status:
                            {{
                              selectedTutor ? selectedTutor.status : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Area:
                            {{
                              selectedTutor ? selectedTutor.location : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >GPS:
                            {{ selectedTutor ? selectedTutor.gps : "" }}</small
                          >
                        </p>
                      </div>

                      <div class="bg-primary my-2">Qualification</div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Type:
                            {{
                              selectedTutor ? selectedTutor.studentStatus : ""
                            }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >Course:
                            {{ selectedTutor ? selectedTutor.coursing : "" }}
                            {{
                              selectedTutor ? selectedTutor.coursed : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Qualification:
                            {{
                              selectedTutor ? selectedTutor.qualification : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Level:
                            {{
                              selectedTutor ? selectedTutor.level : "N/A"
                            }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >Momo:
                            {{
                              selectedTutor ? selectedTutor.momo_number : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >School:
                            {{
                              selectedTutor
                                ? selectedTutor.school_attending
                                : ""
                            }}
                            {{
                              selectedTutor ? selectedTutor.schoolCompleted : ""
                            }}
                          </small>
                        </p>
                      </div>

                      <div class="bg-primary my-2">Level of Expertise</div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Lower Pri:
                            {{
                              selectedTutor ? selectedTutor.lower_primary : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >Upper Pri:
                            {{
                              selectedTutor ? selectedTutor.upper_primary : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-6">
                        <p>
                          <small
                            >JHS:
                            {{ selectedTutor ? selectedTutor.JHS : "" }}</small
                          >
                        </p>
                      </div>

                      <div class="col-lg-6">
                        <p>
                          <small
                            >SHS:
                            {{ selectedTutor ? selectedTutor.SHS : "" }}</small
                          >
                        </p>
                      </div>

                      <div class="bg-primary">Other Details</div>
                      <div class="col-lg-12">
                        <p>
                          <small>
                            Accessible Areas:
                            {{
                              selectedTutor
                                ? selectedTutor.accessibleLocations
                                : ""
                            }}</small
                          >
                        </p>
                      </div>
                      <div class="col-lg-12">
                        <p>
                          <small
                            >Motivation:
                            {{
                              selectedTutor ? selectedTutor.motivation : ""
                            }}</small
                          >
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="container-fluid" v-if="tutorUpdateTab">
                    <form>
                      <div class="row text-start">
                        <div class="col-lg-6">
                          <small>
                            <label class="label" for="statusofApplication"
                              >Status</label
                            >
                            <select class="apply-input" name="qualification">
                              <option value="qualified">Qualified</option>
                              <option value="disqualified">Disqualified</option>
                              <option value="pending">Pending</option>
                              <option value="suspended">Suspended</option>
                              <option value="terminated">terminated</option>
                            </select></small
                          >
                        </div>
                        <div class="col-lg-6">
                          <small
                            ><label class="label" for="statusofApplication"
                              >Rating</label
                            >
                            <select class="apply-input" name="ratings">
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select></small
                          >
                        </div>

                        <div class="col-lg-6">
                          <small>
                            <label class="label" for="statusofApplication"
                              >Category</label
                            >
                            <select
                              name="category"
                              id="applicationCategory"
                              class="apply-input"
                            >
                              <option value="tutor">Tutor</option>
                              <option value="applicant">Applicant</option>
                              <option value="pending">pending</option>
                              <option value="disqualified">disqualified</option>
                            </select></small
                          >
                        </div>

                        <div class="col-lg-6">
                          <small>
                            <label for="date">Date</label>
                            <input class="apply-input" type="date" />
                          </small>
                        </div>

                        <div class="col-lg-12">
                          <small>
                            <label for="comment">comment</label>
                            <textarea
                              name="comment"
                              cols="50"
                              rows="4"
                            ></textarea>
                          </small>
                        </div>

                        <!-- BUTTON -->
                        <div
                          class="py-3 d-lg-flex justify-content-end pe-lg-3 modal-footer"
                        >
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close<i class="fa-regular fa-circle-xmark"></i>
                          </button>

                          <button class="btn btn-success me-lg-3">
                            Update Data<i
                              class="fa-regular fa-circle-check"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="container-fluid" v-if="tutorContractTab">
                    <form>
                      <div class="row text-start">
                        <div class="col-lg-6">
                          <small>
                            <label for="parent">Parent</label>
                            <input class="apply-input" type="text" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Contact">Contact</label>
                            <input class="apply-input" type="text" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Student">Student</label>
                            <input class="apply-input" type="text" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Class">Class</label>
                            <input class="apply-input" type="text" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Remuneration">Remuneration</label>
                            <input class="apply-input" type="number" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Date">Date</label>
                            <input class="apply-input" type="date" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Sessions Per Week"
                              >Sessions Per Week</label
                            >
                            <input class="apply-input" type="number" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Meeting Days">Meeting Days</label>
                            <input class="apply-input" type="text" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Period Length">Period Length</label>
                            <input class="apply-input" type="number" />
                          </small>
                        </div>
                        <div class="col-lg-6">
                          <small>
                            <label for="Status">Contract Status</label>
                            <select name="" id="" class="apply-input">
                              <option value="to begin">To Begin</option>
                              <option value="active">Active</option>
                              <option value="paused">Paused</option>
                              <option value="Terminated">Terminated</option>
                            </select>
                          </small>
                        </div>
                        <div class="col-lg-12">
                          <small>
                            <label for="Objective(s):">Objective(s):</label>
                            <textarea class="apply-input" row="10"></textarea>
                          </small>
                        </div>
                        <div class="text-end">
                          <button class="btn btn-danger me-2" type="reset">
                            Reset
                          </button>
                          <button class="btn btn-success" type="submit">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </fieldset>
            </form>

            <!-- Bootstrap Toast -->
            <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
              <div
                id="toastContainer"
                class="toast hide"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div class="toast-header">
                  <strong class="me-auto">Update Status</strong>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="toast-body" id="toastMessage"></div>
              </div>
            </div>
          </section>

          <!-- UPLOADS SECTION -->
          <section v-if="uploadsSection" class="shadow-two py-2">
            <div class="me-auto">
              <div class="btn-toolbar my-3" role="toolbar">
                <div class="me-2" role="group">
                  <ul class="nav nav-tabs bg-success">
                    <a class="navbar-brand me-4 fs-4"> Uploads</a>
                    <li class="nav-item">
                      <button class="nav-link" @click="offerShow">Offer</button>
                    </li>
                    <li class="nav-item">
                      <button class="nav-link" @click="noticeShow">
                        Notice
                      </button>
                    </li>
                    <li class="nav-item">
                      <button class="nav-link" @click="emailShow">Email</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mx-5">
              <div class="div" id="">
                <!-- UPLOAD CONTRACT -->
                <section v-if="offerBtn" class="shadow-two my-3 row">
                  <div class="col-lg-6 d-none d-lg-block pb-5"></div>
                  <div class="col-lg-6 shadow-two bg-white row text-start">
                    <h4 class="my-lg-4 my-2">OFFER UPLOADS</h4>
                    <div class="col-lg-6">
                      <label for="">Contract Type:</label> <br />
                      <select name="type" id="" class="form-control shadow-two">
                        <option disabled>Select offer</option>
                        <option value="DUO">DUO</option>
                        <option value="TRI">TRI</option>
                        <option value="QUAD">QUAD</option>
                        <option value="PENT">PENT</option>
                      </select>
                    </div>

                    <div class="col-lg-6">
                      <label class="" for="">Mode:</label> <br />
                      <select name="mode" id="" class="form-control shadow-two">
                        <option value="">MODE OF TUITION</option>
                        <option value="online">Online</option>
                        <option value="in-person">In-Person</option>
                      </select>
                    </div>

                    <div class="col-lg-6">
                      <label for="">Level:</label> <br />
                      <select name="level" class="form-control shadow-two">
                        <option disabled>Level of student</option>
                        <option value="KG">Kindergarten</option>
                        <option value="PRIMARY">Primary</option>
                        <option value="JHS">JHS</option>
                        <option value="SHS">SHS</option>
                      </select>
                    </div>

                    <div class="col-lg-6">
                      <label for="">Class:</label> <br />
                      <input
                        class="form-control shadow-two"
                        type="text"
                        name="class"
                        placeholder="CLASS"
                      />
                    </div>

                    <div class="col-lg-12">
                      <label for="">Subjects:</label> <br />
                      <textarea
                        name="subjects"
                        id=""
                        class="form-control shadow-two"
                        placeholder="TUITION SUBJECT(S)"
                      ></textarea>
                    </div>

                    <div class="col-lg-6">
                      <label for="">Lesson Duration</label> <br />
                      <select
                        name="duration"
                        id=""
                        class="form-control shadow-two"
                      >
                        <option disabled>
                          Select Duration
                          <i class="fa-solid fa-chevron-down ms-auto"></i>
                        </option>
                        <option value="1 hour">1 hour</option>
                        <option value="1.5 hours">1.5 hrs</option>
                        <option value="2 hours">2 hrs</option>
                        <option value="2.5 hours">2.5 hrs</option>
                        <option value="3 hours">3 hrs</option>
                      </select>
                    </div>

                    <div class="col-lg-6">
                      <label for="">Location:</label> <br />
                      <input
                        class="form-control shadow-two"
                        type="text"
                        name="location"
                        placeholder="Location"
                      />
                    </div>

                    <div class="col-lg-12">
                      <label for="">Allowance</label> <br />
                      <input
                        class="form-control shadow-two"
                        type="text"
                        name="allowance"
                        placeholder="ALLOWANCE"
                      />
                    </div>

                    <button
                      class="btn btn-success my-lg-4 my-3 shadow-two"
                      type="submit"
                      name="postContract"
                    >
                      POST CONTRACT
                    </button>
                  </div>
                </section>

                <!-- NOTICE BOARD -->
                <section v-if="noticeBtn" class="shadow-two my-3 row">
                  <div class="col-lg-6 d-none d-lg-block pb-5"></div>
                  <div class="col-lg-6 shadow-two bg-white">
                    <h4 class="my-lg-3">NOTICE BOARD</h4>
                    <!-- <h3 class="py-1">NOTICE</h3> -->
                    <form action="/notice" method="post" class="">
                      <div class="my-4">
                        <label
                          class="d-flex justify-content-start"
                          for="News Title"
                          >TITLE</label
                        >

                        <input
                          class="shadow-one form-control"
                          type="text"
                          name="title"
                          placeholder="Notice Title"
                        />
                      </div>

                      <div class="my-4">
                        <label class="label" for="News Title">DATE</label>
                        <input
                          class="shadow-one form-control"
                          type="date"
                          name="Date_Issued"
                          placeholder="Select Date"
                        />
                      </div>

                      <div class="my-4">
                        <label for="message" class="label">MESSAGE</label>
                        <textarea
                          class="form-control shadow-one"
                          name="message"
                          id=""
                          placeholder="Enter notice"
                        ></textarea>
                      </div>
                      <!-- <input type="text" name="news" placeholder="News" /> -->
                      <div class="my-4">
                        <button
                          class="btn btn-success shadow-one my-3"
                          type="submit"
                        >
                          SEND NOTICE
                        </button>
                      </div>
                    </form>
                  </div>
                </section>

                <!-- EMAIL -->
                <section v-if="emailBtn" class="shadow-two my-lg-4 row">
                  <div class="col-lg-6 d-none d-lg-block pb-5 shadow-two"></div>
                  <div class="col-lg-6 shadow-two bg-white">
                    <h4 class="my-lg-4">EMAIL</h4>
                    <!-- <h3 class="py-1">NOTICE</h3> -->
                    <form action="/email" method="post" class="">
                      <div class="my-4">
                        <label
                          class="d-flex justify-content-start"
                          for="News Title"
                          >SUBJECT</label
                        >

                        <input
                          class="form-control shadow-one"
                          type="text"
                          name="subject"
                          placeholder="Enter email subject"
                        />
                      </div>

                      <div class="">
                        <label class="label" for="News Title">DATE</label>
                        <input
                          class="form-control shadow-one"
                          type="date"
                          name="date"
                          placeholder="Notice Title"
                        />
                      </div>

                      <div class="my-4">
                        <label for="sendTo" class="label">SEND TO:</label>
                        <select
                          name="sendTo"
                          id=""
                          class="form-control shadow-one"
                        >
                          <option value="all">All</option>
                          <option value="tutors">Tutors</option>
                          <option value="applicants">Applicants</option>
                          <option value="clients">Clients</option>
                          <option value="prospects">Prospects</option>
                        </select>
                      </div>

                      <!-- <div class="my-4">
                      <label for="sendTo" class="label mb-3">COPY TO:</label>
                      <select name="sendTo" id="" class="form-control">
                        <option value="supervisors">Supervisors</option>
                        <option value="management">Management</option>
                        <option value="parents">Parents</option>
                      </select>
                    </div> -->

                      <div class="">
                        <label for="message" class="label">MESSAGE</label>
                        <textarea
                          class="form-control shadow-one"
                          name="message"
                          id=""
                          placeholder="Enter notice"
                        ></textarea>
                      </div>

                      <div class="text-success my-2" id="responseMessage"></div>

                      <!-- <input type="text" name="news" placeholder="News" /> -->
                      <div class="my-3">
                        <button
                          class="btn btn-success shadow-one"
                          type="submit"
                          id="adminEmail"
                        >
                          SEND EMAIL
                        </button>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// import { Axios } from "axios";
import Form from "@/components/Form.vue";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  serverTimestamp,
  updateDoc,
  deleteField,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const auth = getAuth(firebase);

export default {
  name: "Admin Page",
  components: {
    Form,
  },

  data() {
    return {
      dashboard: true,
      parentTable: false,
      uploadsSection: false,
      parentDetailTab: true,
      parentUpdateTab: false,
      tutorTable: false,
      tutorInfoTab: true,
      tutorUpdateTab: false,
      tutorContractTab: false,
      clientsTab: true,
      prospectsTab: false,
      applicantsTable: false,
      tutorsTable: true,
      financeTable: false,
      offerBtn: true,
      emailBtn: false,
      noticeBtn: false,
      parentSearch: "",
      selectedParent: null,
      selectedTutor: null,
      parents: [],
      tutors: [],
      notices: [],
      messages: [],
      currentIndex: 0,
      prospects: [],
      todoList: [],
      todoItem: "",
      done: false,
      tutorContract: {
        parent: "",
        parentContact: "",
        student: "",
        class: "",
        challenges: "",
        objectives: "",
        serverTimestamp: serverTimestamp(),
        startingDate: "",
        status: "",
        remuneration: 0,
        tutorRef: "",
        tutorContact: "",
        weeklySession: "",
        periodLength: "",
        charges: 0,
        tuitionDays: [],
        activeMonths: [],
        comments: [],
      },

      tutorUpdate: {
        qualification: "",
        rating: "",
        category: "",
        date: serverTimestamp(),
        comment: "",
      },

      uploadContract: {
        weeklySession: 0,
        mode: "",
        level: "",
        class: "",
        subjects: "",
        duration: 0,
        location: "",
        allowance: 0,
      },
    };
  },

  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push("/lifeline");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    tutorContractSubmit() {
      const tutor = this.selectedTutor();
    },

    tutorUpdateSubmit() {
      const tutor = this.selectedTutor();
    },

    addTodo() {
      this.todoList.push({ text: this.todoItem, done: false });
      this.todoItem = "";
    },

    removeTodo(index) {
      this.todoList.splice(index, 1);
    },

    emailShow() {
      (this.emailBtn = true), (this.noticeBtn = false), (this.offerBtn = false);
    },

    noticeShow() {
      (this.emailBtn = false), (this.noticeBtn = true), (this.offerBtn = false);
    },

    offerShow() {
      (this.emailBtn = false), (this.noticeBtn = false), (this.offerBtn = true);
    },

    prospectsTabBtn() {
      this.clientsTab = false;
      this.prospectsTab = true;
    },

    clientsTabBtn() {
      this.clientsTab = true;
      this.prospectsTab = false;
    },

    prospectsList() {
      const filteredList = this.parents.filter(
        (parent) => parent.data.category === "request"
      );
      const sortedProspects = filteredList.sort((a, b) =>
        a.data.parent.localeCompare(b.data.parent)
      );
      return sortedProspects;
    },

    parentTableView() {
      this.dashboard = !this.dashboard;
      this.parentTable = !this.parentTable;
    },

    tutorTableView() {
      this.tutorTable = !this.tutorTable;
    },

    parentDetailTabBtn() {
      this.parentDetailTab = true;
      this.parentUpdateTab = false;
    },

    parentUpdateTabBtn() {
      this.parentDetailTab = false;
      this.parentUpdateTab = true;
    },

    tutorDetailTabBtn() {
      this.tutorInfoTab = true;
      this.tutorUpdateTab = false;
      this.tutorContractTab = false;
    },

    tutorUpdateTabBtn() {
      this.tutorUpdateTab = true;
      this.tutorInfoTab = false;
      this.tutorContractTab = false;
    },

    tutorContractTabBtn() {
      this.tutorContractTab = true;
      this.tutorInfoTab = false;
      this.tutorUpdateTab = false;
    },
    // parentFind(){
    //   const parentFind = this.parentSearch
    //   const searchResult = this.parents.filter((parent) => parent.name === parentFind);
    // },

    uploadsSectionBtn() {
      this.uploadsSection = !this.uploadsSection;
    },

    clientsList() {
      const clients = this.parents.filter(
        (parent) => parent.data.category === "client"
      );
      const sortedClients = clients.sort((a, b) =>
        a.data.parent.localeCompare(b.data.parent)
      );
      // console.log("Clients List:", clients);
      return clients;
    },

    tutorsList() {
      const tutors = this.tutors.filter((tutor) => tutor.category === "tutor");
      const sortedTutors = tutors.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
      return sortedTutors;
    },

    tutorTableBtn() {
      this.tutorsTable = true;
      this.applicantsTable = false;
    },

    applicantsList() {
      const applicants = this.tutors.filter(
        (applicant) => applicant.category === "applicant"
      );
      const sortedApplicants = applicants.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
      // console.log("Applicants List:", applicants);
      return sortedApplicants;
    },

    applicantTableBtn() {
      this.tutorsTable = false;
      this.applicantsTable = true;
    },

    date() {
      var options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        weekday: "short",
      };
      var today = new Date();
      var date = today.toLocaleDateString("en-US", options);
      return date;
    },

    nextMessage() {
      if (this.currentIndex < this.messages.length - 1) {
        this.currentIndex++;
      }
    },
    prevMessage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },

    currentMessage() {
      return this.messages[this.currentIndex];
    },

    detailedInfo(parent) {
      this.selectedParent = parent;
    },

    updatePayment(client) {
      client = this.detailedInfo();
      console.log(client);
    },

    detailedTutorInfo(key) {
      this.selectedTutor = key;
    },
  },

  created() {
    this.tutorApplications;
    this.parentsData;
    this.message;
  },

  beforeCreate() {},
  beforeMount() {},
  mounted() {},

  // Computed Properties
  computed: {
    async parentsData() {
      try {
        const requestForTutorCol = collection(db, "Request For Tutor");
        const requestsSnapshot = await getDocs(requestForTutorCol);
        let request = [];

        if (!requestsSnapshot.empty) {
          requestsSnapshot.forEach((doc) => {
            // console.log(doc.data());
            request.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          this.parents = request; // Assign the fetched data to this.parents
        } else {
          console.log("Parent Documents Not Found");
        }
      } catch (error) {
        console.error("Error fetching prospects:", error);
      }
    },

    refreshParent() {
      this.parentsData();
    },

    async tutorApplications() {
      const usersRef = collection(db, "Tutor Applications");
      const querySnapshot = await getDocs(usersRef);
      let applications = [];

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          applications.push(doc.data());
          this.tutors = applications;
        });
      } else {
        console.log("Tutor Data Unavailable");
      }
    },

    async tutorApplicationsUpdate() {
      const contract = this.tutorContract;
      const email = "";
      const tutorRef = doc(db, "Tutor Applications", email);
      await updateDoc(tutorRef, contract);
    },

    // async tutorContractDelete(){},

    refreshTutors() {
      this.tutorApplications();
      this.tutorsList();
    },

    async message() {
      try {
        const message = collection(db, "Messages");
        const messagesSnapshot = await getDocs(message);
        // const messageList = messagesSnapshot.docs.map((doc) => doc.data());
        let myMessages = [];

        if (!messagesSnapshot.empty) {
          messagesSnapshot.forEach((doc) => {
            // console.log(doc.data());
            myMessages.push({
              id: doc.id,
              data: doc.data(),
            });
            // myMessages.push(doc.data());
            myMessages = this.messages;
            // console.log(myMessages);
          });
        } else {
          console.log("You Have No Messages");
        }
      } catch (error) {
        console.error("Error fetching prospects:", error);
      }
    },

    async deleteMessage() {
      const messageId = this.currentMessage().id;
      try {
        await deleteDoc(doc(db, "Messages", messageId));
        console.log("Message deleted");
        this.messageId.pop();
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    },

    async deleteMessageField() {
      const cityRef = doc(db, "cities", "BJ");
      await updateDoc(cityRef, {
        capital: deleteField(),
      });
    },

    refreshMessages() {
      this.message();
      this.currentMessage();
    },

    lifelineRevenue() {
      return this.parents.reduce((total, curr) => {
        if (curr.category === "client") {
          return total + parseFloat(curr.fees);
        }
        return total;
      }, 0);
    },
  },
};
</script>

<style scoped>
.red {
  text-decoration: line-through;
  color: red;
}

.todoinput {
  width: 13rem;
  border: 2px solid blue;
  border-radius: 5px;
}

.todoinput:focus {
  background: #1d1c1c;
  border: 3px solid white;
  color: white;
}

.todoApp {
  padding: 1rem 1.2rem;
  height: 17rem;
}

.message {
  background-color: white;
  height: 17rem;
}

.active {
  color: white;
  background-color: red;
}

.nav-link {
  color: white;
}

.nav-link:hover {
  color: black;
  background-color: white;
}

.nav-link:active {
  background-color: white;
  color: black;
}

.h1 {
  height: 100vh;
}
.h2 {
  height: 90vh;
}
</style>
