import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  role: {
    type: String,
    enum: ['student', 'consultant'],
    default: 'student',
  },
  // Student Specific Fields
  phone: String,
  college: String,
  interestedIn: [String],
  // Consultant Specific Fields
  expertise: String,
  rate: Number,
  whatsapp: String,
  bio: String,
  profileImage: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
