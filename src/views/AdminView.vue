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

              <Divider layout="horizontal" class="flex md:hidden" align="center"
                ><b>SECTIONS</b></Divider
              >
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
        <nav class="navbar navbar-expand-lg d-none d-lg-block">
          <div class="">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand me-auto mb-2 mb-lg-0 text-danger" href="#"
                >LIFELINE</a
              >

              <div class="me-2">
                <h5 class="text-success">
                  {{ dateDisplay() }}
                  <i class="fa-solid fa-calendar-check ps-1"></i>
                </h5>
              </div>

              <IconField iconPosition="left">
                <InputIcon>
                  <i class="pi pi-search" />
                </InputIcon>
                <InputText placeholder="Search" />
              </IconField>
            </div>
          </div>
        </nav>

        <section id="adminDash" class="admin-body mb-5">
          <section v-if="dashboard" class="container-fluid">
            <!-- STATISTICS -->
            <div class="row my-lg-4 my-4 pt-3">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div
                  class="revenue shadow-two bg-white hover d-flex text-start"
                >
                  <i class="pi pi-id-card px-2"></i>
                  <div class="bold">
                    <h6>Applicants</h6>
                    <h3>{{ applicantsList().length }}</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="tutor shadow-two bg-white hover text-start d-flex">
                  <i class="pi pi-verified px-2"></i>
                  <div class="bold">
                    <h6>Tutors</h6>
                    <h3>{{ tutorsList().length }}</h3>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="client shadow-two bg-white hover d-flex text-start">
                  <i class="pi pi-users px-2"></i>
                  <div class="bold">
                    <h6>Contracts</h6>
                    <h3>{{ clientsList().length }}</h3>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="profit shadow-two bg-white hover text-start d-flex">
                  <i class="pi pi-shop px-2"></i>
                  <div class="bold">
                    <h6>Prospects</h6>
                    <h3>{{ prospectsList().length }}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid my-5">
              <div class="row">
                <div class="col-lg-8">
                  <div class="motivation shadow-two">
                    <h5 class="pb-3">Messages</h5>
                    <div
                      class="head d-flex justify-content-between mx-5 text-secondary"
                    >
                      <h5>Heading: {{ currentMessage().data.subject }}</h5>

                      <div class="text-danger">
                        <a>
                          <i class="pi pi-receipt"></i>
                        </a>
                        <a>
                          <i class="pi pi-pen-to-square mx-3"></i>
                        </a>
                        <a @click="deleteMessage()">
                          <i class="pi pi-minus-circle"></i>
                        </a>
                      </div>
                    </div>

                    <p class="px-5 text-start currentMessage">
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
                  <div class="to-do shadow-one bg-white card bl-2">
                    <h5>To Do List</h5>
                    <p><small>Goals of the Day</small></p>
                    <div
                      v-for="(todo, index) in todoList"
                      class="text-start mx-2"
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

                    <div class="my-3 text-center">
                      <IconField>
                        <InputText v-model="todoItem" @keyup.enter="addTodo" />
                        <InputIcon class="pi pi-plus-circle" />
                      </IconField>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- GRAPHS -->
          <!-- <section>
            <div class="card"></div>
          </section> -->

          <ScrollTop />

          <!-- PARENTS TABLE PRIMEVUE -->
          <div class="card" v-if="parentTable">
            <DataTable
              v-model:filters="filters"
              v-model:selection="selectedParent"
              selectionMode="single"
              :value="parents"
              ref="dt"
              sortMode="multiple"
              showGridlines
              removableSort
              paginator
              :rows="10"
              dataKey="id"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              :globalFilterFields="[
                'data.parent',
                'data.student',
                'data.category',
                'data.status',
              ]"
              filterDisplay="menu"
              :loading="loading"
              paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
              </template>
              <template #paginatorend>
                <Button
                  type="button"
                  @click="exportCSV($event)"
                  icon="pi pi-download"
                  text
                />
              </template>

              <template #header>
                <div class="row">
                  <div class="col text-start">
                    <h2 class="">Parents</h2>
                  </div>
                  <div class="col">
                    <IconField iconPosition="right">
                      <InputIcon>
                        <i class="pi pi-search" />
                      </InputIcon>
                      <InputText
                        v-model="filters['global'].value"
                        placeholder="Keyword Search"
                      />
                    </IconField>
                  </div>
                </div>
              </template>
              <template #empty> No Parent found. </template>
              <template #loading> Loading clients data. Please wait. </template>
              <Column field="data.parent" header="Client" sortable>
                <template #body="{ data }">
                  {{ data.data.parent }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="text"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>
              <Column field="data.student" header="Ward" sortable>
                <template #body="{ data }">
                  {{ data.data.student }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="text"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>
              <Column
                field="data.fees"
                header="Fees"
                sortable
                bodyClass="text-center"
              >
                <template #body="{ data }">
                  {{ data.data.fees }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="number"
                    class="p-column-filter"
                    placeholder="Search by amount"
                  />
                </template>
              </Column>
              <Column
                field="data.weeklySession"
                header="Session"
                sortable
                bodyClass="text-center"
              ></Column>

              <Column field="data.contact" header="Contact"></Column>

              <Column
                field="data.status"
                header="Status"
                sortable
                bodyClass="text-center"
              >
                <template #body="{ data }">
                  <Tag
                    :value="data.data.status"
                    :severity="getSeverity(data.status)"
                  />
                </template>
                <template #filter="{ filterModel }">
                  <Dropdown
                    v-model="filterModel.value"
                    :options="statuses"
                    placeholder="Select One"
                    class="p-column-filter"
                    showClear
                  >
                    <template #option="slotProps">
                      <Tag
                        :value="slotProps.option"
                        :severity="getSeverity(slotProps.option)"
                      />
                    </template>
                  </Dropdown> </template
              ></Column>

              <Column
                header="Action"
                headerStyle="width: 5rem; text-align: center"
                bodyStyle="text-align: center; overflow: visible"
              >
                <template #body="{ data }">
                  <Button
                    type="button"
                    icon="pi pi-expand"
                    @click="editParent(data)"
                    style="font-size: 0.7rem"
                    rounded
                  />
                </template>
              </Column>
            </DataTable>
          </div>

          <!-- PARENT DIALOG -->
          <Dialog
            v-model:visible="parentDialog"
            maximizable
            :style="{ width: '470px' }"
            header="Parent Details"
            :modal="true"
            class="p-fluid"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
          >
            <TabView>
              <TabPanel>
                <template #header>
                  <Button label="Detail" class="link" />
                </template>
                <div class="container-fluid">
                  <div class="row text-start">
                    <div class="bg-primary my-2">Personal Information</div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Parent:</strong>
                        {{ selectedParent ? selectedParent.data.parent : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Contact:</strong>
                        {{
                          selectedParent ? selectedParent.data.altContact : ""
                        }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Student:</strong>
                        {{ selectedParent ? selectedParent.data.student : "" }}
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
                        {{ selectedParent ? selectedParent.data.status : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Address: </strong>
                        {{ selectedParent ? selectedParent.data.address : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Level:</strong>
                        {{
                          selectedParent ? selectedParent.data.schoolName : ""
                        }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <p>
                        <strong>Level:</strong>
                        {{ selectedParent ? selectedParent.data.level : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Class:</strong>
                        {{ selectedParent ? selectedParent.data.class : "" }}
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
                        {{ selectedParent ? selectedParent.data.category : "" }}
                      </p>
                    </div>

                    <div class="col-lg-6">
                      <p>
                        <strong>Challenges:</strong>
                        {{
                          selectedParent ? selectedParent.data.challenge : ""
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
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <template #header>
                  <Button label="Update" class="link" />
                </template>
                <!-- Contract Update -->
                <div class="container-fluid text-start">
                  <form @submit.prevent="updateParentData">
                    <div class="row text-start">
                      <div class="bg-primary my-3">Update Contract</div>
                      <div class="col-lg-6">
                        <label for="status">Status</label>
                        <select
                          class="apply-input"
                          v-model.trim="contractUpdate.status"
                        >
                          <option value="active">Active</option>
                          <option value="suspended">Suspended</option>
                          <option value="completed">Completed</option>
                          <option value="terminated">Terminated</option>
                        </select>
                      </div>

                      <div class="col-lg-6">
                        <label for="sessions">Sessions</label>
                        <input
                          class="apply-input"
                          type="text"
                          v-model.number="contractUpdate.session"
                        />
                      </div>

                      <div class="col-lg-6">
                        <label for="Fees">Fees</label>
                        <input
                          class="apply-input"
                          type="text"
                          v-model.number="contractUpdate.fees"
                        />
                      </div>

                      <div class="col-lg-6">
                        <label for="levels">Discount</label>
                        <input
                          class="apply-input"
                          type="number"
                          v-model.number="contractUpdate.discount"
                        />
                      </div>
                    </div>
                    <div>{{ parentUpdateFeedback }}</div>
                    <div class="text-end">
                      <button class="btn btn-success my-3" type="submit">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </TabPanel>
              <TabPanel>
                <template #header>
                  <Button label="Tutor" class="link" />
                </template>
                <div class="container-fluid">
                  <!-- Tutor Assign -->
                  <div class="container-fluid text-start">
                    <div class="row">
                      <div class="my-3 text-start row">
                        <div class="bg-primary my-3">Tutor Information</div>
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
                            <strong>Contact:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.tutor_email
                                : ""
                            }}
                          </p>
                        </div>
                        <div class="col-lg-6">
                          <p>
                            <strong>Allowance:</strong>
                            {{
                              selectedParent
                                ? selectedParent.data.remuneration
                                : ""
                            }}
                          </p>
                        </div>
                      </div>

                      <div class="bg-primary my-3">Update Information</div>
                      <form>
                        <div class="row">
                          <div class="col-lg-6">
                            <label for="Tutor">Tutor</label>
                            <input class="apply-input" type="text" />
                          </div>

                          <div class="col-lg-6">
                            <label for="Remuneration">Remuneration</label>
                            <input class="apply-input" type="number" />
                          </div>

                          <div class="col-lg-6">
                            <label for="Contact">Contact</label>
                            <input class="apply-input" type="number" />
                          </div>

                          <div class="col-lg-6">
                            <label for="momoContact">MoMo Contact</label>
                            <input class="apply-input" type="number" />
                          </div>

                          <div class="text-end my-3">
                            <button class="btn btn-success">Update</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabView>

            <template #footer>
              <Button
                label="Cancel"
                icon="pi pi-times"
                text
                @click="hideParentDialog"
              />
              <!-- <Button
                label="Save"
                icon="pi pi-check"
                text
                @click="saveParentDialog"
              /> -->
            </template>
          </Dialog>

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

          <!-- FINANCE TABLE -->
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
          <div class="card my-5" v-if="tutorTable">
            <DataTable
              v-model:filters="tutorFilter"
              v-model:selection="selectedTutor"
              selectionMode="single"
              :value="tutors"
              ref="tt"
              sortMode="multiple"
              showGridlines
              removableSort
              paginator
              :rows="10"
              dataKey="email"
              :rowsPerPageOptions="[5, 10, 20, 50]"
              :globalFilterFields="['firstName', 'lastName', 'contact']"
              filterDisplay="menu"
              :loading="loading"
              paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
            >
              <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
              </template>
              <template #paginatorend>
                <Button
                  type="button"
                  @click="exportCSV($event)"
                  icon="pi pi-download"
                  text
                />
              </template>

              <template #header>
                <div class="row">
                  <div class="col text-start d-flex">
                    <h2 class="">Tutors</h2>
                    <div class="mt-1 mx-2">
                      <Button
                        class="mx-2"
                        label="Tutors"
                        icon="pi pi-user"
                        severity="success"
                        text
                        raised
                      />
                      <Button
                        label="Applicants"
                        icon="pi pi-folder-plus"
                        severity="success"
                        text
                        raised
                      />
                    </div>
                  </div>
                  <div class="col">
                    <IconField iconPosition="right">
                      <InputIcon>
                        <i class="pi pi-search" />
                      </InputIcon>
                      <InputText
                        v-model="tutorFilter['global'].value"
                        placeholder="Keyword Search"
                      />
                    </IconField>
                  </div>
                </div>
              </template>
              <template #empty> No Tutor found. </template>
              <template #loading> Loading tutors data. Please wait. </template>

              <Column field="lastName" header="Last Name" sortable>
                <template #body="{ data }">
                  {{ data.lastName }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="text"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>
              <Column field="firstName" header="First Name" sortable>
                <template #body="{ data }">
                  {{ data.firstName }}
                </template>
                <template #filter="{ filterModel }">
                  <InputText
                    v-model="filterModel.value"
                    type="text"
                    class="p-column-filter"
                    placeholder="Search by name"
                  />
                </template>
              </Column>

              <Column
                field="studentStatus"
                header="Education"
                sortable
              ></Column>

              <Column
                field="category"
                header="Category"
                sortable
                bodyClass="text-center"
              >
                <template #body="{ data }">
                  <Tag
                    :value="data.category"
                    :severity="getSeverity(data.status)"
                  />
                </template>
                <template #filter="{ filterModel }">
                  <Dropdown
                    v-model="filterModel.value"
                    :options="status"
                    placeholder="Select One"
                    class="p-column-filter"
                    showClear
                  >
                    <template #option="slotProps">
                      <Tag
                        :value="slotProps.option"
                        :severity="getSeverity(slotProps.option)"
                      />
                    </template>
                  </Dropdown>
                </template>
              </Column>

              <Column
                field="contact"
                header="Contact"
                bodyClass="text-center"
              ></Column>

              <Column
                field="status"
                header="Status"
                sortable
                bodyClass="text-center"
              >
                <template #body="{ data }">
                  <Tag
                    :value="data.status"
                    :severity="getSeverity(data.status)"
                  />
                </template>
                <template #filter="{ filterModel }">
                  <Dropdown
                    v-model="filterModel.value"
                    :options="status"
                    placeholder="Select One"
                    class="p-column-filter"
                  >
                    <template #option="slotProps">
                      <Tag
                        :value="slotProps.option"
                        :severity="getSeverity(slotProps.option)"
                      />
                    </template>
                  </Dropdown> </template
              ></Column>

              <Column
                header="Action"
                headerStyle="width: 5rem; text-align: center"
                bodyStyle="text-align: center; overflow: visible"
              >
                <template #body="{ data }">
                  <Button
                    type="button"
                    icon="pi pi-align-center"
                    @click="editTutor(data)"
                    style="font-size: 0.7rem"
                    rounded
                  />
                </template>
              </Column>
            </DataTable>

            <!-- TUTOR DIALOG -->
            <Dialog
              v-model:visible="tutorDialog"
              maximizable
              :style="{ width: '450px' }"
              header="Tutor Details"
              :modal="true"
              class="p-fluid"
              :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
            >
              <div class="row text-start mx-1">
                <div class="bg-primary my-2">Personal Details</div>
                <div class="col-lg-6">
                  <p>
                    <small
                      >Name:
                      {{ selectedTutor ? selectedTutor.lastName : "" }}
                      {{ selectedTutor ? selectedTutor.firstName : "" }}</small
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
                      >DoB: {{ selectedTutor ? selectedTutor.DoB : "" }}</small
                    >
                  </p>
                </div>
                <div class="col-lg-6">
                  <p>
                    <small
                      >Mobile:
                      {{ selectedTutor ? selectedTutor.contact : "" }}</small
                    >
                  </p>
                </div>

                <div class="col-lg-6">
                  <p>
                    <small
                      >Category:
                      {{ selectedTutor ? selectedTutor.category : "" }}</small
                    >
                  </p>
                </div>
                <div class="col-lg-6">
                  <p>
                    <small
                      >Status:
                      {{ selectedTutor ? selectedTutor.status : "" }}</small
                    >
                  </p>
                </div>
                <div class="col-lg-6">
                  <p>
                    <small
                      >Area:
                      {{ selectedTutor ? selectedTutor.location : "" }}</small
                    >
                  </p>
                </div>
                <div class="col-lg-6">
                  <p>
                    <small
                      >GPS: {{ selectedTutor ? selectedTutor.gps : "" }}</small
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
                      {{ selectedTutor ? selectedTutor.coursed : "" }}</small
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
                      {{ selectedTutor ? selectedTutor.level : "N/A" }}</small
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
                      {{ selectedTutor ? selectedTutor.school_attending : "" }}
                      {{ selectedTutor ? selectedTutor.schoolCompleted : "" }}
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
                      >JHS: {{ selectedTutor ? selectedTutor.JHS : "" }}</small
                    >
                  </p>
                </div>

                <div class="col-lg-6">
                  <p>
                    <small
                      >SHS: {{ selectedTutor ? selectedTutor.SHS : "" }}</small
                    >
                  </p>
                </div>

                <div class="bg-primary">Other Details</div>
                <div class="col-lg-12">
                  <p>
                    <small>
                      Accessible Areas:
                      {{
                        selectedTutor ? selectedTutor.accessibleLocations : ""
                      }}</small
                    >
                  </p>
                </div>
                <div class="col-lg-12">
                  <p>
                    <small
                      >Motivation:
                      {{ selectedTutor ? selectedTutor.motivation : "" }}</small
                    >
                  </p>
                </div>
              </div>

              <!-- Footer Side -->
              <template #footer>
                <Button
                  label="Cancel"
                  icon="pi pi-times"
                  text
                  @click="hideTutorDialog"
                />
                <!-- <Button
                  label="Save"
                  icon="pi pi-check"
                  text
                  @click="saveTutorDialog"
                /> -->
              </template>
            </Dialog>
          </div>

          <!-- UPLOADS SECTION -->
          <div class="card my-5" v-if="uploadsSection">
            <TabView>
              <TabPanel header="Offer"
                ><section class="shadow-two my-3 row">
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
              </TabPanel>
              <TabPanel header="Notice">
                <section class="shadow-two my-3 row">
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
              </TabPanel>
              <TabPanel header="Email">
                <section class="shadow-two my-lg-4 row">
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
              </TabPanel>
            </TabView>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// import { Axios } from "axios";
import Form from "@/components/Form.vue";
import Dialog from "primevue/dialog";
import ScrollTop from "primevue/scrolltop";
import ConfirmDialog from "primevue/confirmdialog";
import { FilterMatchMode, FilterOperator } from "primevue/api";

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
      applicantsTable: false,
      tutorsTable: true,
      financeTable: false,
      date: null,
      parentSearch: "",
      selectedParent: null,
      selectedTutor: null,
      parentDialog: false,
      tutorDialog: false,
      contractMoney: 0,
      parents: [],
      tutors: [],
      notices: [],
      messages: [],
      currentIndex: 0,
      prospects: [],
      todoList: [],
      todoItem: "",
      done: false,
      parentUpdateFeedback: "",
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Export",
          icon: "pi pi-upload",
        },
      ],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        "data.parent": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        "data.category": {
          value: null,
          matchMode: FilterMatchMode.STARTS_WITH,
        },
        "data.student": {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        "data.status": { value: null, matchMode: FilterMatchMode.EQUALS },
        "data.tutor": { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      tutorFilter: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        contact: { value: null, matchMode: FilterMatchMode.CONTAINS },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        category: { value: null, matchMode: FilterMatchMode.EQUALS },
      },
      statuses: ["active", "paused", "completed", "terminated", "request"],
      status: ["active", "paused"],
      category: ["tutor", "applicant", "suspended", "terminated"],
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
        payments: [],
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

      contractUpdate: {
        status: "",
        weeklySession: null,
        fees: null,
        discount: 0,
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

    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },

    tutorContractSubmit() {
      const tutor = this.selectedTutor();
    },

    exportCSV() {
      this.$refs.dt.exportCSV();
    },

    exportCSV() {
      this.$refs.tt.exportCSV();
    },

    editParent(parent) {
      this.selectedParent = parent;
      this.parentDialog = true;
    },

    editTutor(tutor) {
      this.selectedTutor = tutor;
      this.tutorDialog = true;
    },

    hideParentDialog() {
      this.parentDialog = false;
    },

    hideTutorDialog() {
      this.tutorDialog = false;
    },

    saveParentDialog() {},
    saveTutorDialog() {},

    getSeverity(status) {
      switch (status) {
        case "terminated":
          return "danger";

        case "active":
          return "success";

        case "request":
          return "info";

        case "paused":
          return "warning";

        case "renewal":
          return null;
      }
    },

    addTodo() {
      this.todoList.push({ text: this.todoItem, done: false });
      this.todoItem = "";
    },

    removeTodo(index) {
      this.todoList.splice(index, 1);
    },

    parentTableView() {
      this.dashboard = !this.dashboard;
      this.parentTable = !this.parentTable;
    },

    tutorTableView() {
      this.tutorTable = !this.tutorTable;
      this.dashboard = !this.dashboard;
    },

    uploadsSectionBtn() {
      this.uploadsSection = !this.uploadsSection;
    },

    dateDisplay() {
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
      // console.log(client);
    },

    detailedTutorInfo(key) {
      this.selectedTutor = key;
    },

    async deleteMessage() {
      const messageId = this.currentMessage().id;
      try {
        await deleteDoc(doc(db, "Messages", messageId));
        // console.log("Message deleted");
        // Find the index of the current message
        const index = this.messages.findIndex(
          (message) => message.id === messageId
        );

        // Remove the message from the array
        if (index > -1) {
          this.messages.splice(index, 1);
        }

        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Message Deleted",
          life: 3000,
        });
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Message Content",
          life: 3000,
        });
        console.error("Error deleting message:", error);
      }
    },

    async updateParentData() {
      const parent = this.selectedParent.id;
      // console.log(parent);
      try {
        const parentRef = doc(db, "Request For Tutor", parent);
        const data = this.contractUpdate;
        // console.log(data);
        await updateDoc(parentRef, data);
        console.log("Data successfully update");
      } catch (error) {
        console.error("Error updating", error);
      }
    },

    async updateTutorData() {
      const tutor = this.selectedTutor.email;
      // console.log(tutor);
      try {
        const tutorRef = doc(db, "Tutor Applications", tutor);
        const data = this.tutorUpdate;
        // console.log(data);
        await updateDoc(tutorRef, data);
        console.log("Tutor Data successfully updated");
      } catch (error) {
        console.error("Error updating", error);
      }
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

    prospectsList() {
      const filteredList = this.parents.filter(
        (parent) => parent.data.category === "request"
      );
      const sortedProspects = filteredList.sort((a, b) =>
        a.data.parent.localeCompare(b.data.parent)
      );
      return sortedProspects;
    },

    confirm1() {
      this.$confirm.require({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        rejectClass: "p-button-secondary p-button-outlined",
        rejectLabel: "Cancel",
        acceptLabel: "Save",
        accept: () => {
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
    confirm2() {
      this.$confirm.require({
        message: "Do you want to delete this record?",
        header: "Danger Zone",
        icon: "pi pi-info-circle",
        rejectLabel: "Cancel",
        acceptLabel: "Delete",
        rejectClass: "p-button-secondary p-button-outlined",
        acceptClass: "p-button-danger",
        accept: () => {
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "Record deleted",
            life: 3000,
          });
        },
        reject: () => {
          this.$toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    },
  },

  created() {
    this.tutorApplications;
    this.parentsData;
    this.message;
  },

  // beforeCreate() {},
  // beforeMount() {},
  // mounted() {},

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

  watch: {},
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
  color: black;
}

.nav-link:hover {
  border-bottom: 4px solid green;
  padding-bottom: 3px;
}

.nav-link:active {
  background-color: white;
  color: black;
}

.border {
  border: 2px solid dark;
}

table {
  width: 100%;
}

th {
  height: 70px;
}

tr:hover {
  background-color: green;
}

.pi-shop,
.pi-users,
.pi-verified,
.pi-id-card {
  font-size: 3rem;
  /* display: inline-flex; */
}

.bold {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
