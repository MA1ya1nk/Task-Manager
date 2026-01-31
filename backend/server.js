const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

// 🔗 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// CREATE
app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// READ
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// UPDATE
app.put("/tasks/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

