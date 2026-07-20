import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where lead notifications land. Set this in Vercel's Environment
// Variables once the mailbox exists — see SETUP-CHECKLIST.md.
const TO_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || "";
// Resend requires the "from" address to be on a domain you've verified
// with them (see checklist step 5). Falls back to their shared test
// sender so the form doesn't hard-fail before that's set up.
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, business, email, focus, message, _honey } = body;

  // Basic honeypot spam check
  if (_honey) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !business || !email || !focus) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!TO_EMAIL) {
    console.error("LEAD_NOTIFICATION_EMAIL is not set");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: `AgentWorksAI leads <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New lead: ${business}`,
      text: [
        `Name: ${name}`,
        `Business: ${business}`,
        `Email: ${email}`,
        `Biggest time-sink: ${focus}`,
        `Message: ${message || "(none)"}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
