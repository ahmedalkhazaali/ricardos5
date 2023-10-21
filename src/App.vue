<template>
  <v-app>
    <v-app-bar style="height: 120px" class="pt-7">
      <v-img src="@/assets/title.png" />
      <v-btn class="mr-6" to="home">Home</v-btn>
      <v-btn class="mr-6" to="about">About</v-btn>
      <v-btn class="mr-6" to="contact">Contact Us</v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="mr-16" style="height: 100%">
        <v-btn
          width="150px"
          height="60px"
          style="
            background-color: rgb(238, 155, 0);
            color: white;
            text-size-adjust: 50px;
          "
          to="menu"
          >Menu</v-btn
        >
      </div>
    </v-app-bar>
    <v-main class="mt-16">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
