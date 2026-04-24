import { useFetch } from "../../../Hooks/useFetch"

interface CarouselProps<T> {
  url: string
  renderItems: (item: T) => React.ReactNode
}

interface dynamicType<T> {
  carousel: T[]
}

const Carousel = <Type,>({url, renderItems}: CarouselProps<Type>) => {

  const {data, isLoading, error} = useFetch<dynamicType<Type>>(url)

  if(isLoading) return <h1>Loading...</h1>
  else if(error || !data) return <h1>Failed to fetch data.</h1>

  return (
    <div>
      {
        data?.carousel.map((card) => (
          renderItems(card)
        ))
      }
    </div>
  )
}

export default Carousel