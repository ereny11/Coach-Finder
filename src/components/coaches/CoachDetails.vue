<template>
    <div class="card">
        <h2>Coach Details</h2>
        <div v-if="coachItem">
            
            <h3>{{ coachItem.fname }} {{ coachItem.lname }}</h3>
            <h4>${{ coachItem.rate }}/hour</h4>
            
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        <RouterView >
            
        </RouterView>
        <!-- <CoachItemDetails />
            <ContactCoach/> -->
        
    </div>
    
</template>

<script>
import CoachItemDetails from '../../views/CoachItemDetails.vue'
import ContactCoach from '../../views/ContactCoach.vue'
import { RouterView } from 'vue-router'

export default{
    props: ['id'],
    // props: {
    //     id:{
    //         type: Number,
    //         default: null,
    //         required: true,
    //     }
    // },
    // components:{
    //     CoachItemDetails,
    //     ContactCoach
    // },
    data() {
        return {
            coachItem: null,
        };
    },
    // mounted() {
    //     fetch('http://localhost:3000/coaches/' + this.id)
    //         .then(resp => resp.json())
    //         .then(data => this.coach = data)
    //         .catch(err => console.log(err.message));
    // },
    // components: { TheButton },
    
    // computed:{
    //     getContactLink(){
    //         return this.$route.path + '/' + this.id + '/contact'
    //     },
    // },
    // methods: {
    //     linkContactDetails(){
    //         return this.$route.path + '/' + parseInt(this.id) + '/contact'
    //         // this.$router.push({name: 'ContactCoach'})
    //     }
    // },
    created(){
        this.coachItem = this.$store.getters['coaches/coaches'].find((coach) => coach.id === parseInt(this.id))

    },
}
</script>

<style>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>

