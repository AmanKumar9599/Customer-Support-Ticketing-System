import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function AgentDashboard({tickets}) {
  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };
  return (
    <div>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, idx) => (
            <tr key={idx}>
              <a href={`/ticket/${ticket._id}`}>
                <td>{truncateText(ticket.title, 25)}</td>
              </a>
              <td>{truncateText(ticket.description, 30)}</td>
              <td>{ticket.customer.name}</td>
              <td>{ticket.customer.email}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.category}</td>
              <td>{new Date(ticket.createdAt).toLocaleString()}</td>
              <td>
                {ticket.updatedAt
                  ? new Date(ticket.updatedAt).toLocaleString()
                  : "Pending"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
