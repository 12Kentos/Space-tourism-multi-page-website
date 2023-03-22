import styles from "./App.module.scss";
import MainNavigation from "./components/MainNavigation";
import PageNumber from "./components/PageNumber";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <>
      <MainNavigation />
      {/* <HomePage /> */}
      <PageNumber />
      {/* <DestinationPage /> */}
      <CrewPage />
    </>
  );
}

export default App;
