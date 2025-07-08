import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 L 0,225 C 91.46428571428572,172.17857142857144 182.92857142857144,119.35714285714286 314,118 C 445.07142857142856,116.64285714285714 615.7500000000001,166.75 740,207 C 864.2499999999999,247.25 942.0714285714287,277.64285714285717 1051,279 C 1159.9285714285713,280.35714285714283 1299.9642857142858,252.67857142857142 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            stroke-width="0"
            fill="#ff6900"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 300)"
          ></path>
        </svg>
      </div>
      <body>{children}</body>
    </html>
  );
}
