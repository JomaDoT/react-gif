import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// mock del custom hook useFetchGifs
jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid jsx', () => { 
    
    const category ='dominicano';
    test('debe mostrar la categoria inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText(category));
        // screen.debug();
     });
    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando....'));
        // screen.debug();
     });

     test('debe mostrar los items cuando se cargan las imagenes de useFetchGifs', () => { 

        const gifs =[
            {
                id:'abc',
                title:'saitama',
                url:'https://klok.com/saitama.jpg'
            },
            {
                id:'123',
                title:'dominicano',
                url:'https://klok.com/dominicano.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
     });
 });