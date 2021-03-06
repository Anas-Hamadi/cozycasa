import Login from "../components/auth/Login";
import Header from "../components/Header";
import { getSession } from "next-auth/react";

export default function loginPage() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanant: false,
      },
    };
  }
  return {
    props: {},
  };
}
