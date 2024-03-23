import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks';
import DeleteBooks from './components/DeleteBooks';
import SearchBooks from './components/SearchBooks';
import ViewAllBooks from './components/ViewAllBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<AddBooks />} />
        <Route path='/search' element={<SearchBooks />} />
        <Route path='/view' element={<ViewAllBooks />} />
        <Route path='/delete' element={<DeleteBooks />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
