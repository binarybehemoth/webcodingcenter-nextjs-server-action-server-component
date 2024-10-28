"use server";

import { revalidatePath } from "next/cache";

export async function action() {
  revalidatePath("/api?id=1");
}