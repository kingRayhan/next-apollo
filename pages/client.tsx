import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { ME } from "../components/Navbar";

const ALL_ARTICLES = gql`
  query ALL_ARTICLES {
    articles {
      _id
      title
    }
  }
`;
const LOGIN = gql`
  mutation LOGIN {
    login
  }
`;

const LOGOUT = gql`
  mutation LOGOUT {
    logout
  }
`;
const Client = () => {
  const { data, loading } = useQuery(ALL_ARTICLES);
  const [login] = useMutation(LOGIN, { refetchQueries: [{ query: ME }] });
  const [logout] = useMutation(LOGOUT, { refetchQueries: [{ query: ME }] });

  return (
    <div>
      <h1>Client</h1>

      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>

      <div>
        {data?.articles.map((article) => (
          <article key={article._id}>
            <h2>{article.title}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Client;
