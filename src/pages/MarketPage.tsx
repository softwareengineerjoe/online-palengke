import { useState } from "react";
import { useParams } from "react-router-dom";
import { palengkes } from "../constants/palengkes";
import Breadcrumbs from "../components/Breadcrumbs";

export default function MarketPage() {
  const { marketId } = useParams<{ marketId: string }>();
  if (!marketId) return <p>Invalid market</p>;

  const mId = parseInt(marketId, 10);
  const market = palengkes.find((m) => m.id === mId);

  if (!market) {
    return <p>Market not found</p>;
  }

  // Get all unique categories from stores (filter out undefined)
  const categories = Array.from(
    new Set(market.stores.map((store) => store.category).filter(Boolean))
  ) as string[];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter stores based on category
  const filteredStores =
    selectedCategory === "All"
      ? market.stores
      : market.stores.filter((store) => store.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumbs />
      <div className="bg-white rounded-lg shadow px-6 py-8 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{market.name}</h2>
        <p className="text-gray-600">{market.location}</p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Filter by category
      </h3>
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded cursor-pointer ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Stores in this market
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStores.length > 0 ? (
          filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-[1.02] p-6 border border-gray-100"
            >
              <div className="h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                {/* placeholder image or icon */}
                <span className="text-gray-400">Store Image</span>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                {store.name}
              </h4>
              {store.category && (
                <p className="mt-1 text-gray-500 text-sm">{store.category}</p>
              )}

              {store.contactNumber && (
                <p className="mt-2 text-gray-600 text-sm">
                  📞 <strong>Contact:</strong> {store.contactNumber}
                </p>
              )}

              <p className="mt-1 text-gray-600 text-sm">
                🚚 <strong>Delivery:</strong>{" "}
                {store.doesDelivery ? "Available" : "Not Available"}
              </p>

              {(store.openFrom || store.openUntil) && (
                <p className="mt-1 text-gray-600 text-sm">
                  🕒 <strong>Hours:</strong> {store.openFrom ?? "?"} -{" "}
                  {store.openUntil ?? "?"}
                </p>
              )}

              {store.owner && (
                <p className="mt-1 text-gray-600 text-sm">
                  👤 <strong>Owner:</strong> {store.owner}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No stores available in this category.</p>
        )}
      </div>
    </div>
  );
}
