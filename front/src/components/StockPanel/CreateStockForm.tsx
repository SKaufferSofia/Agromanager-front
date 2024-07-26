// CreateStockForm.tsx
import React from "react";

const CreateStockForm: React.FC = () => {
  //axios post supply
  return (
    <div className="mb-8 bgColor">
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800">Add New Stock</h2>
        <p className="text-gray-600">
          Fill out the form to add a new stock item.
        </p>
      </div>
      <form className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Provider"
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="Stock"
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price"
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Category"
          className="px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Measurement"
          className="px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Add Stock
        </button>
      </form>
    </div>
  );
};

export default CreateStockForm;
