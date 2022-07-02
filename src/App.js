import './App.css';
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro"
import MyCollection from "./component/MyCollection"
import "./component/LandingPage.css"

function App() {
  return (
    <div>
      <div> 
        <NavigationBar />
      </div>
      <div> 
        <Intro />
      </div>
      <div>
        <MyCollection />
      </div>
    </div>
  );
}

export default App;