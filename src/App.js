import './App.css';
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro"
import MyCollection from "./component/MyCollection"
import "./component/LandingPage.css"

function App() {
  return (
    <div>
      {/* Component NavigationBar */}
      <div> 
        <NavigationBar />
      </div>

      {/* Component Intro */}
      <div> 
        <Intro />
      </div>
      
      {/* Component MyCollection */}
      <div>
        <MyCollection />
      </div>
    </div>
  );
}

export default App;