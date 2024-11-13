import Card from "../card/Card";

const Cards = ({ products, favourites = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} product={product} favourites={favourites} />
      ))}
    </div>
  );
};

export default Cards;
