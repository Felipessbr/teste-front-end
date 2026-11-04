
import type { Product } from "../types/Product";

// Endpoint utilizado para buscar os produtos.
const API_URL = "/api/produtos.json";

// Consulta a API e retorna a lista de produtos tipada.
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  // Verifica se a requisição foi realizada com sucesso.
  if (!response.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const data: { success: boolean; products: Product[] } =
    await response.json();

  // Verifica se a API confirmou o retorno dos produtos.
  if (!data.success) {
    throw new Error("A API não retornou os produtos.");
  }

  return data.products;
}
