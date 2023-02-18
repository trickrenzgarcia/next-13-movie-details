import Image from "next/image"
import Link from "next/link"

type Props = {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  release_date: string
}

export default function Movie({id, title, overview, poster_path, release_date}: Props){
  const imagePath = 'https://image.tmdb.org/t/p/original'
  
  return (
    <div>
      <Link href={`${id}`}>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
        <Image src={imagePath + poster_path} width={700} height={700} alt={title}/>
      </Link>
    </div>
  )
}