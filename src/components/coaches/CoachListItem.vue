<template>
    <!-- <div class="card"> -->

        <li>
            <h3>{{ fname }} {{ lname }}</h3>
            <h4>${{ rate }}/hour</h4>
            <div>
                <Badge v-for="area in areas" :key="area" :type="area">{{ area }}</Badge>
            </div>
            <div class="actions">
                  <TheButton
                  :link="true"
                  :to="contactCoachLink"
                  :class ="'outline'"
                  >
                  Contact
                  </TheButton>
                  <TheButton
                    :link="true"
                    :to="coachDetailsLink" 
                    >
                    View Details
                  </TheButton>
                    <!-- <RouterLink :to="'coaches/'+id+'/contact'" class="">Contact</RouterLink> -->
                <!-- </button> -->
                <!-- <button class="default-btn">  -->
                    <!-- <RouterLink :to="'coaches/' + id"  class="default-btn">View Details</RouterLink> -->
                <!-- </button> -->
            </div>
        </li>
    <!-- </div>   -->
</template>

<script>
// import Badge from '../ui/Badge.vue';
// import TheButton from '../ui/TheButton.vue';
// import ContactCoach from './ContactCoach.vue';

    export default{
    // data(){
    //     return {
    //         coaches: []
    //     }
    // },
      props: ['id', 'fname', 'lname', 'rate', 'areas'],
      // components: { TheButton, Badge },
      computed: {
        coachDetailsLink(){
          return this.$route.path + '/' + this.id + '/details'
        },
        contactCoachLink(){
          // console.log(this.$route)
          return this.$route.path + '/' + this.id + '/contact'
        }
      }
  }
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}



</style>