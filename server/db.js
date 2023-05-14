import { Database } from 'fakebase';

const db = new Database('./data');
export const JourneyStates = db.table('journeyStates')
 
export const Job = db.table('jobs');
