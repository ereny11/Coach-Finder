import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
        return{
            coaches: [
                { 
                    fname: "Carl", 
                    lname: "Ellison",
                    id: 1,
                    rate: 35,
                    areas: ["Front End", "Back End", "Career"],
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eius architecto deserunt harum fugit"
                },
                { 
                    fname: "Jane", 
                    lname: "Turner",
                    id: 2,
                    rate: 25,
                    areas: ["Front End", "Career"],
                    description: "Lorem ipsum dolor sit"
                },
                { 
                    fname: "Colin", 
                    lname: "Coleman",
                    id: 3,
                    rate: 30,
                    areas: ["Front End", "Career"],
                    description: "Amet consectetur adipisicing elit"
                },
                { 
                    fname: "Carolyn", 
                    lname: "Paterson",
                    id: 4,
                    rate: 20,
                    areas: ["Back End", "Career"],
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                },
                { 
                    fname: "Jack", 
                    lname: "Carr",
                    id: 5,
                    rate: 30,
                    areas: ["Back End", "Career"],
                    description: "Asperiores eius architecto deserunt"
                },
                { 
                    fname: "Victoria", 
                    lname: "Greene",
                    id: 6,
                    rate: 35,
                    areas: ["Front End", "Back End", "Career"],
                    description: "Asperiores eius architecto deserunt harum fugit adipisci dolore"
                },
                { 
                    fname: "Richard", 
                    lname: "Hemming",
                    id: 7,
                    rate: 25,
                    areas: ["Front End", "Career"],
                    description: "Laboriosam, rerum omnis deleniti id nam sed dicta sequi error natus ipsum"
                }
            ]
        }
    },
    mutations,
    actions,
    getters,
}