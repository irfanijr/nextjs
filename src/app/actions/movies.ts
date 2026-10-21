'use server';
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from 'zod';



const Schema = z.object({
    title: z.string().min(3)
})


export async function updateMovie(id: number, formData: FormData) {
    await prisma.movie.update({
        where: {id},
        data: {
            title: String(formData.get("title")),
            rating: Number(formData.get("rating")),
            description: String(formData.get("description") ?? "") || null,
        },
    });

    revalidatePath("/movies");
    return { success: true, message: "Film berhasil diperbarui!"};
}
// const tunggu = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export async function deleteMovie(id: number){
    await prisma.movie.delete({ where: {id}});
    revalidatePath("/movies");
    // await tunggu(3000);


    
}

export async function SubmitForm(prev:any, formData: FormData) {
    const parsed = Schema.safeParse({
        title: formData.get('title')
    });
    if (!parsed.success) {
        return{errors: parsed.error.flatten().fieldErrors};
    }
  
    
}

// export default updateMovie;