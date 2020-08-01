import React from "react";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";

export const ME = gql`
  query ME {
    me
  }
`;

const Navbar = () => {
  const { data } = useQuery(ME);

  return (
    <div>
      <Link href="/">
        <a style={{ marginRight: 15 }}>Home</a>
      </Link>
      <Link href="/client">
        <a>Client</a>
      </Link>

      <div>{JSON.stringify(data, undefined, 4)}</div>
    </div>
  );
};

export default Navbar;
