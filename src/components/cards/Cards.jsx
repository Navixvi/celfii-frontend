import Card from "../card/Card";

const Cards = ({ products, favourites = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3 xl:grid-cols-5">
      {products.map((product) => (
        <Card key={product.id} product={product} favourites={favourites} />
      ))}
    </div>
  );
};

export default Cards;
