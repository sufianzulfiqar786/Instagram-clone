import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Extra from './Components/Extra';
import Home from './Components/Home';
import Message from './Components/SubComponents/Message';
import MessageDetail from './Components/SubComponents/MessageDetail';
import UserDetail from './DetailPage/UserDetail';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userdetail/:id" element={<UserDetail />} />
        <Route path="message/:id" element={<Message />} />
        <Route path="messagedetail/:id" element={<MessageDetail />} />
      </Routes>






      {/* <Home /> */}
      {/* <Extra /> */}

    </BrowserRouter>
  );
}

export default App;
