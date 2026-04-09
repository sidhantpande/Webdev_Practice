import { useState } from "react";

function Messages() {
  const [messages] = useState([
    { text: "Hello", sender: "other" },
    { text: "Hi bro", sender: "me" },
  ]);

  return (
    <div style={styles.container}>
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            ...styles.message,
            alignSelf: msg.sender === "me" ? "flex-end" : "flex-start",
            background: msg.sender === "me" ? "#DCF8C6" : "#fff",
          }}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    overflowY: "scroll",
  },
  message: {
    padding: "8px",
    margin: "5px",
    borderRadius: "8px",
    maxWidth: "60%",
  },
};

export default Messages;