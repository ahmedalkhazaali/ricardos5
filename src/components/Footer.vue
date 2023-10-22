<template>
  <div class="d-flex justify-center" style="width: 100%" fluid width="100%">
    <v-card style="width: 100%" flat>
      <div class="d-flex flex-column justify-center align-center flex-wrap">
        <div class="d-flex flex-row align-center mb-10 flex-wrap">
          <v-img src="@/assets/foot-logo.png" height="400px" width="500px" />
          <div class="d-flex flex-column">
            <div class="mt-16 ml-16 mb-9">
              <v-icon
                icon="mdi-phone"
                style="font-size: 50px"
                class="mr-5"
                color="green"
              />
              <v-txt class="mr-9 mt-6" style="font-size: 30px"
                >613 - 233 - 1515</v-txt
              >
            </div>
            <div class="ml-16" style="width: 500px">
              <v-icon
                icon="mdi-map-marker-radius"
                style="font-size: 50px"
                class="mr-5"
                color="orange"
              />

              <v-txt class="mr-9 pt-6" style="font-size: 30px"
                >267 Bay Street - Ottawa (Between Sommerset & Laurier)</v-txt
              >
            </div>
          </div>
        </div>
        <div class="d-flex flex-row justify-center align-center mb-7 flex-wrap">
          <v-btn
            variant="text"
            class="mr-6 btn:hover"
            to="home"
            height="50px"
            width="130px"
            style="font-size: 15px"
            :ripple="false"
            >Home</v-btn
          >
          <v-btn
            variant="text"
            class="mr-6"
            to="about"
            height="50px"
            width="130px"
            style="font-size: 15px"
            :ripple="false"
            >About</v-btn
          >
          <v-btn
            variant="text"
            outline="none"
            class="mr-6"
            to="contact"
            height="50px"
            width="200px"
            style="font-size: 15px"
            :ripple="false"
            >Contact Us</v-btn
          >
          <v-btn
            variant="text"
            outline="none"
            class="mr-6"
            to="menu"
            height="50px"
            width="130px"
            style="font-size: 15px"
            :ripple="false"
            >Menu</v-btn
          >
        </div>
      </div>
      <v-card
        style="height: 70px; background-color: rgb(214, 214, 214)"
        class="d-flex justify-center align-center"
      >
        <v-icon icon="mdi-copyright" class="mr-3" />
        <v-txt
          style="
            font-family: 'Courier New', Courier, monospace;
            font-size: 22px;
          "
          >Ricardo's Pizza, All rights reserved.</v-txt
        >
      </v-card>
    </v-card>
  </div>
</template>
<style>
.btn:hover {
  color: orange;
}
</style>
