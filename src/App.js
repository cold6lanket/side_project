import { Navbar } from "./components/Navbar";
import { Constructors } from "./components/Constructors";
import { Scheme } from "./components/Scheme";
import { Preview } from "./components/Preview";
// styles
import styles from "./App.module.css";

function App() {
    const handleConstructorChange = (id) => {
        // do state update
    };

    return (
        <div>
            <Navbar />
            <div className={styles.mainBody}>
                <Constructors onChange={handleConstructorChange} />
                <Scheme />
                <Preview />
            </div>
        </div>
    );
}

export default App;
