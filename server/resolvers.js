import {Job} from './db.js'
import { JourneyStates } from './db.js';

export const resolvers ={
   
    Query:{
        journeyStatesAll:async (parent,args)=>
        {
            const result = await JourneyStates.findAll();
            return result;
        },
        latestEntry:async(parent, args) =>{
            const result = await JourneyStates.findAll();
            const data = result[result.length-1]
            return data;
        },
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