import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Head from "next/head";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Paul&apos;s Travels</title>
      </Head>
      <Scaffold>
        <div className="grid grid-cols-1 gap-1">
          <Header headerTitle="PAUL'S TRAVELS" />
          <div className="font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </Scaffold>
    </div>
  );
}
