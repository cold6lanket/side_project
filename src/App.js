import { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Constructors } from "./components/Constructors";
import { Scheme } from "./components/Scheme";
import { Preview } from "./components/Preview";
import {
    BsFillImageFill,
    BsMenuButton,
    BsParagraph,
    BsTextParagraph
} from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
// styles
import styles from "./App.module.css";

const items = [
    { title: "Headline", icon: <BsTextParagraph size="1.2em" />, type: "headline" },
    { title: "Image", icon: <BsFillImageFill size="1.2em" />, type: "image" },
    { title: "Button", icon: <BsMenuButton size="1.2em" />, type: "button" },
    { title: "Paragraph", icon: <BsParagraph size="1.2em" />, type: "paragraph" }
];

const componentTypes = {
    headline: (value, onChange) => <input onChange={onChange} value={value} type="text" />,
    paragraph: (value, onChange) => <textarea onChange={onChange} value={value} />,
    image: (_, onChange) => <input onChange={onChange} type="file" />,
    button: (value, onChange) => <input onChange={onChange} value={value} type="text" />
};

function App() {
    const [selectedBlocks, setSelectedBlocks] = useState([]);

    const handleConstructorChange = (type) => {
        setSelectedBlocks([...selectedBlocks, {
            ...items.find(item => item.type === type),
            render: componentTypes[type],
            value: "",
            id: uuidv4()
        }]);
    };

    const handleSchemeChange = useCallback((target, index) => {
        setSelectedBlocks(prevBlocks => {
            const nextBlocks = prevBlocks.slice();
            let value;

            if (target.hasOwnProperty("files")) {
                // TODO: fix image src format
                value = URL.createObjectURL(target.files[0]);
            } else {
                value = target.value;
            }

            nextBlocks[index] = { ...nextBlocks[index], value, };

            return nextBlocks;
        });
    }, []);

    const handleBlockDelete = id => {
        setSelectedBlocks(selectedBlocks.filter(block => block.id !== id));
    };

    const handleDirectionChange = (diff, index) => {
        const items = selectedBlocks.slice();
        const item = items[index];
        items.splice(index, 1);
        items.splice(index + diff, 0, item);
        setSelectedBlocks(items);
    };

    return (
        <div>
            <Navbar />
            <div className={styles.mainBody}>
                <Constructors
                    items={items}
                    onChange={handleConstructorChange}
                />
                <Scheme
                    blocks={selectedBlocks}
                    onChange={handleSchemeChange}
                    onDirectionChange={handleDirectionChange}
                    onDelete={handleBlockDelete}
                />
                <Preview content={selectedBlocks} />
            </div>
        </div>
    );
}

export default App;