"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isValid = (text) => {
  return !text || text.trim() === "" ? false : true;
};

export const handleShareMeal = async (prevState, formData) => {
  // id INTEGER PRIMARY KEY AUTOINCREMENT, => not present in formData
  // slug TEXT NOT NULL UNIQUE, => not present in formData

  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    !isValid(meal.creator) ||
    !isValid(meal.creator_email) ||
    !isValid(meal.title) ||
    !isValid(meal.summary) ||
    !isValid(meal.instructions) ||
    meal.image.size === 0 
  ) {
    return "All fields are required!";
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
};
