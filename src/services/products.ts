import type { Product } from "../types/Product";

const API_URL = "/api/produtos.json";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data: { success: boolean; products: Product[] } =
    await response.json();

  if (!data.success) {
    throw new Error("A API não retornou os produtos.");
  }

  return data.products;
}
