function Sidebar() {
  const users = ["Rahul", "Priya", "Aman", "Siddhant"];

  return (
    <div style={styles.sidebar}>
      <h3>Chats</h3>
      {users.map((user, index) => (
        <div key={index} style={styles.user}>
          {user}
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "300px",
    borderRight: "1px solid #ccc",
    padding: "10px",
  },
  user: {
    padding: "10px",
    cursor: "pointer",
  },
};

export default Sidebar;