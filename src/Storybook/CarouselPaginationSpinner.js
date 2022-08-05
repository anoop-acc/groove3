import React from 'react';

import CarouselComponent from "./CarouselPaginationSpinner/CarouselComponent"
import PaginationComponent from "./CarouselPaginationSpinner/PaginationComponent"

function CarouselPaginationSpinner(props) {
    return (
        <div>
           <h1>Carousel</h1>
           <p>Use the Carousel Component to let the user navigate through a collection of images/data in a sequential fashion, moving to the previous/next one through the arrows on the sides. </p>
           <CarouselComponent />
           <h1 className='my-4'>Pagination</h1>
           <PaginationComponent />
           <h1 className='my-4'>Scroll</h1>
           <h3>Vertical Scroll</h3>
           <h3>Horizontal Scroll</h3>
           <h1>Spiner</h1>
            
        </div>
    );
}

export default CarouselPaginationSpinner;