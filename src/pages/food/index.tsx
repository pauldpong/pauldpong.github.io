import Header from "components/common/Header";
import Head from "next/head";

export default function Food() {
  return (
    <div>
      <Head>
        <title>Paul&apos;s Food</title>
      </Head>
      <div className="h-screen w-full md:w-3/4 xl:w-1/2 mx-auto p-5 md:p-15 xl:p-20">
        <div className="grid grid-cols-1 gap-1">
          <Header headerTitle="PAUL'S FOOD" />
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
      </div>
    </div>
  );
}
