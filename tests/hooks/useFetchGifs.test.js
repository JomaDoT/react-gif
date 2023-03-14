const { renderHook, waitFor } = require("@testing-library/react");
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('prueba en el hook useFetchGifs', () => { 
    
    test('debe de regresar el estado inicial', () => { 
        
        const {result} =  renderHook(()=> useFetchGifs('dominicano'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de regresar un arreglo de imagenes y isloading en false', async () => { 
        
        const {result} =  renderHook(()=> useFetchGifs('dominicano'));

        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
            {timeout:10000}            
        );

        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
 });