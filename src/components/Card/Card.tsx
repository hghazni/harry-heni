import React from 'react';
import scss from './Card.module.scss';
import { CardProps } from './Card.types';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ReactCountryFlag from 'react-country-flag';

const Card = (props: CardProps) => {
  const { className, name, capital, code, onClick } = props;
  return (
    <div className={`${scss.card} ${className}`}>
      <div className={scss.content}>
        <ReactCountryFlag 
          countryCode={code}
          svg
          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
          cdnSuffix="svg"
          title={`${name} flag`}                 
          style={{
            fontSize: '17em',
            lineHeight: '2em',
          }} />
        <p className={scss.name}>{name}</p>
        <p className={scss.capital}>{capital}</p>
        <a href={`#${name}`} tabIndex={0} className={scss.readingTime} onClick={onClick}>3 min article <ArrowRightAltIcon /></a>
      </div>
    </div>
  )
}

export default Card;