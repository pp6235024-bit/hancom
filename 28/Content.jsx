// Content.jsx
function Content() {
  const products = [
    { id: 1, name: "노트북", price: "1,200,000원" },
    { id: 2, name: "마우스", price: "35,000원" },
    { id: 3, name: "키보드", price: "89,000원" },
  ];

  return (
    <main>
      <h2>상품 목록</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>구매하기</button>
          <hr />
        </div>
      ))}
    </main>
  );
}

export default Content;