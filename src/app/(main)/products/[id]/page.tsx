async function ProductId({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Ini Product Detail</h1>
      <p>ID Product: {id} </p>
    </div>
  );
}

export default ProductId;
