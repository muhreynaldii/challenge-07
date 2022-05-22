import Head from "next/head";
import Bars from "@components/Bars";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard &mdash; Binar Car Rental</title>
      </Head>
      <Bars>
        <h1 className="text-xl font-medium">Welcome Admin</h1>
      </Bars>
    </>
  );
}

export default Dashboard;
