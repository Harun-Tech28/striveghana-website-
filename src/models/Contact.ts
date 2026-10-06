import mongoose, { Schema, Model } from 'mongoose'

export interface IContact {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  createdAt: Date
  read: boolean
}

const ContactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  },
})

// Prevent model recompilation in development
const Contact: Model<IContact> = 
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema)

export default Contact
