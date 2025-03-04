async function fetchAllChats(req, res) {
  let connection;
  try {
    console.log("Function fetchAllChats called");

    connection = await dbConnection.getConnection();
    const { userId } = req.body;

    if (!userId) {
      console.log("User ID missing"); 
      return res.status(400).send({ message: "User ID is required" });
    }

    console.log("Querying database for userId:", userId);
    const [chats] = await connection.query("SELECT * FROM chats WHERE user_id = ?", [userId]);

    console.log("Chats retrieved:", chats); 
    return res.status(200).json({ message: "Chats retrieved successfully", data: chats });
  } catch (error) {
    console.error("Error fetching chats:", error);
    return res.status(500).send({ message: "Internal server error", error: error.message });
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { fetchAllChats };
