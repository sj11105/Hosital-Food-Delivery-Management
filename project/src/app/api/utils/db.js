const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hospital");

// Patient Schema
const patientSchema = mongoose.Schema({
  name: String,
  Dieseas: String,
  Allergies: String,
  Age: Number,
  Gender: String,
  Contact: Number,
  Emergency: Number,
  roomInfo: {
    roomNumber: Number,
    bedNumber: Number,
    floorNumber: Number,
  },
});

// MealBox Schema
const MealBoxSchema = mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  dietChartId: { type: mongoose.Schema.Types.ObjectId, ref: "DietChart" },
  deliveryPersonnelId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  status: {
    type: String,
    enum: ["Prepared", "Delivered"],
    default: "Prepared",
  },
  deliveryTimestamp: Date,
});

const MealSchema = mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" }, // Reference to the patient
  mealType: {
    type: String,
    enum: ["Morning", "Evening", "Night"],
    required: true,
  },
  preparationStatus: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  deliveryStatus: {
    type: String,
    enum: ["Not Delivered", "Delivered"],
    default: "Not Delivered",
  },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" }, // Reference to the pantry staff
  deliveryPersonnel: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" }, // Reference to delivery personnel
  createdAt: { type: Date, default: Date.now },
});

// DietChart Schema
const DietChartSchema = mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  morning: { meal: String, ingredients: [String], instructions: String },
  evening: { meal: String, ingredients: [String], instructions: String },
  night: { meal: String, ingredients: [String], instructions: String },
});

// Staff Schema
const StaffSchema = mongoose.Schema({
  name: String,
  role: { type: String, enum: ["Pantry Staff", "Delivery Personnel"] },
  contactInfo: String,
  isAvailable: { type: Boolean, default: true },
});

// Use mongoose.models to avoid re-compilation of models
const Staffmodel =
  mongoose.models.Staff || mongoose.model("Staff", StaffSchema);
const patientModel =
  mongoose.models.Patient || mongoose.model("Patient", patientSchema);
const MealBoxmodel =
  mongoose.models.MealBox || mongoose.model("MealBox", MealBoxSchema);
const Dietmodel =
  mongoose.models.Diet || mongoose.model("Diet", DietChartSchema);
const MealModel = mongoose.models.Meal || mongoose.model("Meal", MealSchema);

module.exports = {
  patientModel,
  MealBoxmodel,
  Dietmodel,
  Staffmodel,
  MealModel,
};
