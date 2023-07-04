import FirstSec from "./components/FirstSec/FirstSec";
import NavBar from "./components/NavBar/NavBar";
import SecondSec from "./components/SecondSec/SecondSec";
import SideNavs from "./components/SideNavs/SideNavs";


function App() {
  return (
    <div className="">
        <NavBar />
        <SideNavs />
        <FirstSec />
        <SecondSec />
    </div>
  );
}

export default App;
