import Menu from "./Menu";
import Filter from "./Filter";
import {data} from "./data";

const App = () => {
    return (
        <div className="App">
            <Menu/>
            <div className="rasdel">
                <Filter data={data}/>
            </div>
        </div>
    );
}

export default App;
