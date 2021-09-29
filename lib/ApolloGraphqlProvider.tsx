import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import AdminLayout from "../src/components/admin/AdminLayout";

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: createHttpLink({
      uri: process.env.NEXT_PUBLIC_END_POINT,
      headers: {
        authorization: `Bearer ${authToken}`,
      },
      fetch,
    }),
    cache: new InMemoryCache(),
  });
};

export const ApolloGraphqlProvider = ({ children }) => {
  const [client, setClient] = useState<any | null>(null);
  const {
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    isAuthenticated,
    loginWithRedirect,
    isLoading,
  } = useAuth0();

  const fetchAuthToken = async () => {
    const authToken = await getAccessTokenSilently({
      audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
    });

    const newApolloClient = createApolloClient(authToken);
    setClient(newApolloClient);
  };

  useEffect(() => {
    if (isAuthenticated) fetchAuthToken();
  }, [isAuthenticated]);

  if (!client || !isAuthenticated) {
    return (
      <AdminLayout>
        <h1 className="font-bold text-center text-2xl text-gray-500">Login</h1>
        <div className="text-center">
          {isLoading ? (
            <div className="mt-10 text-center text-2xl text-gray-500">
              Loading...
            </div>
          ) : (
            <button
              className="mt-10 px-3 py-2 block w-full bg-fandango text-center text-white font-bold rounded-full"
              onClick={() => loginWithRedirect()}
            >
              ログイン
            </button>
          )}
        </div>
      </AdminLayout>
    );
  }
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
