const mongoose = require('mongoose');
const Admin = require('./src/models/Admin');
const dotenv = require('dotenv');

dotenv.config();

const seedAdmin = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('MONGODB_URI is not defined in .env');

    await mongoose.connect(uri);
    console.log('Connected to MongoDB...');

    // Wipe existing admins
    await Admin.deleteMany({});
    console.log('Existing admins removed.');

    // Create default admin
    const admin = await Admin.create({
      username: 'xenonedge_admin',
      email: 'xenonedgelanka@gmail.com',
      password: 'XenonEdgeLanka@2025',
      name: 'Super Admin'
    });

    console.log('Default admin created successfully!');
    console.log('Username: xenonedge_admin');
    console.log('Password: XenonEdgeLanka@2025');
    console.log('Email: xenonedgelanka@gmail.com');
    
    process.exit();
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
