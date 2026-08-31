# Zireh Program Delivery House

Static website built from the August 2026 Zireh Master Deck Template.

**Live repo:** https://github.com/reqsgjh/zireh-program-delivery-house

**Palette**

- Navy `#233746`
- Deep teal `#31585A`
- Rust `#B66F54`
- Terracotta `#C98262`
- Cream `#F4F1EA`
- Sage `#6F887C`
- Mist `#DDE5E1`
- Paper `#FBFAF6`

Typography: Noto Sans.

## Local preview

No build step. From this folder:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Host on Cloudflare Pages

1. Sign in at https://dash.cloudflare.com
2. Go to **Workers & Pages** → **Create** → **Pages** → **Import an existing Git repository**
3. Authorise GitHub and select `reqsgjh/zireh-program-delivery-house`
4. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | None |
   | Build command | leave empty or `exit 0` |
   | Build output directory | `/` |

5. Click **Save and Deploy**
6. Cloudflare issues a `*.pages.dev` URL. Attach `zireh.com.au` under **Custom domains**

Direct upload option (no Git): **Workers & Pages** → **Create** → **Pages** → **Upload assets**, then upload the contents of this folder.

## Before public launch

- Replace `[insert email]` and `[insert phone]` on the Contact page
- Confirm case-study outcomes and written references
- Replace the Privacy page with an approved policy
- The PMO page is marked **DRAFT ONLY**, matching the source deck
- Connect the workshop form to Formspree, Basin, or a Cloudflare Pages Function
