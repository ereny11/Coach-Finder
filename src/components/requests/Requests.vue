<template>
    <div class="card">
        <h1>Requests Received</h1>
        <ul v-if="hasRequests">
            <RequestItem v-for="request in showRequests" 
                :key="request.id"
                :email = "request.userEmail"
                :message = "request.message"
            />
        </ul>
        <div v-else>
            <h3>You Haven't Received any Requests Yet!</h3>
        </div>
    </div>
</template>

<script>
    import RequestItem from './RequestItem.vue'
    export default{
        components:{
            RequestItem
        },
        computed: {
            showRequests(){
                return this.$store.getters['requests/allRequests']
            },
            hasRequests(){
                return this.$store.getters['requests/hasRequets']
            }
        } 
    }
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>