import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, name, message } = reqBody;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Mail options with HTML design
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIEVER_EMAIL,
      subject: `New Client `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            
            <h2 style="color: #333;">New Message Received</h2>
            <p style="font-size: 16px; color: #555;">You have a new contact form submission:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 120px;">Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
              </tr>
            </table>

            <p style="margin-top: 20px; font-size: 14px; color: #888;">This email was generated automatically from your website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
