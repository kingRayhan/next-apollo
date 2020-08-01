import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
