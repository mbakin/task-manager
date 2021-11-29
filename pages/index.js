import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Header />
    </div>
  );
}
