import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();
  console.log("HERE IS THE DATA", data);

  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>SIGN Out</button>
      ) : (
        <button onClick={() => signIn("google")}>SIGN IN</button>
      )}

      {data?.user?.name}
    </div>
  );
};

export default Home;
