"use client";
import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

export default function AdminPage() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem("adminToken"));
    }
  }, []);

  return (
    <div>
      {token ? (
        <AdminDashboard token={token} />
      ) : (
        <AdminLogin setToken={setToken} />
      )}
    </div>
  );
}
