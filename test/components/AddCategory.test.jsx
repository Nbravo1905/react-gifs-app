import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

  test('debe cambiar el valor de la caja de texto', () => {

    render( <AddCategory onNewCategory={ () => {}} /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, {target: { value: 'One Pice'} });
    expect( input.value ).toBe('One Pice');

  });

  test('debe de llamar onNewCategory si el input tiene valor', () => {

    const value = 'One Pice';
    const onNewCategory = jest.fn();

    //Renderisamos nuestro componente
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    //Tomamo las referencia de nuestros componentes
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //Ejecutamos el onchage de nuestro input
    fireEvent.input( input, {target: { value: 'One Pice'} });

    //Ejecutamos el submit del formulario
    fireEvent.submit( form );

    //Validar si nuestro input quedo vacio
    expect( input.value ).toBe('');

    //Validar si se llamo la función
    expect( onNewCategory ).toHaveBeenCalled();

    //Validar si se llamo la función con un valor en concreto
    expect( onNewCategory ).toHaveBeenCalledWith( value );

    //Ej: cuando pueda ser llamada varias veces
    //expect( onNewCategory ).toHaveBeenCalledTimes(2);
  });

  test('no debe de llamar el onNewCategory si el input esta vacio', () => {

    const onNewCategory = jest.fn();

    //Renderisamos nuestro componente
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    //Tomamos las referencia de nuestros componentes
    const form = screen.getByRole('form');

    //Ejecutamos el submit del formulario
    fireEvent.submit( form );

    //Validamos que no fue llamada .not
    expect( onNewCategory ).not.toHaveBeenCalled();

  });

});