"use client";

import { useEffect, useState } from "react";
import {
  getAllUsers,
  updateUserRole,
} from "@/services/user.service";
import { toast } from "react-toastify";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  photo: string;
  createdAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Change Role
  const handleRoleChange = async (
    id: string,
    currentRole: "admin" | "user"
  ) => {
    try {
      const newRole =
        currentRole === "admin"
          ? "user"
          : "admin";

      await updateUserRole(id, newRole);

      toast.success("Role Updated Successfully");

      fetchUsers();
    } catch (error) {
      console.log(error);
      toast.error("Role Update Failed");
    }
  };

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold text-white mb-6">
        👥 Manage Users
      </h1>

      <div className="overflow-x-auto rounded-2xl border border-slate-800">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Role
              </th>

              <th className="p-4 text-left">
                Created
              </th>

              <th className="p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user._id}
                className="border-b border-slate-800 text-slate-300 hover:bg-slate-900"
              >

                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">

                  <span
                    className={
                      user.role === "admin"
                        ? "bg-red-600 text-white px-3 py-1 rounded-full text-sm"
                        : "bg-green-600 text-white px-3 py-1 rounded-full text-sm"
                    }
                  >
                    {user.role}
                  </span>

                </td>

                <td className="p-4">
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() =>
                      handleRoleChange(
                        user._id,
                        user.role
                      )
                    }
                    className={
                      user.role === "admin"
                        ? "bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
                        : "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    }
                  >
                    {user.role === "admin"
                      ? "Make User"
                      : "Make Admin"}
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}