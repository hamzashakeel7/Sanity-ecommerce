import nodemailer from "nodemailer";

export async function POST(request) {
  const { cartDetails, totalPrice } = await request.json();

  const itemsHtml = Object.values(cartDetails)
    .map(
      (item) => `
      <div style="margin-bottom: 20px;">
        <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;"/>
        <p>${item.name} (Qty: ${item.quantity}) - PKR ${item.price}</p>
      </div>
    `
    )
    .join("");

  const emailContent = `
    <h2>Thank you for your order!</h2>
    <p>Here are your cart items:</p>
    ${itemsHtml}
    <p>Total Price: PKR ${totalPrice}</p>
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "Order Confirmation",
      html: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error: error.message }),
      { status: 500 }
    );
  }
}
