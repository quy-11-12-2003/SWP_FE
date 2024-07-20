import { useState } from "react";

export default function useToggle(initialState = false) {
    const [toggle, setToggle] = useState(initialState);

    const onToggle = () => setToggle((state) => !state);

    const onOpen = () => setToggle(true)

    const onClose = () => setToggle(false)

    return {
        toggle,
        onOpen,
        onClose,
        onToggle
    };
}
