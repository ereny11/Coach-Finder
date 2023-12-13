<template>
        <div v-if="coachItem">
            <p>{{ coachItem.description }}</p>
            <div>
                <Badge v-for="area in coachItem.areas" :key="area" :type="area">{{ area }}</Badge>
            </div>
            
            <div>
                <h4>Interested? Reach out?</h4>
                <TheButton 
                :link="true"
                :to="getContactLink"
                >Contact</TheButton>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
        
</template>

<script>
export default{
    props: ['id'],
    data() {
        return {
            coachItem: null,
        };
    },
    computed:{
        getContactLink(){
            return '/coaches' + '/' + this.$route.params.id + '/contact'
        },
    },
    created(){
        this.coachItem = this.$store.getters['coaches/coaches'].find((coach) => coach.id === parseInt(this.$route.params.id))
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

