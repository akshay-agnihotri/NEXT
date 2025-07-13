import path from "path";
import fs from "node:fs/promises";

export async function GET(req, { params }) {
  const filePath = path.join(process.cwd(), "uploads", params.imageName);

  try {
    const file = await fs.readFile(filePath);
    const extension = path.extname(params.imageName).slice(1);
    const contentType = extension === "png" ? "image/png" : "image/jpeg";

    return new Response(file, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (err) {
    return new Response("Image not found", { status: 404 });
  }
}
