import { useState } from "react";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";

import Button from "./Button";

const Filter = ({ data }) => {
    const [cards, setCards] = useState(data);
    const [selected, setSelected] = useState(0);

    const buttons = data.reduce(
        (acc, el) => {
            if (acc.includes(el.category)) return acc;

            return [...acc, el.category];
        },
        ["all"]
    );

    const handleFilter = (selector) => {
        if (selector === "all") return setCards(data);

        setCards(data.filter((el) => el.category === selector));
    };

    return (
        <AnimateSharedLayout>
            <motion.div>
                <motion.div
                    style={{
                        backgroundColor: "#f1f1f1",
                        width: "314px",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    {buttons.map((btn, index) => (
                        <Button
                            key={btn}
                            text={btn}
                            handleClick={() => {
                                handleFilter(btn);
                                setSelected(index);
                            }}
                            isSelected={selected === index}
                        />
                    ))}
                </motion.div>
                <motion.div
                    layout
                    style={{
                        overflow: "hidden",
                        maxWidth: 314,
                        border: "1px solid #ccc"
                    }}
                >
                    <AnimatePresence initial={false} exitBeforeEnter>
                        {cards.map((el) => (
                            <motion.div
                                layout
                                key={el.title}
                                style={boxStyle}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {el.title}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </AnimateSharedLayout>
    );
};

export default Filter;

const boxStyle = {
    float: "left",
    backgroundColor: "#2196F3",
    color: "#ffffff",
    width: "100px",
    lineHeight: "100px",
    textAlign: "center",
    margin: "2px"
};

