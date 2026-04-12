import { useState } from "react"

export const useAccordion = () => {
    const [active, setActive] = useState<string | null>(null)

    const toggle = (index: string) => {
        setActive(prev => prev === index ? null : index)
    }

    const isOpen = (index: string) => active === index

    return {toggle, isOpen}
}
