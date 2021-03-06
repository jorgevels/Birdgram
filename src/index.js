import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { App } from "./App";
import Context from "./Context";

// inicializamos el cliente - la url de nuestra API
const client = new ApolloClient({
  /* uri: "https://birdgram-server.jorgevelasquez006.now.sh/graphql", */
  uri: "https://bidgram-backend.vercel.app/graphql",

  request: (operation) => {
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  onError: (error) => {
    // Si el token expira
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
    }
  },
});
const container = document.getElementById("app");

ReactDOM.render(
  <Context.Provider>
    {/* //Embolvemos nustra aplicacion con el apollo Provider */}

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,

  container
);
