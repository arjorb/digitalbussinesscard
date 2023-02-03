import About from './components/About';
import Info from './components/Info';
import Interests from './components/Interests';
function App() {
  return (
    <div className='w-[317px] h-full bg-gray-900 pb-5 rounded-lg'>
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
