import { NextResponse } from 'next/server'

type BookingPayload = {
  email: string
  name: string
  phone: string
  plan: string
  price: number | string
  date: string
  time: string
  note?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BookingPayload>

    if (!body?.email || !body?.name || !body?.plan || !body?.date || !body?.time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.SENDGRID_API_KEY || process.env.SENDGRID_API
    const templateId = process.env.SENDGRID_TEMPLATE_ID
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'no-reply@finelineclinic.co.uk'
    const fromName = process.env.SENDGRID_FROM_NAME || 'Fine Line Clinic'
    const adminEmail = process.env.SENDGRID_ADMIN_EMAIL

    if (!apiKey || !templateId) {
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
    }

    const dynamicData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      plan: body.plan,
      price: String(body.price ?? ''),
      date: body.date,
      time: body.time,
      note: body.note ?? '',
    }

    const personalizations: any[] = [
      {
        to: [{ email: body.email!, name: body.name }],
        dynamic_template_data: dynamicData,
      },
    ]

    if (adminEmail) {
      personalizations.push({
        to: [{ email: adminEmail }],
        dynamic_template_data: dynamicData,
      })
    }

    const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: fromEmail, name: fromName },
        personalizations,
        template_id: templateId,
      }),
    })

    if (!sendgridResponse.ok) {
      const text = await sendgridResponse.text()
      return NextResponse.json({ error: 'Failed to send email', details: text }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}


