import Header from "@components/common/Header";
import Scaffold from "@components/common/Scaffold";
import Head from "next/head";

export default function Food() {
  return (
    <div>
      <Head>
        <title>Paul&apos;s Food</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S FOOD" />
        <p className="">
          This page is work in progress.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Scaffold>
    </div>
  );
}
