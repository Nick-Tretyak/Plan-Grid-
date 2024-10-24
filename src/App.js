import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import DeskName from './DeskName/DeskName';
import Header from './Header/Header';
import NameOfColumns from './NameOfColumns/NameOfColumns';
import Desk from './Desk/Desk';
import TaskName from './TaskName/TaskName';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/desk-name/*' element={<DeskName />} /> */}
        {/* <Route path='/task-name/*' element={<TaskName />} /> */}
        {/* <Route path='/columns-name/*' element={<NameOfColumns />} /> */}
        {/* <Route path='/cards-name/*' element={<NameOfCards />} /> */}
        <Route path='/desk/*' element={<Desk />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App