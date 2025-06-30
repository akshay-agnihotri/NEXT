
const User = async () => {
  const sattana = async (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved !");
      }, 2000);
    });
  };
  const data: string = await sattana();
  return <div>hello {data}</div>;
};

export default User;
