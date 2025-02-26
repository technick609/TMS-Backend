const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    due_date: Date,
});

module.exports = mongoose.models?.Task || mongoose.model("Task", taskSchema);