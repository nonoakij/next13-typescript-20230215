import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const spaceId = router.query.spaceId as string;
  const name = router.query.name as string;
  return (
    <article>
      <h1>This page is {spaceId}.</h1>
      <h2>Hello {name} 👋</h2>
    </article>
  );
};
export default Page;
