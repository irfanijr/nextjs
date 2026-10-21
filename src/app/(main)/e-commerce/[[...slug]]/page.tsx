async function Page({ params }) {
  const { slug } = await params;

  if (!slug) {
    return (
      <div>
        <h1>Ini halaman utama</h1>
      </div>
    );
  }

  // const gender = slug[0];
  // const category = slug[1];
  // const subCategory = slug[2];

  const [gender, category, subCategory] = slug;

  return (
    <div>
      <h1>Gender:{gender}</h1>
      <p>category:{category}</p>
      <p>Sub-Category:{subCategory}</p>
    </div>
  );
}

export default Page;
