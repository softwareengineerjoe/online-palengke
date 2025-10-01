import { Store } from "../constants/palengkes";

type StoreCardProps = {
  store: Store;
};

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-[1.02] p-6 border border-gray-100"
    >
      <div className="h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
        {/* Placeholder for image/icon */}
        <span className="text-gray-400">Store Image</span>
      </div>

      <h4 className="text-xl font-medium text-gray-700">{store.name}</h4>

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
          🕒 <strong>Hours:</strong>{" "}
          {store.openFrom ?? "?"} - {store.openUntil ?? "?"}
        </p>
      )}

      {store.owner && (
        <p className="mt-1 text-gray-600 text-sm">
          👤 <strong>Owner:</strong> {store.owner}
        </p>
      )}
    </div>
  );
}
