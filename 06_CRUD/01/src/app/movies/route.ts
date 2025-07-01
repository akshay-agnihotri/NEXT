import { NextRequest } from "next/server";

// extarcting query parameter in GET request
export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  return new Response(JSON.stringify({ query }));
};
