# AgentWorksAI — launch checklist (v2: Next.js + Resend, matching progymmaintenance.com)

This replaces the earlier static-HTML version. What changed and why:

| | v1 (static) | v2 (this one) |
|---|---|---|
| Stack | Plain HTML/CSS/JS | Next.js 14 + TypeScript + Tailwind |
| Lead email | FormSubmit.co (free, generic) | Resend (transactional API, same as progymmaintenance.com) |
| AI/search visibility | None | JSON-LD schema, `robots.txt` allowing AI crawlers, `llms.txt` |

I can't buy the domain, pay Vercel, or create the Resend/Google
Workspace accounts — those all need your card and logins. Everything
below is the exact sequence.

## 1. Buy the domain — through Vercel directly (~5 min)

You asked to buy it through Vercel rather than Namecheap, and that's
a real, current Vercel feature: buy it from inside the dashboard and
Vercel auto-configures DNS, so you skip the whole "copy these DNS
records into Namecheap" step entirely.

1. Go to https://vercel.com/domains and search `agentworksai.com`
   (or `.ai` / `.io` if `.com` is taken — I have **not** verified
   live availability for any of these).
2. Buy it right there. Vercel sets nameservers and renewals
   automatically — no separate registrar login to manage.
3. Confirm your registrant email when Vercel emails you (required or
   the domain can go on hold).

If you'd rather keep every domain in one place with your existing
budgetperiscope.com (Namecheap), that's also fine — just skip to step
3 and use the "add a custom domain" flow with Namecheap DNS records
instead.

## 2. Push the code to GitHub (~5 min)

```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <your-new-repo-url>
git push -u origin main
```

## 3. Deploy on Vercel (~5 min)

1. https://vercel.com/new → import the repo.
2. Framework preset: **Next.js** (auto-detected, no config needed).
3. Deploy.
4. **Plan:** Vercel Pro at $20/month, same as discussed — Settings →
   Billing → Upgrade.
5. Project → Settings → Domains → attach the domain from step 1 (if
   bought through Vercel, this is closer to instant than a
   third-party domain, since DNS is already pointed correctly).

## 4. Set up Resend for the lead notification email (~10 min)

This is the piece that mirrors what worked on progymmaintenance.com —
a real transactional email API instead of a free forwarding service.

1. https://resend.com → sign up (free tier: 3,000 emails/month, 100/day
   — more than enough for a lead form).
2. Resend → Domains → Add Domain → enter your new domain.
3. Add the DNS records Resend shows you. If the domain is on Vercel's
   nameservers, add them under Project → Settings → Domains → DNS
   Records in the Vercel dashboard; otherwise add them wherever the
   domain's DNS lives.
4. Once verified (can take a few hours), get your API key: Resend →
   API Keys → Create.
5. In Vercel: Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — the key from step 4
   - `LEAD_NOTIFICATION_EMAIL` — where leads should land, e.g.
     `jamieson@agentworksai.com`
   - `LEAD_FROM_EMAIL` — an address on the verified domain, e.g.
     `leads@agentworksai.com` (leave unset and it'll fall back to
     Resend's shared test sender, which works but looks less
     professional)
6. Redeploy (Vercel → Deployments → ⋯ → Redeploy) so the new env vars
   take effect.
7. Submit the live form once yourself to confirm the email arrives.

## 5. Set up your actual mailbox for outbound (~15 min)

Resend (above) handles the *lead notification* email — a separate
thing from the mailbox you'll send outbound prospecting from. Same
Google Workspace pattern as thesalesguybook.com and freedomcapital.ca:

1. https://workspace.google.com/ → start setup on the new domain.
2. Verify domain ownership (TXT record — same DNS panel as step 4).
3. Create `jamieson@agentworksai.com`.
4. Confirm SPF/DKIM/DMARC (Workspace walks you through it — you've
   done this before on thesalesguybook.com).
5. New domains need to warm up — modest, increasing volume of real
   1:1 emails for 2–3 weeks before any real cold-outbound volume, or
   you risk the spam folder.

## 6. Fill in the remaining pricing (~2 min)

Starter is set to $500/mo. Growth and Full stack are still marked
"Custom" in `app/page.tsx` (search for `price-amount`) — I didn't
invent numbers for those since you've only given me the starting
price so far.

## What's already done

- Full responsive site, Next.js 14 + TypeScript + Tailwind
  (`app/page.tsx`, `app/LeadForm.tsx`, `app/globals.css`)
- Lead form wired to a real API route (`app/api/lead/route.ts`) using
  Resend, with a honeypot spam field — just needs the env vars in
  step 4
- JSON-LD business schema in `app/layout.tsx`, plus `public/robots.txt`
  (explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
  and `public/llms.txt` — the same AI-visibility pattern used on
  progymmaintenance.com
- Five ranked use cases, each sourced to the SBE Council's 2026 Small
  Business Tech Use Survey, cited in the footer and in `llms.txt`

## One honest caveat

I ran `tsc --noEmit` here and it's clean — no type errors. I could
**not** run a full `next build` in this sandbox because it can't
reach fonts.googleapis.com (a restriction on my end, not a bug in the
code). Vercel's build servers have normal internet access, so this
should build fine there — but that first deploy in step 3 is the real
end-to-end proof, not something I could fully confirm myself.
