export interface Food {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  createdBy: string;
  createdAt?: string;
}

export interface FoodResponse {

  success: boolean;

  data: {

    foods: Food[];

    pagination: {

      page: number;

      limit: number;

      total: number;

      totalPages: number;

    };

  };

}

export interface SingleFoodResponse {
  success: boolean;
  data: Food;
}
export interface CreateFoodPayload {
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}

export interface CreateFoodPayload {
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}