import { EmptyState } from "@/components/EmptyState";
import prisma from "@/lib/prisma";

export default async function Page() {
    console.log("tes");
  const user = await prisma.user.findMany();
 

  if (user.length === 0) {
     return (
      <EmptyState
       title="Belum Ada Film"
         desc="Mulai dengan menambahkan Film baru."
       actionLabel="+ Tambah Data"
       
      />
    );
   }
  return <></>;
}
