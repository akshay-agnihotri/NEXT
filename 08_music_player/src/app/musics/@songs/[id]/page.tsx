import React from "react";

const Song = ({ params }: { params: { id: string } }) => {
  return <div>Song {params.id}</div>;
};

export default Song;
