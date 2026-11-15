import { Router } from "express";

// Mounted at /api/users
// No endpoints yet. Admin user management comes in Phase 5.

const router = Router();

router.get("/get-all", (req, res) => {
  res.send({ message: "Users retrieved successfully" });
});

export default router;
