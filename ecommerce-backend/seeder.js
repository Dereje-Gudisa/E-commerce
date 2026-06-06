// seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./data/products');
const Product = require('./models/Product');

// Load environment variables (.env file)
dotenv.config();

// Connect to your MongoDB Cluster using your existing URI key
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('📦 MongoDB Connected for Seeding...'))
  .catch((err) => {
    console.error(`❌ Connection Error: ${err.message}`);
    process.exit(1);
  });

const importData = async () => {
  try {
    // 1. Clear out any existing products so we don't duplicate items
    await Product.deleteMany();
    console.log('🗑️ Old products cleared!');

    // 2. Insert our fresh sample products array
    await Product.insertMany(products);
    console.log('🎉 Data Successfully Imported to Database!');
    
    // 3. Gracefully close the database process connection
    process.exit();
  } catch (error) {
    console.error(`❌ Error importing data: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('🗑️ All product data destroyed!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error destroying data: ${error.message}`);
    process.exit(1);
  }
};

// Check terminal arguments to decide whether to import or destroy data
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}