import axios from "axios";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "All";

    const BACKEND_URL = "https://my-first-next-app-server.vercel.app/";

    const response = await axios.get(`${BACKEND_URL}/allProducts`, {
      params: { category },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (err) {
    console.error("API ERROR:", err.message);
    return new Response(JSON.stringify({ error: "Failed to load products" }), {
      status: 500,
    });
  }
}
