<template>
  <div class="contact-container">
    <h1 class="title">Contact Us</h1>


    <form @submit.prevent="submitForm" class="contact-form">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" class="input-field" required>


      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" class="input-field" required>


      <label for="message">Message:</label>
      <textarea v-model="message" id="message" rows="4" class="input-field" required></textarea>


      <button type="submit" class="submit-button">Submit</button>
    </form>


    <div v-if="showThankYou" class="thank-you-message">
      <p>Thank you for your feedback!</p>
    </div>


    <div class="navigation-buttons">
      <router-link to="/about">About</router-link>
      <router-link to="/menu">Menu</router-link>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';


const name = ref('');
const email = ref('');
const message = ref('');
const showThankYou = ref(false);


const submitForm = async () => {
  try {
    // Simulate form submission
    // Add your actual form submission logic here


    // Display the thank you message
    showThankYou.value = true;
  } catch (error) {
    console.error('Error during form submission:', error);
  }
};
</script>


<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}


.title {
  font-size: 40px;
  margin-bottom: 20px;
}


.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 400px;
  margin-bottom: 20px;
}


.input-field {
  width: 100%;
  margin: 5px 0;
  padding: 10px;
}


.submit-button {
  background-color: orangered;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.submit-button:hover {
  background-color: darkred;
}


.thank-you-message {
  margin-top: 20px;
  font-size: 20px;
  color: green;
}


.navigation-buttons {
  display: flex;
  justify-content: space-around;
  width: 50%;
  max-width: 400px;
}


.navigation-buttons a {
  text-decoration: none;
  color: orangered;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease;
}


.navigation-buttons a:hover {
  color: darkorange;
}
</style>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const message = ref('');
const showThankYou = ref(false);

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/submit-form', {
      name: name.value,
      email: email.value,
      message: message.value
    });

    console.log(response.data);  // Log the response from the server

    // Display the thank you message
    showThankYou.value = true;
  } catch (error) {
    console.error('Error during form submission:', error);
  }
};
</script>