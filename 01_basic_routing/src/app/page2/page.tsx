'use client';
import { useRouter } from "next/navigation";

const Page2 = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/page1");
        }}
      >
        navigate to page1
      </button>
    </div>
  );
};

export default Page2;
