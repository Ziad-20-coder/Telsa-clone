import type { Charging } from "../../../Types/services"

interface DesktopNavContentProps {
    data: Charging[]
}

const DesktopNavContent = ({ data }: DesktopNavContentProps) => {
  return (
    <div className="absolute top-full left-0">
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
        </li>
      ))}
    </div>
  )
}

export default DesktopNavContent