import api from "./api";

import {
  CreateFoodPayload,
  FoodResponse,
  SingleFoodResponse,
} from "@/types/food";


export const getAllFoods = async (
  query?: string
): Promise<FoodResponse> => {

  const response = await api.get(
    `/foods${query || ""}`
  );

  return response.data;
};



export const getFoodById = async (
  id: string
): Promise<SingleFoodResponse> => {

  const response = await api.get(
    `/foods/${id}`
  );

  return response.data;
};



export const createFood = async (
  payload: CreateFoodPayload,
  token: string
) => {

  const response = await api.post(
    "/foods",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};



export const updateFood = async (
  id: string,
  payload: CreateFoodPayload,
  token: string
) => {

  const response = await api.patch(
    `/foods/${id}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  return response.data;
};



export const deleteFood = async (
  id: string
) => {

  const token =
    localStorage.getItem("token");


  const response = await api.delete(
    `/foods/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );


  return response.data;

};