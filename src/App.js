
// import './App.css';

// import Header from './Component/Header/Header';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './Pages/Layout/Layout';
import Landing from './Pages/Landing/Landing';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          

        </Route>
        
      </Routes>
    </>
  );
}

export default App;

