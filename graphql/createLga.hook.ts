import { gql, useMutation } from "@apollo/client";

export const graphql_CREATE_LGAS_METHODS = gql`
  mutation CreateLga($name: String, $stateId: Int!) {
    createLga(createLgaInput: { name: $name, stateId: $name }) {
      name
    }
  }
`;

export const graphql_createLga = (name: string, stateId: number) => {
  const [createLga, { data, loading, error }] = useMutation(
    graphql_CREATE_LGAS_METHODS,
    {
      variables: { name, stateId },
    }
  );

  return {
    createLga,
    data,
    loading,
    error,
  };
};

// export  graphql_CREATE_LGAS;
