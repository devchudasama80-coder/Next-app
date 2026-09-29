"use client";

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
      <div className="px-5 py-3 border-b border-gray-200">
        <h2 className="text-base font-medium text-gray-700">
          All Users ({users.length})
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left font-medium">ID</th>
              <th className="px-4 py-2 text-left font-medium">Name</th>
              <th className="px-4 py-2 text-left font-medium">Email</th>
              <th className="px-4 py-2 text-left font-medium">Age</th>
              <th className="px-4 py-2 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-400">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">{u.id}</td>
                  <td className="px-4 py-2 text-gray-900">{u.name}</td>
                  <td className="px-4 py-2 text-gray-700">{u.email}</td>
                  <td className="px-4 py-2 text-gray-700">{u.age || "-"}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => onEdit(u.id)}
                    className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(u.id)}
                      className="px-3 py-1 text-xs border border-red-300 text-red-600 rounded hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}