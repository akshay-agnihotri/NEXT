
const Page = async ({ params }: { params: { user: string } }) => {
  return <div>Hello {params.user}</div>;
};

export default Page;
