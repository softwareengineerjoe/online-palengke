import { useParams } from "react-router-dom";
import { Market, palengkes } from "../constants/palengkes";
import Breadcrumbs from "../components/Breadcrumbs";
import StoreCard from "../components/StoreCard";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();

  const decodedCategory = decodeURIComponent(categoryName || "").toLowerCase();

  const matchingMarkets = palengkes
    .map((market) => {
      const matchingStores = market.stores.filter(
        (store) =>
          store.category &&
          store.category.trim().toLowerCase() === decodedCategory
      );
      return matchingStores.length > 0
        ? { ...market, stores: matchingStores }
        : null;
    })
    .filter((market): market is Market => market !== null);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 capitalize">
        {decodedCategory}
      </h1>

      {matchingMarkets.length === 0 ? (
        <p className="text-gray-500">No stores found for this category.</p>
      ) : (
        matchingMarkets.map((market) => (
          <section key={market.id} className="mb-12">
            <h2 className="text-2xl font-medium text-gray-700 mb-6">
              {market.name} ({market.location})
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {market.stores.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          </section>
        ))
      )}
    </main>
  );
}
