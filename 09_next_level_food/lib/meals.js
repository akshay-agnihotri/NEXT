import fs from "node:fs";
import crypto from "node:crypto";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

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
  const randomSuffix = crypto.randomBytes(3).toString("hex"); // 6-char hex string
  meal.slug = `${baseSlug}-${randomSuffix}`;

  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`./public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving Image Failed!");
    }
  });

  meal.image = `/images/${fileName}`;

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
