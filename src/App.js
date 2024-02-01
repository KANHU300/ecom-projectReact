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
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./Pages/Layout/Layout";
import Landing from "./Pages/Landing/Landing";
import InsideProduct from "./Pages/ProductInnerPage/InsideProduct";

function App() {
  return (
    <>
   <div>
   <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/InsideProduct/:id" exact element={<InsideProduct />} />
        </Route>
      </Routes>
   </div>
    </>
  );
}

export default App;
