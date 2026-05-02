/**
 * Admin Seeder Script
 * Run: node scripts/seedAdmin.js
 * Creates the first admin user in MongoDB
 */

const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not set in .env')
  process.exit(1)
}

const adminSchema = new mongoose.Schema({
  username: String, email: String, password: String,
  name: String, avatar: String, role: String,
}, { timestamps: true })

const Admin = mongoose.model('Admin', adminSchema)

async function seed() {
  await mongoose.connect(MONGODB_URI)
  console.log('✅ Connected to MongoDB')

  const existing = await Admin.countDocuments()
  if (existing > 0) {
    console.log('⚠️  Admin already exists. Deleting and recreating to fix hashing issue...')
    await Admin.deleteMany({})
  }

  await Admin.create({
    username: 'admin',
    email: 'admin@xenonedge.com',
    password: 'Admin@123', // Mongoose pre-save hook will hash this automatically
    name: 'XenonEdge Admin',
    role: 'admin',
    avatar: '',
  })

  console.log('✅ Admin created successfully!')
  console.log('   Username: admin')
  console.log('   Password: Admin@123')
  console.log('   ⚠️  Please change the password after first login!')
  await mongoose.disconnect()
}

seed().catch(err => { console.error(err); process.exit(1) })
