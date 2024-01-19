
import Header from './components/Header';

function App() {

  const data ='description'
  return (
    <div>
      <Header data={data} />
      <h1 style={{color:'red'}}>Hello world</h1>
      <p>this is sample {data}</p>
      
    </div>
  );
}

export default App;
