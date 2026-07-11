import api from "./api";

export const getAllUsers = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateUserRole = async (
  id: string,
  role: "admin" | "user"
) => {
  const token = localStorage.getItem("token");

  const response = await api.patch(
    `/users/${id}/role`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};