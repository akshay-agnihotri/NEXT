

const UserInfo = ({ params }: { params: { userId: string } }) => {
  return <div>Hello user our userId {params.userId}</div>;
};

export default UserInfo;
