"use server";

import { revalidatePath } from "next/cache";

export async function action() {
   console.log('revalidating');
  revalidatePath(`https://webcodingcenter-nextjs-server-action-server-component.vercel.app/api?id=0`);
}