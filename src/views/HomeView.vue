<template>
  <v-container style="padding: 0; margin: 0; max-width: 100vw; max-height: 100vh;">
    <v-row justify="center" no-gutters>
      <v-col cols="12">
        <transition name="fade" mode="out-in">

<!-- Slide 1 -->
<v-card v-if="slide === 1" key="slide-1" class="full-screen-card"
  style="background-color: rgb(251, 244, 238);">
  <v-card-title>
    <v-row align="center" justify="center" class="no-gutters">
      <!-- Левая колонка с текстом -->
      <v-col cols="12" sm="6" class="centered-text ml-16" style="margin-top: 200px;">
        <h1 class="text-size-large">Welcome to our course</h1>
      </v-col>

      <!-- Slide 1 Image -->
      <v-col cols="12" sm="5" class="centered-text">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-saying-hello-9550799-7990014.png"
          alt="Welcome Image" class="welcome-image" />
      </v-col>
    </v-row>
  </v-card-title>
  <v-card-actions>
    <v-btn icon @click="nextSlide" class="arrow-right">
      <v-icon class="large-arrow">mdi-chevron-right</v-icon>
    </v-btn>
  </v-card-actions>
</v-card>

<!-- Slide 2 (Modified) -->
<v-card v-if="slide === 2" key="slide-2" class="full-screen-card"
  style="background-color: rgb(251, 244, 238);">
  <v-card-title>
    <v-row align="center" justify="center" class="no-gutters">
      <!-- Left column with text -->
      <v-col cols="12" sm="6" class="centered-text" style="text-align: center;margin-top: 230px;">
        <h1 class="text-size-large" style="margin-bottom: 0;">About the Course</h1>
      </v-col>

      <!-- Image column -->
      <v-col cols="12" sm="5" class="centered-text" style="text-align: center; margin-top: 230px;">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-showing-mobile-phone-9550792-7990007.png"
          alt="Course Image" class="course-image" style="max-width: 450px;" />
      </v-col>
    </v-row>
  </v-card-title>
  <v-card-actions>
    <v-btn icon @click="prevSlide" class="arrow-left">
      <v-icon class="large-arrow">mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn icon @click="nextSlide" class="arrow-right">
      <v-icon class="large-arrow">mdi-chevron-right</v-icon>
    </v-btn>
  </v-card-actions>
