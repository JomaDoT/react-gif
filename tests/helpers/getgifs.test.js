import { GetGifs } from "../../src/helpers/getGifs";

describe('prueba en getgifs js', () => { 
    
    test('debe retornar un arreglo de gifs', async () => { 
        
        const gifs = await GetGifs('goku');
        // console.log(gifs);
        //tenga mas de unos
        expect(gifs.length).toBeGreaterThan(0);
        //devuelva por lo menos la mismas propiedades esperadas
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url: expect.any(String)
        });

        //que el url traiga por lo menos el http
        expect(gifs[0].url.includes('http')).toBeTruthy();
     });
 })