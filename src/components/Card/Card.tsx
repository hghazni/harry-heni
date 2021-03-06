import React from 'react';
import scss from './Card.module.scss';
import { CardProps } from './Card.types';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ReactCountryFlag from 'react-country-flag';
import { Chip } from '@mui/material';

const Card = (props: CardProps) => {
  const { className, name, capital, code, onClick, translation, languages } = props;
  
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
        <p className={scss.capital}><b>{translation.capital}</b>: {capital}</p>
        <div className={scss.languageBar}>
          <b style={scss.languageLabel}>Languages:</b>
          {languages.map((language, id: number) => {
            return (
              <Chip title={language.code?.toLocaleUpperCase()} label={language.name} key={id} />
            )
          })}      
        </div>
        <a 
          href={`#${name}`} 
          tabIndex={0} 
          className={scss.findOutMore} 
          onClick={onClick}>
            {translation.cta}<ArrowRightAltIcon />
        </a>
      </div>
    </div>
  )
}

export default Card;