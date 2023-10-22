<template>
  <!---------------------------------Container -->
  <div class="d-flex flex-column justify-center align-center">
    <!-------------------------------------Banner image  -->
    <v-img src="@/assets/about-banner.png" style="width: 100%" fixed />
    <!--------------------------------------Intro   -->
    <v-card
      style="
        width: 100%;
        height: fit-content;
        min-width: 1500px;
        background-color: rgb(253, 134, 65);
      "
      class="d-flex flex-row align-center justify-center pa-10"
    >
      <div
        class="d-flex flex-column align-center mt-16 mb-16"
        style="width: 2700px; max-width: 90%"
      >
        <h1 class="title" style="font-size: 90px">RICARDOS PIZZA</h1>
        <h1 class="ttitle">IS THE BEST IN TOWN</h1>
        <p
          style="width: 70%; max-width: 70%; text-align: center"
          class="introBody"
        >
          365 days a year, Ricardo's Pizza Restaurant shines with unwavering
          commitment. We are dedicated to excellence, sourcing only the
          highest-quality ingredients to create an exceptional pizza experience.
          Our customers enthusiastically agree: we serve the city's most
          outstanding pizza!
        </p>
      </div>
    </v-card>

    <!----------------------------------------Main Body  -->
    <div
      class="second d-flex flex-row flex-wrap justify-center"
      style="height: fit-content; width: 100%"
      min-height="900px"
    >
      <div
        class="mt-16 d-flex flex-row align-center justify-center"
        style="width: 90%; max-width: 800px"
      >
        <div style="width: 60%; max-width: 1440px" class="ma-12">
          <h1 class="pride mb-3">
            WE PRIDE OURSELVES ON QUALITY <br />AND TASTE
          </h1>
          <p class="values">
            Ricardo's Pizza Restaurant lives by three core values:
            Craftsmanship, Hospitality, and Sustainability. We're dedicated to
            crafting exceptional pizzas, offering outstanding service, and
            practicing sustainability. Your satisfaction is our top priority,
            and we eagerly anticipate serving you while upholding these values.
          </p>
          <v-btn
            variant="outlined"
            style="
              font-size: 20px;
              background-color: orangered;
              color: white;
              border-radius: 3px;
              border-color: rgb(0, 0, 0);
            "
            class="mr-5 mt-9"
            >View Menu</v-btn
          >
          <v-btn
            variant="outlined"
            style="
              font-size: 20px;
              background-color: rgb(255, 255, 255);
              color: rgb(0, 0, 0);
              border-radius: 3px;
              border-color: rgb(0, 0, 0);
            "
            class="mt-9"
            >Contact Us</v-btn
          >
        </div>
      </div>

      <v-card
        title="RICARDOS"
        style="
          background-color: rgb(255, 255, 255);
          background-color: rgb(255, 255, 255);
          font-size: 50px;
          color: rgb(0, 0, 0);
          border-radius: 3px;
          border-color: rgb(0, 0, 0);
          width: 30%;
          max-width: 400px;
          height: 500px;
        "
        text="WE ARE LOOKING FORWARD TO SERVING YOU."
        variant="outlined"
        class="pa-8 mr-10"
      >
        <v-img class="menu mt-2 ml-16" src="@/assets/Ai.png" />

        <v-card-actions>
          <v-btn
            variant="outlined"
            style="
              background-color: rgb(255, 255, 255);
              color: rgb(0, 0, 0);
              border-radius: 3px;
              border-color: rgb(0, 0, 0);
              font-size: 17px;
            "
            class="mt-4"
            >Locations</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<style>
img {
  width: 100%;
  height: 30%;
}

.title {
  margin-top: 0px;
  margin-left: 500px;
  margin-right: 500px;
  text-align: center;
  color: #009b55;
  background-color: 218, 218, 218;
  text-shadow: -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
    2px 2px 0 #000000;
  font-size: 40px;
  font-family: "Monospace", Monaco;
}
.ttitle {
  margin-top: 0px;
  margin-left: 500px;
  margin-right: 500px;
  text-align: center;
  color: #ffffff;
  background-color: 218, 218, 218;
  text-shadow: -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000,
    1px 1px 0 #000000;
  font-size: 40px;
  font-family: "Monospace", Monaco;
}
.introBody {
  color: rgb(255, 255, 255);
  font-size: 28px;
  font-family: "Monospace", Monaco;
  text-shadow: -1px -1px 0 #000, 0 -1px 0 #000, 1px -1px 0 #000, 1px 0 0 #000,
    1px 1px 0 #000, 0 1px 0 #000, -1px 1px 0 #000, -1px 0 0 #000;
}

.first {
  background-color: rgb(253, 134, 65);
  margin-top: -100px;
}

.values {
  font-size: 18px;
  color: #000;
}

.pride {
  color: rgb(0, 0, 0);
  background-color: 218, 218, 218;
  font-size: 25px;
  font-family: "Monospace", Monaco;
}

.second {
  background: conic-gradient(
      from 90deg at 1px 0.5px,
      #75474700 90deg,
      rgb(109, 109, 109) 0
    )
    0 0/100px 100px;
  background-color: rgb(255, 255, 255);
}
.menu {
  width: 80%;
  margin-top: -50px;
  justify-content: end;
}
.chicken {
  width: 100%;
  height: 100%;
  margin-top: -50px;
  margin-right: 1000px;
}
.logo {
  position: absolute;
  top: 700px;
  right: 1420px;
  width: 360px;
  height: 700px;
  background-image: url(https://cdn.discordapp.com/attachments/814293260980846612/1165887859287412766/riclogo.png?ex=65487cae&is=653607ae&hm=26b5305888bb1401f95a3ddc94ed040f70d3af0eaa75509f8f99e5b3736af987&);
}
</style>

<script setup>
//
</script>
