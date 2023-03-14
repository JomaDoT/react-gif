import { fireEvent, render, screen } from '@testing-library/react';
import { GitfExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    const category = 'Dominicano';

    test('si mandamos un categoria ya creada no debe agregarse en categorias', () => {
        
        render( <GitfExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:category}});
        // screen.debug();
        fireEvent.submit(form);

        expect(screen.getAllByText(category).length).not.toBeGreaterThan(1);
    });

    test('si mandamos un categoria nueva debe agregarse en categorias', () => {
        
        const category = 'goku';

        render( <GitfExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:category}});
        // screen.debug();
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{level:3}).length).toBeGreaterThan(1);
        screen.debug();
    });
});