import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, fullName, email, phone, message } = await req.json();

    // normalize: if frontend sends fullName, map it to name
    const payload = {
      name: name || fullName, 
      email,
      phone,
      message,
    };

    const response = await fetch(
      "https://mjtechsolutions72.app.n8n.cloud/webhook/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}