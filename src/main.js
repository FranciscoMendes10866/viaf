import app from "./app.js";

const start = async () => {
  try {
    await app.listen(3333);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
