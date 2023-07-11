import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas Fetch GetGifs', () => {

  test('debe de retornar arreglo de images', async () => {

    const gifs = await getGifs('One Pice');

    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    });
    
  });
  
});