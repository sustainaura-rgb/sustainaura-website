"use client";
import React, { useEffect, useState } from "react";
import '../../styles/adminDashboard.css';
export default function AdminDashboard({ token }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mern-backend-py4u.onrender.com";
    fetch(`${API_URL}/admin/contacts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setContacts(data.contacts);
      });
  }, [token]);

  const handleReply = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  return (
    <div className="admin-dashboard">
      <h2>Contact Queries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Message</th><th>Date</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td data-label="Name">{c.name}</td>
              <td data-label="Email">{c.email}</td>
              <td data-label="Message">{c.message}</td>
              <td data-label="Date">{new Date(c.createdAt).toLocaleString()}</td>
              <td data-label="Action">
                <button onClick={() => handleReply(c.email)}>Reply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// x06vi0lvy1f5