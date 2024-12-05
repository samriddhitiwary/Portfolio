import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Banner } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar /><br></br><br></br><br></br>
          <Hero />
        </div>
        <About />
        <Experience />
        <Banner/>
        <Tech />
        <Works />
        
        <div className='relative z-0'>
          
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;