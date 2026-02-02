import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // TODO: Integrate with Substack API or email service
    // For now, just log it (you'll replace this with real integration)
    console.log('New subscriber:', email)

    // Substack integration example (uncomment when ready):
    // const response = await fetch('https://your-substack.substack.com/api/v1/subscribers', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.SUBSTACK_API_KEY}`,
    //   },
    //   body: JSON.stringify({ email }),
    // })

    // For MVP, store in a simple JSON file or use a free service like Zapier webhook
    const zapierWebhook = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhook) {
      await fetch(zapierWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: 'landing_page'
        }),
      })
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
