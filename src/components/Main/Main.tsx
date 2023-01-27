import './Main.style.scss';
import Sidebar from './Sidebar/Sidebar';
import Table from './Table/Table';

function Main() {
  return (
    <main className="main">
      <Sidebar />
      <Table />
    </main>
  );
}

export default Main;
