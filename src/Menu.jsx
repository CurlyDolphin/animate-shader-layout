import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

const menuData = ["Short", "Very Loooooong item", "Normal item"];

function Menu() {
    const [activeIndex, setActive] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                backgroundColor: "#eee",
                padding: "1rem",
                borderRadius: "25px"
            }}
        >
            <AnimateSharedLayout>
                {menuData.map((item, index) => (
                    <MenuItem
                        key={item}
                        item={item}
                        isSelected={activeIndex === index}
                        handleClick={() => setActive(index)}
                    />
                ))}
            </AnimateSharedLayout>
        </div>
    );
}

export default Menu;

function MenuItem(props) {
    const { item, isSelected, handleClick = Function.prototype } = props;

    return (
        <motion.div
            onClick={handleClick}
            style={{
                margin: "0 0.5rem",
                fontWeight: 900,
                position: "relative"
            }}
            initial={{ color: "#000" }}
            animate={{ color: isSelected ? "rgb(255, 0, 0)" : "#000" }}
        >
            {isSelected && <ActiveLine />}
            {item}
        </motion.div>
    );
}

function ActiveLine() {
    return (
        <motion.div
            layoutId="activeItem"
            style={{
                width: "calc(100% - 10px)",
                height: "4px",
                position: "absolute",
                bottom: "-6px",
                left: "5px",
                backgroundColor: "rgb(255, 0, 0)"
            }}
        />
    );
}
