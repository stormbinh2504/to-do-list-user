const router = require("express").Router();
const User = require("../models/userModel");
const userCtr = require("../controllers/userCtr");

// router.route("/get").get(userCtr.getUser);
// router.route("/post").post(userCtr.createUser);
// router.route("/put/:id").put(userCtr.updateUser);
// router.route("/delete/:id").delete(userCtr.deleteUser);

router.post("/post", async (req, res) => {
  try {
    const { username, email, phone, address } = req.body;
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: flase, msg: "username already taken" });

    const newUser = new User({ username, email, phone, address });
    await newUser.save();
    res.json({ success: true, msg: "Create success", user: newUser });
  } catch (err) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.get("/get", async (req, res) => {
  const user = await User.find();
  res.json({ success: true, msg: "Get all success", user: user });
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const userDeleteCondition = { _id: req.params.id };
    const deletedUser = await User.findOneAndDelete(userDeleteCondition);

    if (!deletedUser)
      return res.status(401).json({
        success: false,
        message: "Not found user",
      });

    res.json({ success: true, msg: "Delete success", user: deletedUser });
  } catch (err) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.put("/put/:id", async (req, res) => {
  try {
    const { username, email, phone, address } = req.body;

    let newUser = { username, email, phone, address };
    const UserUpdateCondition = { _id: req.params.id };

    const updateUser = await User.findByIdAndUpdate(
      UserUpdateCondition,
      newUser,
      {
        new: true,
      }
    );

    // let updateUser = await User.findByIdAndUpdate(
    //   { _id: req.params.id },
    //   { username, email, phone }
    // );

    res.json({
      success: true,
      message: "Update success",
      user: updateUser,
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
