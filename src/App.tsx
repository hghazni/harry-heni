import { useQuery, gql } from '@apollo/client';
import Card from './components/Card';
import scss from './App.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      currency
      emoji
      languages {
        code
        name
      }
    }
  }
`;

  export default function App() {
    const [finalData, setData] = useState<any>({});

    const DisplayInfiniteCards = (i: number): any => {
      const { loading, error, data } = useQuery(GET_COUNTRIES);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
    
      // Sets GraphQL query in state - ideally we want to make just a single call during the user session
      setData(data.countries);    

      // Checks if country is available in state
       if (finalData[i]) {
        let country: any;
        country = finalData[i];
        return (
          <Card 
          key={country.id} 
          code={country.code} 
          capital={country.capital} 
          name={country.name} 
          onClick={() => console.log(`You clicked ${country.name}`)} />
        )
       }
    }
    
    const IfiniteComponent = ({ id }: { id: number }) => {
      useEffect(() => {
        fetch(finalData)
          .then((res) => res)
      }, []);
      return (
        <div className={scss.displayInfiniteCards}>
          {DisplayInfiniteCards(id)}
        </div>
      );
    }

    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const pageSize = 5;

    const isBottomVisible = useIntersectionObserver(
      ref,
      {
        threshold: 0, //trigger event as soon as the element is in the viewport.
        freezeOnceVisible: false,
      });
  
    useEffect(() => {
      //load next page when bottom is visible
      isBottomVisible && setCount(count + 1);
    }, [isBottomVisible]);

    return (
      <div className={scss.app}>
        <h2>Harry's Infinite Scroll Feed</h2>
        <p>By Harry Ashton | <a href={'mailto: harry.ashton.uk@gmail.com'}>harry.ashton.uk@gmail.com</a></p>
        <br />
      <div className={scss.infiniteWrapper}>
      {(() => { 
        const children = [];
        for (let i = 1; i <= count * pageSize; i++) {
          children.push(<IfiniteComponent key={i} id={i} />);
        }
        return children;
      })()}
      </div>
      <div ref={ref} style={{ width: "100%", height: "20px" }}>
        Bottom
      </div>
      </div>
    );
  }
