import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import CreateNews from './Components/CreateNews';
import CreateCategory from './Components/CreateCategory';
import EditNews from './Components/EditNews';
import EditCategory from './Components/EditCategory';
import ListAllCategory from './Components/ListAllCategory';
import ListAllNews from './Components/ListAllNews';


function App() {
  return (
 <>
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/create-news" element={<CreateNews/>}/>
        <Route exact path="/create-category" element={<CreateCategory/>}/>
        <Route exact path="/edit-news" element={<EditNews/>}/>
        <Route exact path="/edit-category" element={<EditCategory/>}/>
        <Route exact path="/list-all-category" element={<ListAllCategory/>}/>
        <Route exact path="/list-all-news" element={<ListAllNews/>}/>
      </Routes>
   </BrowserRouter>
 </>
  );
}

export default App;
