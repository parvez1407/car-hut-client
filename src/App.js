import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  //Aos library setup
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='max-w-[1440px] mx-auto text-gray-500'>
      <ToastContainer position="top-center" />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
