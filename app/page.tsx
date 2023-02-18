import Image from "next/image"
import Movie from "./Movie"

async function getPopularMovie(){
  const data = await fetch(process.env.URL + `popular?api_key=${process.env.API_KEY}`)
  return data.json()
}

export default async function HomePage(){
  const movies = await getPopularMovie()

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {movies.results.map((movie: any) => (
          <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title} 
            overview={movie.overview} 
            poster_path={movie.poster_path} 
            release_date={movie.release_date} 
          />
        ))}
      </div>
    </main>
  )
}