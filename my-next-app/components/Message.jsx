"use client";

export default function Message({ text, type = "info" }) {
  if (!text) return null;

  const styles = {
    info: "bg-gray-100 text-gray-700 border-gray-300",
    success: "bg-gray-100 text-gray-800 border-gray-400",
    error: "bg-red-50 text-red-700 border-red-300",
  };

  return (
    <div
      className={`mb-4 px-4 py-2 border rounded text-sm ${styles[type]}`}
    >
      {text}
    </div>
  );
}