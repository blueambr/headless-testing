import { storyblokInit } from "@storyblok/react";
import { ClientContext } from "graphql-hooks";
import { useGraphQLClient } from "/lib/graphql-client";
import Hero from "/components/sections/Hero";
import "/index.css";

const components = {
  hero: Hero,
};

storyblokInit({
  accessToken: process.env.REACT_APP_PREVIEW_TOKEN,
  components,
});

const App = ({ Component, pageProps }) => {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState);

  return (
    <ClientContext.Provider value={graphQLClient}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  );
};

export default App;
