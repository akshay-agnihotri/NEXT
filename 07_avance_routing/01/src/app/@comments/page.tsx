

const Comments = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div className="border p-[10rem] w-[30rem] ">All Comments</div>;
};

export default Comments;
