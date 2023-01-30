
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { route } from './routes/Route';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
