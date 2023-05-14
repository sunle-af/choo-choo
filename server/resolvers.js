import {Job} from './db.js'
import { JourneyStates } from './db.js';

export const resolvers ={
     
    Query:{
        userData:(parent, args)=>{ 
        const {id} =args ;
        return Job.findById(id) 
    }
    },
    Query:{
        journeyStatesData: async (parent,args)=> {
            const{id}= args;
             const result =  await JourneyStates.findById(id);
           console.log(result)
            return result
            
        }
    },
    Mutation:{
        createJourneyStates: (_root, { input }) => {
            console.log(input)
          JourneyStates.create(input);
          return {
            success: true,
          };
        },
        createUser:(_root, {input} ) =>{
            Job.create(input) 
            console.log(input)
            return {
                success:true,
                input:input
            }
        }
    }
}