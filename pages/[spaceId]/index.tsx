import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps<{
  spaceId: string;
}> = async (context) => {
  return {
    props: {
      spaceId: context.params!.spaceId as string,
    },
  };
};

const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ spaceId }) => {
  const [name, setName] = useState("");
  return (
    <article>
      <h1>This page is {spaceId}.</h1>
      <h2>Whats your name.</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      {!!name && (
        <p>
          Go to {name} page. Click{" "}
          <Link href={`/${spaceId}/name/${name}`}>here</Link>
        </p>
      )}
    </article>
  );
};
export default Page;
