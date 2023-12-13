<template>
  <div class="card">
    <div class="controls">
      <TheButton :link="true" :to="'register'">Register as a Coach</TheButton>
      <!-- <button>Register as a Coach</button> -->
    </div>
    <ul v-if="hasCoaches">
      <CoachListItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :fname="coach.fname"
        :lname="coach.lname"
        :rate="coach.rate"
        :areas="coach.areas"
      >
      </CoachListItem>
    </ul>

    <div v-else>
      <p>No Coaches found...</p>
    </div>
  </div>
</template>

<script>
import TheButton from "../ui/TheButton.vue";
import CoachListItem from "./CoachListItem.vue";
export default {
  data() {
    return {
      coaches: [],
    };
  },
  components: {
    CoachListItem,
    TheButton
  },
  // mounted() {
  //   fetch("http://localhost:3000/coaches")
  //     .then((resp) => resp.json())
  //     .then((data) => (this.coaches = data))
  //     .catch((err) => console.log(err.message));
  // },
  computed: {
    filteredCoaches(){
      return this.$store.getters['coaches/coaches']
      
      // return this.$store.getters.coaches
    },
    hasCoaches(){
      return this.$store.getters['coaches/hasCoaches']
      // return this.$store.getters.hasCoaches
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}



h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}


.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
