import { NextResponse } from "next/server"

type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  company?: string
  roles?: string[] | string
  headcount?: string | number
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const { firstName, lastName, email, phone, company, roles, headcount } = body

    const apiKey = process.env.ATTIO_API_KEY
    if (!apiKey) {
      console.error("[v0] ATTIO_API_KEY is not set")
      return NextResponse.json({ error: "Error creating record in Attio" }, { status: 500 })
    }

    const rolesText = Array.isArray(roles) ? roles.join(", ") : roles || ""

    const attioBody = {
      data: {
        values: {
          email_addresses: email ? [email] : [],
          name: [
            {
              first_name: firstName,
              last_name: lastName,
              full_name: `${firstName ?? ""} ${lastName ?? ""}`.trim(),
            },
          ],
          phone_numbers: phone
            ? [
                {
                  original_phone_number: phone,
                  phone_number: phone,
                },
              ]
            : [],
          description: `Website-Anfrage von ${company || "unbekannte Firma"}.
Rollen: ${rolesText}
Gesuchte Mitarbeiter: ${headcount ?? ""}`,
        },
      },
    }

    const attioResponse = await fetch("https://api.attio.com/v2/objects/people/records", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attioBody),
    })

    if (!attioResponse.ok) {
      const errorText = await attioResponse.text()
      console.error("[v0] Attio API error:", attioResponse.status, errorText)
      return NextResponse.json({ error: "Error creating record in Attio" }, { status: 500 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error creating record in Attio:", error)
    return NextResponse.json({ error: "Error creating record in Attio" }, { status: 500 })
  }
}
