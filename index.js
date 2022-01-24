const express = require("express");
const cors = require("cors");
const app = express();
// app.use("/images", express.static("images"));
app.use(express.json());
app.use(cors());
const blogRouter = require("./routes/allBlogs");
const homeArticles = require("./routes/homeArticles");
const { registerRouter } = require("./routes/registerUser");
const loginRouter = require("./routes/login");
const topPosts = require("./routes/topPosts");
// const blogRouter = createRequire("./routes/allBlogs");

app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/home-articles", homeArticles);
app.use("/api/v1/register-user", registerRouter);
app.use("/api/v1/login/", loginRouter);
app.use("/api/v1/top-posts", topPosts);

// http:localhost:8000/api/v1/login/

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server Started...at port", PORT);
});
