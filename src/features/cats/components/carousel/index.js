import React from 'react';
import Carousel from './StyledCarousel';

const CarouselComponent = ({images}) => {
    return(
            <Carousel>
            {
                images.map(image => (           
                <Carousel.Item>
                
                            <img
                                className="d-block w-100"
                                src={image.url}
                                alt={image.id}
                            />
                
                    <Carousel.Caption>
                        <div className="transbox">
                            <h3>{image.breeds[0].id}</h3>
                            <p>{image.breeds[0].description}</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                ))
            }

            </Carousel>
    )
}

export default CarouselComponent;