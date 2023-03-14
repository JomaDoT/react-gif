import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('pruebas en addcategory jsx', () => { 
    
    const category = 'Goku';

    test('debe de cambiar el valor de la caja de texto', () => { 
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target:{value:category}});

        expect(input.value).toBe(category);
        // screen.debug();

     });

     test('debe de llamar onAddCategory si el input tiene un valor', () => { 
        
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:category}});
        // screen.debug();
        fireEvent.submit(form);

        //luego que se hace submit debe de limpiar el campo 
        expect(input.value).toBe('');

        //test del evento onAddCategory
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(category);

     });

     test('no debe de llamar onAddCategory si el input esta vacio', () => { 
        
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);


        const form = screen.getByRole('form');

        // screen.debug();
        fireEvent.submit(form);


        //test del evento onAddCategory
        expect(onAddCategory).not.toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(0);

     });
 });