export interface CardProps {
  code: string,
  name: string,
  capital: string,
  onClick: () => void,
  className?: string,
  translation: {
    cta: string
    capital: string,
  }
}
