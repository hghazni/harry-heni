import { ReactNode } from "react"

export interface CardProps {
  code: string,
  name: string,
  capital: string,
  onClick: () => void,
  className?: string,
  languages: languagesType[],
  translation: {
    cta: string
    capital: string,
  }
}

export type languagesType = {
  name: string,
  code?: string
}
