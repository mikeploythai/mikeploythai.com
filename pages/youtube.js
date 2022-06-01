import Head from "next/head";

export default function YouTube() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Redirecting...</title>
        <meta
          httpEquiv="refresh"
          content="0; url=https://youtube.com/channel/UCCM4FmUaCVo2928Yvg-G8rA"
        />
      </Head>

      <h1>Redirecting...</h1>
    </div>
  );
}
