import {  GetServerSidePropsContext } from "next";


export const getServerSideProps  = async (context: GetServerSidePropsContext) => {
  context.res.setHeader("Set-Cookie", "a=b; HttpOnly; Secure; SameSite=Strict");
  throw new Error("This is a server side error");
};

const SSR = () => {
  return (
    <p>Never reached</p>
  );
};

export default SSR;
