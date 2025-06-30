import { movies } from "../db";

// export async function GET() {
//   return Response.json(movies);
// }

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const movie = movies.find((movie) => +id === movie.id);

  if (movie) {
    return new Response(JSON.stringify(movie), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ error: "Movie not found" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  const movie = await req.json();

  const newMovie = { ...movie };
  movies.push(newMovie);
  console.log(movies);
  return new Response(JSON.stringify(newMovie));
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const updatedMovieData = await req.json();

  const index = movies.findIndex((movie) => movie.id === +id);

  if (index == -1) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  movies[index] = { id: +id, ...updatedMovieData };

  return new Response(JSON.stringify({ ...movies[index] }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {

  const { id } = params;

  const movieIndex = movies.findIndex((movie) => movie.id === +id);

  if (movieIndex == -1) {
    return new Response(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  movies.splice(movieIndex, 1);

  return new Response(
    JSON.stringify({ success: "Movie Delete successfully" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
