"use client";

const MusicLayout = ({
  sidebar,
  children,
  songs,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  songs: React.ReactNode;
}) => {
  return (
    <div className="flex bg-[#111111f1] min-h-[100vh]">
      {sidebar}
      {children}
      <div className="flex-1 p-6">{songs}</div>
    </div>
  );
};

export default MusicLayout;
