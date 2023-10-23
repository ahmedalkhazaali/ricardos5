<template>
  <meta />
  <div class="container">
    <img
      src="https://pizzapanorama.ca/images/adobestock_266429012.jpg?crc=125304778"
    />
    <div class="first">
      <h1 class="title"><br /><br />RICARDOS PIZZA</h1>
      <h1 class="ttitle">IS THE BEST IN TOWN</h1>
      <p>
        365 days a year, Ricardo's Pizza Restaurant shines with unwavering
        commitment. We are dedicated to excellence, sourcing only the
        highest-quality ingredients to create an exceptional pizza experience.
        Our customers enthusiastically agree: we serve the city's most
        outstanding pizza.<br /><br />
        <br />
      </p>
    </div>
    <div class="second">
      <h1 class="pride"><br />WE PRIDE OURSELVES ON QUALITY <br />AND TASTE</h1>
      <p class="values">
        Ricardo's Pizza Restaurant lives by three core values: Craftsmanship,
        Hospitality, and Sustainability. We're dedicated to crafting exceptional
        pizzas, offering outstanding service, and practicing sustainability.
        Your satisfaction is our top priority, and we eagerly anticipate serving
        you while upholding these values.
      </p>
      <v-btn
        variant="outlined"
        style="
          margin-left: 26.041%;
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
        style="
          background-color: rgb(255, 255, 255);
          block-size: 450px;
          background-color: rgb(255, 255, 255);
          font-size: 50px;
          color: rgb(0, 0, 0);
          border-radius: 3px;
          border-color: rgb(0, 0, 0);
          margin-right: 380px;
          margin-left: 1070px;
          margin-top: -350px;
        "
        text="WE ARE LOOKING FORWARD TO SERVING YOU."
        variant="outlined"
      >
        <v-card-actions>
          <v-btn
            variant="outlined"
            style="
              margin-left: 9px;
              margin-top: -350px;
              background-color: rgb(255, 255, 255);
              color: rgb(0, 0, 0);
              border-radius: 3px;
              border-color: rgb(0, 0, 0);
              font-size: 17px;
            "
            >Locations</v-btn
          >
          <img
            class="menu"
            src="https://static.vecteezy.com/system/resources/previews/024/725/117/original/pizza-pizza-pizza-with-transparent-background-ai-generated-free-png.png"
          />
        </v-card-actions>
      </v-card>

      <br /><br /><br /><br /><br />
    </div>
  </div>
  <div class="logo"></div>
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
p {
  margin-left: 500px;
  margin-right: 500px;
  margin-top: 20px;
  text-align: justify;
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
  margin-right: 950px;
  font-size: 18px;
  margin-top: 2px;
  color: #000;
  text-shadow: -1px -1px 0 #ffffff, 0 -1px 0 #ffffff, 1px -1px 0 #ffffff,
    1px 0 0 #ffffff, 1px 1px 0 #ffffff, 0 1px 0 #ffffff, -1px 1px 0 #ffffff,
    -1px 0 0 #ffffff;
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
  background: conic-gradient(
      from 90deg at 1px 0.5px,
      #75474700 90deg,
      rgb(109, 109, 109) 0
    )
    0 0/100px 100px;
  background-color: rgb(255, 255, 255);
}
.menu {
  width: 100%;
  height: 100%;
  margin-top: -50px;
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
