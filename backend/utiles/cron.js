const cron = require("node-cron");
const keyResetModel = require("../models/keyResetModel"); // Thay thế đường dẫn với đường dẫn thực tế đến mô hình của bạn

async function cleanupExpiredKeys() {
  const expirationTime = new Date(Date.now() + 120 * 60 * 1000);
  try {
    await keyResetModel.deleteMany({ createdAt: { $lte: expirationTime } });
    console.log("Đã xóa các key đã hết hạn.");
  } catch (error) {
    console.error("Lỗi khi xóa key đã hết hạn:", error.message);
  }
}

module.exports = cron.schedule("* * * * *", cleanupExpiredKeys);
