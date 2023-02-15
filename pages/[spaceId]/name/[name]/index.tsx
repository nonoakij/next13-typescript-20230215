import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const spaceId = router.query.spaceId as string;
  const name = router.query.name as string;
  return (
    <article>
      <h1>This is Static page.</h1>
      <h2>Hello {name} 👋</h2>
      <p>spaceId: {spaceId}.</p>
    </article>
  );
};
export default Page;
