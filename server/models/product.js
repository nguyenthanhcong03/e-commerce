const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
    },
    stock: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { _id: true }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    variants: [variantSchema],
    images: [
      {
        type: String,
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Tự động tạo createdAt và updatedAt
  }
);

// 1. Index cho tìm kiếm văn bản (text search)
productSchema.index({ name: "text", description: "text" });
// Hỗ trợ truy vấn $regex trong API khi search theo tên hoặc mô tả

// 2. Index cho field variants.price
productSchema.index({ "variants.price": 1 });
// Hỗ trợ filter theo giá (minPrice, maxPrice)

// 3. Index cho categoryId
productSchema.index({ categoryId: 1 });
// Hỗ trợ filter theo danh mục

// 4. Index cho brand
productSchema.index({ brand: 1 });
// Hỗ trợ filter theo thương hiệu

// 5. Index compound (kết hợp nhiều field)
productSchema.index({ isActive: 1, createdAt: -1 });
// Hỗ trợ sort theo createdAt và filter isActive cùng lúc

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
