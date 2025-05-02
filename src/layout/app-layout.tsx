
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      
      <Navbar />

     
      <main className="flex-1 w-full sm:px-6 md:px-8 lg:px-16 xl:px-24 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;