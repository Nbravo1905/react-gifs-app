import { render, screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

  const title = 'One Pice';
  const url = 'https://one-pice.png/';

  test('Prueba match con el snapshot', () => { 
    
    const { container } = render( <GifItem title={ title } url={ url } />);

    expect( container ).toMatchSnapshot();
  });

  test('Debe mostar la imagen con el url y el alt correcto', () => {

    render( <GifItem title={ title } url={ url } />);

    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('debe mostar el titulo en el componente', () => {

    render( <GifItem title={ title } url={ url } />);
    expect( screen.getByText( title ) ).toBeTruthy();
  })

});