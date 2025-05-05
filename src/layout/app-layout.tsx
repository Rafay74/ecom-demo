
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <Navbar />
      <main className="flex-1 w-full py-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default AppLayout;