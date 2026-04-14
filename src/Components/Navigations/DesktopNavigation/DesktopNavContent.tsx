import type { Charging } from "../../../Types/services"

interface DesktopNavContentProps {
    data: Charging[]
}

const DesktopNavContent = ({ data }: DesktopNavContentProps) => {
  return (
    <div className="bg-white shadow-md absolute top-full left-0 min-w-full">
      <div className="grid grid-cols-3 gap-5 max-w-2/3 mx-auto mb-6">
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} className="h-46 m-auto" />
            <h3 className="text-center">{item.title}</h3>
          </li>
        ))}
      </div>
    </div>
  )
}

export default DesktopNavContent