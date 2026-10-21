"use client";

import { use } from "react";

function Page({ params }) {
  const { food } = use(params);

  return (
    <div>
      <h1>Ini detail makanan</h1>
      <p>Ini nama Makanan: {food}</p>
    </div>
  );
}

export default Page;
