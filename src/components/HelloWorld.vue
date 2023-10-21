<template>
  <img
    src="https://pizzapanorama.ca/images/adobestock_266429012.jpg?crc=125304778"
  />
  <div class="first">
    <h1 class="title"><br /><br />RICARDOS PIZZA IS THE BEST IN TOWN</h1>
    <p>
      365 days a year, Ricardo's Pizza Restaurant shines with unwavering
      commitment. We are dedicated to excellence, sourcing only the
      highest-quality ingredients to create an exceptional pizza experience. Our
      customers enthusiastically agree: we serve the city's most outstanding
      pizza. <br /><br /><br /><br />
    </p>
  </div>
  <div class="second">
    <h1 class="pride"><br />WE PRIDE OURSELVES ON QUALITY <br />AND TASTE</h1>
    <p class="values">
      Ricardo's Pizza Restaurant lives by three core values: Craftsmanship,
      Hospitality, and Sustainability. We're dedicated to crafting exceptional
      pizzas, offering outstanding service, and practicing sustainability. Your
      satisfaction is our top priority, and we eagerly anticipate serving you
      while upholding these values.
    </p>
    <v-btn
      variant="outlined"
      style="
        margin-left: 500px;
        margin-top: 20px;
        font-size: 20px;
        background-color: orangered;
        color: white;
        border-radius: 3px;
        border-color: rgb(0, 0, 0);
      "
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
        margin-left: 5px;
        margin-top: 20px;
      "
      >Contact Us</v-btn
    >
    <v-card
      title="RICARDOS"
      style="background-color:rgb(138, 138, 138); block-size: 220px;
   background-image opacity:0.5; background-image: url(https://ca.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1661341987&width=800) ;background-color: rgb(240, 240, 240); font-size: 50px; color: rgb(0, 0, 0); border-radius: 3px; border-color: rgb(0, 0, 0); margin-right:200px; margin-left: 1200px; margin-top: -300px;"
      text="WE ARE LOOKING FORWARD TO SERVING YOU."
      variant="outlined"
    >
      <v-card-actions>
        <v-btn
          variant="outlined"
          style="
            margin-top: 70px;
            background-color: rgb(138, 138, 138);
            color: white;
            border-radius: 3px;
            border-color: rgb(139, 139, 139);
          "
          >Locations</v-btn
        >
      </v-card-actions>
    </v-card>

    <br /><br /><br /><br /><br />
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
  color: rgb(72, 255, 0);
  background-color: 218, 218, 218;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000;
  font-size: 50px;
  font-family: "Monospace", Monaco;
}
p {
  margin-left: 500px;
  margin-right: 500px;
  margin-top: 20px;
  text-align: justify;
  color: rgb(0, 0, 0);
  font-size: 28px;
  font-family: "Monospace", Monaco;
}
.first {
  background-color: rgb(243, 242, 242);
  margin-top: -100px;
}
.values {
  margin-right: 950px;
  font-size: 18px;
}
.pride {
  margin-top: 0px;
  margin-left: 495px;
  margin-right: 500px;
  color: rgb(0, 0, 0);
  background-color: 218, 218, 218;
  font-size: 25px;
  font-family: "Monospace", Monaco;
  text-align: justify;
}

.second {
  background-color: rgb(252, 252, 252);
  background-size: 1000px;
}
</style>

<script setup>
//
//
</script>
