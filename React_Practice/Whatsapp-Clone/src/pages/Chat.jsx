import Sidebar from "../components/sidebar";
import ChatHeader from "../components/chatheader";
import Messages from "../components/messages";
import MessageInput from "../components/messageinput";

function Chat() {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.chatSection}>
        <ChatHeader />
        <Messages />
        <MessageInput />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  chatSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
};

export default Chat;