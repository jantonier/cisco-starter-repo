import { useState } from 'react';
import Banner from './components/Banner';
import Cardss from './components/Cardss';
import CardGroup from 'react-bootstrap/CardGroup'


function App() {
  console.log('render');
  const datas = [
    { tittle: 'Test 1', description: 'Place holder for the description' },
    { tittle: 'Test 2', description: 'Place holder for the description' },
    { tittle: 'Test 3', description: 'Place holder for the description' },
    { tittle: 'Test 4', description: 'Place holder for the description' }
  ]
  

  return (
    <div>
      <div className="App">
        {/* <Cointainer /> */}
        <Banner tittle={'Sextant.'} />
        <div className='p-9'>
          <CardGroup className='p-8 justify-center space-x-1 space-y-1'>
            {datas.map(item=> <Cardss data={item}/>)}
          </CardGroup>
        </div>

      </div>
    </div>
  );
}

export default App;
//example={`concadenar ${bacgroundcolor}`}
