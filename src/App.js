
import './App.css';
import Countries from './features/countries/Countries';
import Products from './features/products/products';

function App() {
  return (
    <div className='border border-2 border-success m-2 p-2'>
      <h1>App</h1>
       <Countries></Countries>
      {/* <Products></Products> */}
    </div>
  );
}

export default App;
