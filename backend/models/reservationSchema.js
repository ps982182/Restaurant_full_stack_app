import mongoose from "mongoose";
import validator from "validator";
const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must be at least 3 characters"],
    maxLength: [30, "First Name cannot exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must be at least 3 characters"],
    maxLength: [30, "Last Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain only 11 digits"],
    maxLength: [11, "Phone number must contain only 11 digits"],
  },
  time: {
    type: String,
    required: true,
  },
});
export const Reservation = mongoose.model("Reservation", reservationSchema);
