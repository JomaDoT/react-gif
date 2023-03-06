import React, { useEffect, useState } from 'react'
import { GetGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const GetImages = async () => {
      const newImages = await GetGifs(category);
      setImages(newImages);
      setisLoading(false);
    };
    useEffect(() => {
      GetImages();
    }, []);
    
    return{
        images,
        isLoading
    } 
}
