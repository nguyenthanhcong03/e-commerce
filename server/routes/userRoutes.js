const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyToken, isAdmin } = require("../middlewares/verifyToken");
const { protect, admin } = require("../middlewares/auth");
const upload = require("../middlewares/multerConfig");

// router.post("/register", userController.register);
// router.post("/login", userController.login);
// router.post("/refreshtoken", userController.refreshAccessToken);
// router.get("/logout", verifyToken, userController.logout);
// router.get("/forgotpassword", verifyToken, userController.forgotPassword);
// router.get("/", [verifyToken, isAdmin], userController.getUsers);
router.post("/", userController.createUser);
router.get("/", protect, admin, userController.getAllUsers);
router.delete("/", protect, admin, userController.deleteUser);
router.put("/current", protect, userController.updateUser);
// router.post("/upload-image", upload.single("image"), userController.uploadImage);
router.post("/upload-image", userController.uploadAvatar);
router.post("/upload-multiple-images", userController.uploadMultipleImages);

router.put("/:uid", protect, admin, userController.updateUserByAdmin);

// router.get("/profile", protect, (req, res) => {
//   res.json({ message: "Thông tin người dùng", user: req.user });
// });

// router.get("/admin", protect, admin, (req, res) => {
//   res.json({ message: "Trang quản trị - Chỉ Admin mới thấy" });
// });

module.exports = router;
