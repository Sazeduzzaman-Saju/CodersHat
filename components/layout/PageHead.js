import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : "Coder's Hat || Leading Software Development Farm"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
