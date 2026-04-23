import { useFetch } from "../../../Hooks/useFetch"

interface CarouselProps {
  url: string
}

const Carousel = ({url}: CarouselProps) => {

  const {data, isLoading, error} = useFetch(url)

  if(isLoading) return <h1>Loading...</h1>
  else if(error || !data) return <h1>Failed to fetch data.</h1>

  return (
    <div>

    </div>
  )
}

export default Carousel