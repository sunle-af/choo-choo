import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GREETINGS_QUERY = gql`
 query GreetingsQuery {
       greetings
    }
`;