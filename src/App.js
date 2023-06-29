import MainPage from "./components/pages/mainPage/MainPage";
import Navigation from "./components/navigation/Navigation";
import UserPage from "./components/pages/userPage/UserPage";
import ContentPage from "./components/pages/contentPage/ContentPage";
import { Routes, Route } from 'react-router-dom';
import "./app.css"

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/user/:id" element={<UserPage/>}/>
        <Route path="/user/:id/content/:i" element={<ContentPage/>}/>
      </Routes>
    </>
  );
}

export default App;
