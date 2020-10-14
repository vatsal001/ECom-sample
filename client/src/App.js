import React from "react";
import LandingPage from "./Components/LandingPage";
import Footer from "./Styles/Footer";
import TopBar from "./Styles/Navbar";
function App() {
  return (
    <React.Fragment>
      <TopBar />
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
