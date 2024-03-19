import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import New from './pages/New';
import Edit from './pages/Edit';
import Start from './pages/Start';

function App() {
  return (
    <Routes>
      <Route path="/start" element={<Start />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<New />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
