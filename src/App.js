import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Matrix from './pages/Matrix';
import HangOver from './pages/HangOver';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='matrix' element={<Matrix/>}/>
        <Route path='hangover' element={<HangOver/>}/>

      </Route>
    )
  )

  return (
    <div style={{backgroundColor:"#2c2c2c", minHeight: "100vh"}}>
    <RouterProvider router={router}  /> 
    

    </div>
 
  );
}

export default App;
