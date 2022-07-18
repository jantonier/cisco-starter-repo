import { React } from 'react';
import Banner from './components/Banner';
import CardGroup from 'react-bootstrap/CardGroup'
import IpRetreiver from './components/IpRetreiver';
import LatencyCalculator from './components/LatencyCalculator';


function App() {

  return (
    <div>
      <div className="App">
        <Banner tittle={'Sextant.'} />
        <div className='p-9'>
          {/* <CardGroup className='p-8 justify-center space-x-1 space-y-1'>
            {datas.map(item=> <Cardss key={item.tittle} data={item}/>)}
          </CardGroup> */}
        </div>
        <CardGroup className='justify-center space-x-1' >
          <IpRetreiver data="4" />
          <IpRetreiver data="6" />
          <LatencyCalculator/>
        </CardGroup>
        

      </div>
    </div>
  );
}

export default App;

