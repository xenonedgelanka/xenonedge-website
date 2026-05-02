/**
 * XenonEdge Lanka - Admin Credential Reset Utility
 * Purpose: Wipes existing admin accounts and initializes a fresh master admin.
 * Run: node reset-admin.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./src/models/Admin');

const DEFAULT_ADMIN = {
  username: 'admin',
  email: 'admin@xenonedge.com',
  password: 'Admin@123',
  name: 'XenonEdge Master Admin',
};

async function resetDatabase() {
  try {
    console.log('\n🚀 Initializing Admin Reset...');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env file');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // 1. Wipe existing admins
    const deleteResult = await Admin.deleteMany({});
    console.log(`🧹 Cleared ${deleteResult.deletedCount} existing admin(s)`);

    // 2. Create fresh admin
    // Note: The Admin model's pre-save hook handles bcrypt hashing automatically
    const newAdmin = new Admin(DEFAULT_ADMIN);
    await newAdmin.save();

    console.log('\n✨ Master Admin Account Provisioned Successfully!');
    console.log('────────────────────────────────────────────────');
    console.log(`   Username:  ${DEFAULT_ADMIN.username}`);
    console.log(`   Password:  ${DEFAULT_ADMIN.password}`);
    console.log(`   Email:     ${DEFAULT_ADMIN.email}`);
    console.log('────────────────────────────────────────────────');
    
    // Note: Updated to the new secure entry path as per latest security requirements
    console.log('\n🔗 Secure Portal: http://localhost:3000/admin/secure-entry-44\n');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Reset Failed:', error.message);
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    process.exit(1);
  }
}

resetDatabase();
