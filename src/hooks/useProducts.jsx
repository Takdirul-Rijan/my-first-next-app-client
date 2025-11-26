import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async (category = "All") => {
  const response = await axios.get(`/api/allProducts`, {
    params: { category },
  });
  return response.data;
};

export const useProducts = (category = "All") => {
  return useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
    enabled: !!category,
  });
};