</v-card>


          <!-- Slide 3 -->
          <v-card v-if="slide === 3" key="slide-3" class="full-screen-card"
            style="background-color: rgb(251, 244, 238);">
            <v-card-title class="centered-text">
              <h1 class="text-top">Select your course</h1>
            </v-card-title>
            <v-row justify="center" class="mt-4">
              
  <!-- Standard card with content inside -->
  <v-col cols="12" sm="4" class="mb-3">
    <v-card class="small-card" @click="goToPage('standard')" style="cursor: pointer; height: 400px; background: linear-gradient(to right, #00796b, #004d40);" >
      <v-card-title class="white--text text-h5 font-weight-bold">Standard</v-card-title>
      <v-card-text class="white--text">
        <p><strong>Perfect for beginners</strong> who are just getting started with essential tools.</p>
        <p><strong>Price:</strong> <span class="text-h6 font-weight-bold">$19.99/month</span></p>
        <p>Unlock basic features to help you stay productive with ease.</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li><strong>Basic support</strong> – Get answers to common questions quickly.</li>
          <li><strong>Core tools</strong> – Access essential features to get your work done.</li>
          <li><strong>Monthly reports</strong> – Track your basic performance and activity.</li>
        </ul>
        <p><em>Ideal for individuals or small teams looking to dive in without overcomplicating things.</em></p>
        <p class="font-weight-bold">Sign up today and start your journey!</p>
      </v-card-text>
    </v-card>
  </v-col>

  <!-- Premium card with content inside -->
  <v-col cols="12" sm="4" class="mb-3">
    <v-card class="small-card" @click="goToPage('premium')" style="cursor: pointer; height: 400px; background: linear-gradient(to right, #673ab7, #512da8);" >
      <v-card-title class="white--text text-h5 font-weight-bold">Premium</v-card-title>
      <v-card-text class="white--text">
        <p><strong>For those who want to do more</strong> with access to advanced features and priority support.</p>
        <p><strong>Price:</strong> <span class="text-h6 font-weight-bold">$49.99/month</span></p>
        <p>Unlock premium capabilities and exclusive support to take your experience to the next level.</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li><strong>Priority support</strong> – Get quick responses to all your inquiries.</li>
          <li><strong>Advanced toolset</strong> – Access more powerful features for maximum efficiency.</li>
          <li><strong>Weekly reports & analytics</strong> – Detailed insights to improve your performance.</li>
          <li><strong>Customization options</strong> – Tailor the platform to suit your specific needs.</li>
        </ul>
        <p><em>Great for freelancers, growing teams, and anyone looking to optimize their workflow.</em></p>
        <p class="font-weight-bold">Upgrade to Premium now and elevate your productivity!</p>
      </v-card-text>
    </v-card>
  </v-col>

  <!-- Gold card with content inside -->
  <v-col cols="12" sm="4" class="mb-3">
    <v-card class="small-card" @click="goToPage('gold')" style="cursor: pointer; height: 400px; background: linear-gradient(to right, #ff9800, #f57c00);" >
      <v-card-title class="white--text text-h5 font-weight-bold">Gold</v-card-title>
      <v-card-text class="white--text">
        <p><strong>For businesses and professionals</strong> who require premium support and advanced features.</p>
        <p><strong>Price:</strong> <span class="text-h6 font-weight-bold">$99.99/month</span></p>
        <p>Gain access to exclusive tools and priority services designed for high-level productivity and growth.</p>
        <p><strong>Features:</strong></p>
        <ul>
          <li><strong>Dedicated account manager</strong> – Get a personal expert to assist with your needs.</li>
          <li><strong>Advanced analytics & reporting</strong> – Deep insights to make data-driven decisions.</li>
          <li><strong>Business integrations</strong> – Seamlessly integrate with your existing tools and systems.</li>
          <li><strong>Unlimited team members</strong> – Add as many users as you need without limitations.</li>
        </ul>
        <p><em>Designed for companies and entrepreneurs who need cutting-edge tools and personalized support.</em></p>
        <p class="font-weight-bold">Join Gold now and gain a competitive edge!</p>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>


<v-card-actions>
  <v-btn icon @click="prevSlide" class="arrow-left">
    <v-icon class="large-arrow">mdi-chevron-left</v-icon>
  </v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: 'HomeView',
  data() {
    return {
      slide: 1, // Initial slide index
    };
  },
  methods: {
    nextSlide() {
      if (this.slide < 3) {
        this.slide++;
      } else {
        this.slide = 1;
      }
    },
    prevSlide() {
      if (this.slide > 1) {
        this.slide--;
      } else {
        this.slide = 3;
      }
    },
    goToPage(page) {
      this.$router.push({ name: page, query: { fromPage: true } });
    },
    goBack() {
      this.slide = this.$store.state.previousSlide || 3;
    },
  },
  created() {
    if (this.$route.query.fromPage) {
      this.goBack();
    }
  },
};
</script>

<style scoped>
.full-screen-card {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background-color: rgb(251, 244, 238);
}

.welcome-image {
  margin-top: 250px !important;
  max-width: 90%;
  height: auto;
  margin-right: 300px;
}

.course-image {
  margin-right: 500px;
}

.centered-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.large-arrow {
  font-size: 70px !important;
  /* Увеличиваем размер стрелки */
}

.arrow-left {
  position: absolute;
  font-size: 20rem;
  left: 30px;
  bottom: 450px;
  /* Move the left arrow higher (you can adjust this value) */
}

.arrow-right {
  font-size: 20rem;
  position: absolute;
  right: 70px;
  bottom: 450px;
  /* Move the right arrow higher (you can adjust this value) */
}


.small-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: 100px;
  margin-right: 300px;
  margin-bottom: 20px;
  margin-top: -800px;
  height: 600px !important;
  width: 450px;

}

.small-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.text-size-large {
  font-size: 4rem;
  /* Larger font size for the text */
  font-weight: bold;
  margin-left: 250px;
  margin-top: 10px;
}

.text-size {
  font-size: 4rem;
  /* Larger font size for the text */
  font-weight: bold;
  margin-left: 410px;
  margin-top: 10px
}

.text-size2 {
  font-size: 4rem;
  /* Larger font size for the text */
  font-weight: bold;
  margin-left: 450px;
  margin-top: 10px
}
.text-top{
  font-size: 4rem;
  margin-top: -800px !important;
}
</style>
