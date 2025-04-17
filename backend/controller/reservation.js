// import ErrorHandler from '../error/error.js';
// import { Reservation } from '../models/reservationSchema.js';
// export const sendReservation = async(req, res, next) => {
//     const {firstName, lastName, email, phone, date, time} = req.body;
//     if (!firstName|| !lastName|| !email|| !phone|| !date|| !time) {
//         return next (new ErrorHandler("Please fill all the fields", 400));

//     }
//     try {
//         await Reservation.create(firstName, lastName, email, phone, date, time);
//         res.status(200).json ({
//             success: true,
//             message: "Reservation Sent Successfully",

//         });

//     } catch(error) {
//         if (error.name === "ValidationError") {
//             const validationErrors = Object.values(error.errors).map(
//                 (err) => err.message
//             );
//             return next(new ErrorHandler(validationErrors.join(" , ", 400)));
//         }
//     return next(error);
//     }
// };
import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // Check if all required fields are present
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  try {
    // Create a new reservation by passing the fields as an object
    await Reservation.create({ firstName, lastName, email, phone, date, time });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }

    // Handle other errors
    return next(error);
  }
};
