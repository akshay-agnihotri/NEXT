
import "./globals.css";

export default function RootLayout({
  children,
  members,
  comments,
}: {
  children: React.ReactNode;
  members: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="flex">
          {members}
          {comments}
        </div>
      </body>
    </html>
  );
}
