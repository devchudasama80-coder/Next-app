"use client";

export default function UserForm({ form, mode, onChange, onSubmit, onCancel }) {
  return (
    <div className="border border-gray-200 rounded-md p-5 mb-6 bg-white">
      <h2 className="text-base font-medium mb-4 text-gray-700">
        {mode === "create" ? "Add New User" : `Edit User #${form.id}`}
      </h2>

      <form onSubmit={onSubmit} className="space-y-3">
        <input type="text" name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
        />

        <div className="flex gap-2 pt-1">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-black transition"
          >
            {mode === "create" ? "Create" : "Update"}
          </button>

          {mode === "update" && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}