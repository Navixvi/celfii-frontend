import Cards from "../../../components/cards/Cards";

const MostPopular = ({ products, favourites }) => (
  <section className="p-6 sm:p-12 md:p-20 bg-gray-50">
  <div className="container m-auto">
    <h2 className="mx-4 mb-8 text-xl font-semibold sm:text-2xl md:text-3xl">
      Los más populares
    </h2>
    <Cards products={products} favourites={favourites} />
  </div>
</section>

);

export default MostPopular;
