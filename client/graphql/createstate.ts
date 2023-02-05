import { gql, useQuery } from "@apollo/client";

const GET_ALL_STATES = gql`
  query {
    getAllStates {
      name
      longnitude
      latitude
      id
    }
  }
`;

const useAllStates = () => {
  return useQuery(GET_ALL_STATES);
};
export default useAllStates;
