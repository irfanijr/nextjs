'use server';
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';




const Schema = z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    duration: z.coerce.number().min(1),
    rating: z.coerce.number().min(1, "Rating minimal 1").max(10, "Rating maksimal adalah 10"),
    releaseYear: z.coerce.number(),
     posterUrl: z.string().regex(/^https?:\/\/.+$/, {
        message: "Tautan harus berupa URL yang valid (http:// atau https://)"
})  })

export async function SubmitForm(prev:any, formData: FormData) {
    const parsed = Schema.safeParse({
        title: formData.get('title'),
       description: formData.get('description'),
        duration: formData.get('duration'),
        rating: formData.get('rating'),
        releaseYear: formData.get('releaseYear'),
        posterUrl: formData.get('posterUrl') as string || ""
    });
    
    if (!parsed.success) {
        // throw new Error("Error");
        return{errors: parsed.error.flatten().fieldErrors,
      fields: {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            duration: formData.get('duration') as string,
            rating: formData.get('rating') as string,
            releaseYear: formData.get('releaseYear') as string,
            posterUrl: formData.get('posterUrl') as string,
        }
    };
}
   try {
        const { title, description, duration, rating, releaseYear, posterUrl } = parsed.data;

        await prisma.movie.create({
          data: {
            title,
            description,
            duration,   
            rating,     
            releaseYear, 
            posterUrl 
          },
        });
        
    } catch (error) {
        console.error("Gagal membuat data movie:", error);
        return {
            errors: { server: ["Terjadi kesalahan server saat menyimpan data."] },
            success: false
        };
    }

    revalidatePath("/movies");
    redirect("/movies");
}
   


export async function updateMovie(id: number, formData: FormData) {
    await prisma.movie.update({
        where: {id},
        data: {
            title: String(formData.get("title")),
            rating: Number(formData.get("rating")),
            duration: Number(formData.get("duration")),
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


// export default updateMovie;