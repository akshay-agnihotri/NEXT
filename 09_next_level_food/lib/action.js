"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const handleShareMeal = async (formData) => {
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

  await saveMeal(meal);

  redirect("/meals");
};
