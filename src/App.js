import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto text-gray-500'>
      <ToastContainer position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
