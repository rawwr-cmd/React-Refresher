import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/layout/MainHeader";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavsPage from "./pages/Favs";

const App: React.FC = () => {
  return (
    <div>
      <MainHeader />
      <div>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupsPage />} />
          <Route path="/favs" element={<FavsPage />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
