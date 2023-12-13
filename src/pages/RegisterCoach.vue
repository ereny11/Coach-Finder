<template>
    <div class="card">
        <h1>Register as a Coach Now!</h1>
        <div>
          <form @submit.prevent="registerForm" >
            <div class="form-control">
              <label for="fname">First Name</label>
              <input type="text" id="fname" v-model.trim="fname"/>
            </div>
            <div class="form-control">
              <label for="lname">Last Name</label>
              <input type="text" id="lname" v-model.trim="lname"/>
            </div>
            <div class="form-control">
              <label for="description">Description</label>
              <textarea rows="5" id="description" v-model.trim="description"></textarea>
            </div>
            <div class="form-control">
              <label for="rate">Hourly Rate</label>
              <input type="number" id="rate" v-model.number="rate"/>
            </div>
            <div class="form-control">
              <label for="rate">Areas of Expertise</label>
              <div>
                <input type="checkbox" id="checkbox1" value="frontend" v-model="areas">
                <label for="checkbox1">Frontend Development</label>
              </div>
              <div>
                <input type="checkbox" id="checkbox2" value="backend" v-model="areas">
                <label for="checkbox2">Backend Development</label>
              </div>
              <div>
                <input type="checkbox" id="checkbox3" value="career" v-model="areas">
                <label for="checkbox3">Career Advisory</label>
              </div>
              
            </div>
            <p class="errors">Please Fill All input fields</p>
            <div class="actions">
              <TheButton :link="false">Register</TheButton>
            </div>
          </form>
      </div>
    </div>
</template>

<script>
 export default{
  emits: ['save-data'],
    data(){
        return{
            fname: '',
            lname:'',
            description: '',
            rate: null,
            areas: [],
           
            // formIsValid: true
        }
    },
    methods: {
      registerForm(){
        // this.formIsValid = true
        // if (this.fname === '' || this.lname === ''){
        //   this.formIsValid = false
        //   return
        // }
        const formData = {
          fname: this.fname,
          lname: this.lname,
          description: this.description,
          rate: this.rate,
          areas: this.areas,
          id: this.$store.getters['coaches/coaches'].length + 1
        }
        this.addCoach(formData)
      },
      addCoach(data){
        this.$store.dispatch('coaches/registerCoach', data)
        this.$router.push('/coaches')
      }
    }
 }
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>