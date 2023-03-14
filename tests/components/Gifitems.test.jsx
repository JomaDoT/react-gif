import { render, screen } from "@testing-library/react";
import { GifItems } from "../../src/components/GifItems";

describe('pruebas en gifgriditems component', () => {

    const title = 'saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('debe hacer match con el snapshot', () => { 

       const {container} = render(<GifItems
            title={title} 
            url={url}/>);

            expect(container).toMatchSnapshot();
     });

     test('debe mostrar la imagen con el url y el alt indidicado' ,() => { 

             render(<GifItems
             title={title} 
             url={url}/>);
 
            //  screen.debug();

            //si se va evaluar mas de un propiedad de un tag es mejor desestructurar
            // expect(screen.getByRole('img').src).toBe(url);

            const {src, alt} = screen.getByRole('img');

            expect(src).toBe(url);
            expect(alt).toBe(title);
      });

      test('debe mostrar el titulo de la imagen' ,() => { 

        render(<GifItems
        title={title} 
        url={url}/>);

       expect(screen.getByText(title)).toBeTruthy();
 });
});