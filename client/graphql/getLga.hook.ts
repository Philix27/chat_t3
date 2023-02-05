import { gql, useLazyQuery, useQuery } from "@apollo/client";

const GET_LGAS = gql`
  query GetLgasForState($stateId: ID!) {
    getAllStates(stateId: $stateId) {
      name
      capital
    }
  }
`;

const graphql_getLga = (stateId: number) => {
  return useQuery(GET_LGAS, {
    variables: { stateId },
  });
};

export const refetchData = (stateId: number) => {
  const [refetch, { loading, error, data, called }] = useLazyQuery(GET_LGAS, {
    variables: { stateId },
  });
  return {
    refetch,
    loading,
    error,
    data,
    called,
  };
};

export default graphql_getLga;
