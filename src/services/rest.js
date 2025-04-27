import { apiClient } from "./config";

/**
 * MENU ENDPOINTS
 */

// Fetch all menu items
export const apiGetAllMenuItems = async () => {
  const response = await apiClient.get("/menu");
  return response.data;
};

// Fetch a single menu item by ID
export const apiGetMenuItemById = async (id) => {
  const response = await apiClient.get(`/menu/${id}`);
  return response.data;
};

// Create a new menu item (Admin)
export const apiCreateMenuItem = async (payload) => {
  const response = await apiClient.post("/menu", payload);
  return response.data;
};

// Update an existing menu item (Admin)
export const apiUpdateMenuItem = async (id, payload) => {
  const response = await apiClient.put(`/menu/${id}`, payload);
  return response.data;
};

// Delete a menu item (Admin)
export const apiDeleteMenuItem = async (id) => {
  const response = await apiClient.delete(`/menu/${id}`);
  return response.data;
};


/**
 * CATEGORY ENDPOINTS
 */

// Get all categories (if your backend has this)
export const apiGetAllCategories = async () => {
  const response = await apiClient.get("/category");
  return response.data;
};

/**
 * AUTH (optional if you’ll implement login later)
 */

// Login user
export const apiLoginUser = async (payload) => {
  const response = await apiClient.post("/auth/login", payload);
  return response.data;
};

// Register user
export const apiRegisterUser = async (payload) => {
  const response = await apiClient("/auth/register",{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    data:"payload",
    withCredentials:true
  });
  return response.data;
};
