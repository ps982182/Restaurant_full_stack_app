// import app from './app.js';

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on Port ${process.env.PORT}`)
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
