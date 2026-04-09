import { useEffect, useState } from "react"

export const useFetch = <T>(url: string) => {

    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)
            try {
                const req: Response = await fetch(url)

                if(!req.ok) throw new Error("Failed to load the network")

                const res: T = await req.json()

                setData(res)
                
            } catch (err: unknown) {
                setError(true)
                console.log(`Failed to fetch data: ${err}`)
            } finally {
                setError(false)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, error, isLoading}
}