import fs from "node:fs/promises";
import crypto from "node:crypto";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import path from "node:path";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  const baseSlug = slugify(meal.title, { lower: true });
  const randomSuffix = crypto.randomBytes(3).toString("hex"); // 6-char hex
  meal.slug = `${baseSlug}-${randomSuffix}`;

  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const imageBuffer = Buffer.from(await meal.image.arrayBuffer());

  // ✅ Ensure the directory exists
  const imageDir = path.join(process.cwd(), "uploads");
  await fs.mkdir(imageDir, { recursive: true });

  // ✅ Save image to uploads folder (not public)
  const imagePath = path.join(imageDir, fileName);
  await fs.writeFile(imagePath, imageBuffer); // reliable write

  // ✅ Store path to serve via API route
  meal.image = `/api/uploads/${fileName}`;

  const stmt = db.prepare(`
    INSERT INTO meals (
      slug,
      title,
      image,
      summary,
      instructions,
      creator,
      creator_email
    ) VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
  `);

  stmt.run(meal);
}
