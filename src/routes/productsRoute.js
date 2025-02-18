const { Router } = require("express");
const ProductController = require("../controllers/productController.js");
const roles = require("../middleware/roles.js");
const permissions = require("../middleware/permissions.js");

const router = Router();

router.get("/products", roles(["Gerente", "Vendedor"]), permissions(["Adicionar"]), ProductController.getAllProducts);
router.get("/products/:id", ProductController.getProductById);
router.post("/products", ProductController.createProduct);
router.put("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

module.exports = router;
