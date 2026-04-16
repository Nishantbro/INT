import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export async function PATCH(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    // Verify token
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const data = await req.json();

    await dbConnect();

    // Prevent direct password updates from this route for security
    // We can add a separate password change route later
    delete data.password;
    delete data.email; // Email is usually immutable/needs verification to change
    delete data.role;

    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      { $set: data },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Update API Error:', error);
    return NextResponse.json({ message: 'Failed to update profile' }, { status: 500 });
  }
}
