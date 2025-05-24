import { NextRequest, NextResponse } from "next/server";
import { stripe, SUBSCRIPTION_PLANS } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const { planId, customerEmail } = await request.json();

    if (!planId || !customerEmail) {
      return NextResponse.json(
        { error: "Plan ID and customer email are required" },
        { status: 400 }
      );
    }

    const plan = SUBSCRIPTION_PLANS[planId as keyof typeof SUBSCRIPTION_PLANS];
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan ID" }, { status: 400 });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/cancel`,
      metadata: {
        planId: plan.id,
        planName: plan.name,
      },
      subscription_data: {
        metadata: {
          planId: plan.id,
          planName: plan.name,
        },
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
