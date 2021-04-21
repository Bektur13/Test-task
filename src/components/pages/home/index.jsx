import React, { useState, useEffect } from 'react';
import Cart from '../../hero/cart/Cart'

const Hero = () => {
    const [array, setArray] = useState([]);
    const [sort, setSort] = useState(false);
    const fetchData = async () => {
        const response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?&api_key=bG5yXkf9Gzhqg2JLvnAKGiqcg8p3VdOhbX2LnoHP');
        const data = await response.json();
        const array = Object.values(data.near_earth_objects).flat();
        const asteroidsData = sort ? array.filter(item => item.is_potentially_hazardous_asteroid) : array;
        setArray(asteroidsData);
    };
    useEffect(() => {
        fetchData();
    }, [sort]);
    return (
        <section className="hero">
            <div className="container">
                <div className="distance">
                    <div className="distance__content">
                        <label className='distance__checkbox'>
                            <input type="checkbox" checked={sort} onChange={() => setSort(!sort)} />
                            <p>Показать только опасные</p>
                        </label>
                        <div>
                            <p className="distance__p">Расстояние <span className="distance__span">в километрах</span>, в дистанциях до луны</p>
                        </div>
                    </div>
                </div>
                <div className="hero__content">
                    {array.map(item => <Cart {...item}
                        title={item.name}
                        size={item.absolute_magnitude_h}
                        date={item.close_approach_data.map(item => item.close_approach_date_full)}
                        distance={item.estimated_diameter.kilometers.estimated_diameter_max}
                        evaluation={item.is_potentially_hazardous_asteroid}
                        array={array} />)}
                </div>
            </div>
            <p className="rights">2021 © Все права и планета защищены</p>
        </section>
    );
};

export default Hero;

// const beka = async () => {
    //     let data = await fetch(API);
    //     let json = await data.json();
    //     let array = Object.values(json.near_earth_objects).flat();
    // }
    // beka()
    // useEffect( async () => {
    //     fetch(API)
    //         .then(response => response.json())
    //         .then(data => {
    //             const array = Object.values(data.near_earth_objects).flat();
    //             console.log(array)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    // array.map(item => <Cart {...item}
    //     title={item.name} 
    //     size={item.absolute_magnitude_h} 
    //     date={item.close_approach_data.map(item => item.close_approach_date_full)} 
    //     distance={item.estimated_diameter.kilometers.estimated_diameter_max}
    //     evaluation={item.is_potentially_hazardous_asteroid}