import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import BookingConfirmationEmail from '@/components/emails/BookingConfirmationEmail';
import ContactFormEmail from '@/components/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    let emailResponse;

    if (type === 'contact') {
      emailResponse = await resend.emails.send({
        from: 'MG Auto <contact@your-domain.com>',
        to: ['your-email@example.com'], // Replace with your email
        subject: `New Contact Form Message from ${data.name}`,
        react: ContactFormEmail(data),
        reply_to: data.email,
      });
    } else if (type === 'booking') {
      emailResponse = await resend.emails.send({
        from: 'MG Auto <bookings@your-domain.com>',
        to: [data.email],
        subject: 'Your Booking Confirmation - MG Auto',
        react: BookingConfirmationEmail(data),
      });
    } else {
      throw new Error('Invalid email type');
    }

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
