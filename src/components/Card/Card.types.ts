import { ReactNode } from "react"

export interface CardProps {
  code: string,
  name: string,
  capital: string,
  onClick: () => void,
  className?: string,
  languages: [
    {
      name: string,
      code?: string
    }
  ],
  translation: {
    cta: string
    capital: string,
  }
}
