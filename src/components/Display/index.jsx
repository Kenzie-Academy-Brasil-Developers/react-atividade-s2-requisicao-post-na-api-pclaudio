import { useEffect, useState } from "react";
import { Message } from "./style";

const Display = ({ messages }) => {
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    if (messages.length > 0) {
      setShow(true);

      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 5_000);

      return (() => clearTimeout(timeoutId));
    }
  }, [messages]);

  return (
    <>
      { show && messages.map((message, index) => <Message key={ index } type={ message.type }>{ message.text }</Message>) }
    </>
  );
};

export default Display;