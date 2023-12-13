export default{
    registerCoach(context, data){
        const coachData = {
            
            fname: data.fname,
            lname: data.lname,
            id: data.id,
            rate: data.rate,
            areas: data.areas,
            description: data.description
           

        }
        context.commit('registerCoach', coachData)
    }
}