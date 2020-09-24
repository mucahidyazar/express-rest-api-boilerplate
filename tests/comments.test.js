const request = require("supertest");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = require("../src/app");
const Comment = require("../src/models/comment");

//!EXAMPLE TESTS
// const userOneId = new mongoose.Types.ObjectId();
// const userOne = {
//   _id: userOneId,
//   email: "userone@example.com",
//   password: "123456789",
//   tokens: [{ token: jwt.sign({ _id: userOneId }, process.env.SECRET_KEY) }],
// };
// const userTwoId = new mongoose.Types.ObjectId();
// const userTwo = {
//   _id: userTwoId,
//   email: "usertwo@example.com",
//   password: "123456789",
//   tokens: [{ token: jwt.sign({ _id: userOneId }, process.env.SECRET_KEY) }],
// };

// beforeEach(async () => {
//   await User.deleteMany();
//   await new User(userOne).save();
// });

// test("Should signup a new user", async () => {
//   const response = await request(app)
//     .post("/users")
//     .send({
//       email: userTwo.email,
//       password: userTwo.password,
//     })
//     .expect(201);

//   const user = await User.findById(response.body.user._id);
//   expect(user).not.toBeNull();

//   expect(response.body).toMatchObject({
//     user: {
//       email: userTwo.email,
//     },
//     token: user.tokens[0].token,
//   });

//   expect(response.body.user.password).not.toBe(userTwo.password);
// });

// test("Should login existing user", async () => {
//   await request(app)
//     .post("/users/login")
//     .send({
//       email: userOne.email,
//       password: userOne.password,
//     })
//     .expect(200);
// });

// test("Should not login existing user", async () => {
//   await request(app)
//     .post("/users/login")
//     .send({
//       email: userOne.email,
//       password: "wrongPassword",
//     })
//     .expect(400);
// });

// test("Should delete user", async () => {
//   await request(app)
//     .delete("/users/me")
//     .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
//     .send()
//     .expect(200);
//   const user = await User.findById(userOneId);
//   expect(user).toBeNull();
// });
