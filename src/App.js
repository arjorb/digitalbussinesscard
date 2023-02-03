import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';
function App() {
  return (
    <div className='w-[320px] h-full bg-gray-900 rounded-lg overflow-hidden'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
