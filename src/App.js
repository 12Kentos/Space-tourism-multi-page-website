import styles from "./App.module.scss";
import MainNavigation from "./components/MainNavigation";
import PageNumber from "./components/PageNumber";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <>
      <MainNavigation />
      {/* <HomePage /> */}
      <PageNumber />
      <DestinationPage />
    </>
  );
}

export default App;
