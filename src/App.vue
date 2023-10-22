<template>
  <v-app>
    <v-app-bar style="height: 120px" class="pt-7">
      <v-img
        src="@/assets/title.png"
        class="ml-8"
        min-width="10%"
        max-width="30%"
      />
      <v-btn
        class="mr-6 ml-4"
        to="home"
        height="70px"
        width="150px"
        style="font-size: 22px"
        color="green"
        >Home</v-btn
      >
      <v-btn
        class="mr-6"
        to="about"
        height="70px"
        width="150px"
        style="font-size: 22px"
        color="green"
        :ripple="false"
        >About</v-btn
      >
      <v-btn
        class="mr-6"
        to="contact"
        height="70px"
        width="200px"
        color="green"
        style="font-size: 22px"
        >Contact Us</v-btn
      >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="mr-16 mt-3" style="height: 100%">
        <v-icon icon="mdi-phone" style="font-size: 50px" class="mr-5" />
        <v-txt class="mr-9 pt-6" style="font-size: 30px"
          >613 - 233 - 1515</v-txt
        >
        <v-btn
          width="150px"
          height="60px"
          class="mb-3"
          style="
            background-color: rgb(238, 155, 0);
            color: white;
            font-size: 22px;
          "
          to="menu"
          >Menu</v-btn
        >
      </div>
    </v-app-bar>
    <v-main class="mt-16">
      <router-view />
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
</script>
