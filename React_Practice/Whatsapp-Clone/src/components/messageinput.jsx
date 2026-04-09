import { useState } from "react";

function MessageInput() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    console.log(input);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={styles.input}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
  },
  input: {
    flex: 1,
    marginRight: "10px",
  },
};

export default MessageInput;