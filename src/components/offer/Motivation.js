import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

import '../../styles/carousel.scss'

const Motivation = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='motivation bg-dark h-100' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Carousel.Caption className='px-0'>
                    <p className='main-text text-white font-italic text-center px-5 mb-0'>¿Estás cada mes a disgusto con la llegada de tu menstruación?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <p className='main-text text-white font-italic text-center px-5 mb-0'>¿Frustrada por no entender tu fertilidad?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <p className='main-text text-white font-italic text-center px-5 mb-0'>¿Tienes “síndrome premenstrual”, ovarios poliquísticos, infecciones?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <p className='main-text text-white font-italic text-center px-5 mb-0'>¿Te gustaría saber de productos y plantas amigas del ciclo?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <p className='main-text text-white font-italic text-center px-5 mb-0'>¿Preparada para entender y abrazar la menopausia?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Motivation
