import { X } from "lucide-react"
import { useFetch } from "../../Hooks/useFetch"

type MobileNavContentProps = {
    toggle: () => void
}

const url: string = '/src/data/services.json'

const MobileNavContent = ({toggle}: MobileNavContentProps) => {
    const {data, isLoading, error} = useFetch(url)

    if(isLoading) return <h1>Loading</h1>
    if(error) return <h1>Error</h1>

  return (
    <div className="absolute top-0 left-0 min-h-screen min-w-full bg-white">
        <div className="boundiries flex items-center justify-end">
            <button onClick={toggle}>
                <X />  {/* close icon */}
            </button>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default MobileNavContent