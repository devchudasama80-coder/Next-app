"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import UserForm from "@/components/UserForm";
import UserTable from "@/components/UserTable";
import Message from "@/components/Message";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", email: "", age: "" });
  const [mode, setMode] = useState("create");
  const [message, setMessage] = useState({ text: "", type: "info" });

  const showMessage = (text, type = "info") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "info" }), 3000);
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (data.success) setUsers(data.data);
    } catch (err) {
      showMessage("Failed to fetch users", "error");
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch("/api/users"); 
        const data = await res.json();
        if (data.success) setUsers(data.data);
      } catch (err) {
        setMessage({ text: "Failed to fetch users",  });
      }
    };
    loadUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  
  const resetForm = () => {
    setForm({ id: "", name: "", email: "", age: "" });
    setMode("create");
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      age: form.age ? parseInt(form.age) : null,
    };

    try {
      const url = mode === "create" ? "/api/users" : `/api/users/${form.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        showMessage(data.message || "Success!", "success");
        resetForm();
        fetchUsers();
      } else {
        showMessage(data.message || "Failed", "error");
      }
    } catch (err) {
      showMessage("Error: " + err.message, "error");
    }
  };

  const handleEdit = async (id) => {
    try {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      if (data.success) {
        setForm({
          id: data.data.id,
          name: data.data.name,
          email: data.data.email,
          age: data.data.age || "",
        });
        setMode("update");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      showMessage("Failed to load user", "error");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`/api/users/${id}`);
      const data = await res.json();
      if (data.success) {
        showMessage(data.message, "success");
        fetchUsers();
      } else {
        showMessage(data.message, "error");
      }
    } catch (err) {
      showMessage("Error: " + err.message, "error");
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
          >

            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          User Management
        </h1>

        <Message text={message.text} type={message.type} />

        <UserForm
          form={form}
          mode={mode}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={resetForm}
        />

        <UserTable
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

