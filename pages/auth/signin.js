import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

//Browser...
const signIn = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

// Server...
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default signIn;
