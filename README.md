# love-letter

A folded letter that unfolds in three, built with React + GSAP.
CSS declares the hinge geometry, GSAP runs the whole unfold sequence.

Tap the letter to open it, tap again to fold it back.

## Run it

```bash
npm install
npm run dev
```

## Editing it

- **`src/content.js`** — the letter itself: date, greeting, paragraphs, sign-off,
  and the two photos. The paper measures itself against this text, so write as
  much as you like and it stays readable.
- **`public/`** — the photos. Replace `photo-1.jpg` / `photo-2.jpg` with anything;
  `pos` in `content.js` nudges the crop.
- **`src/Stickers.jsx`** — the flowers. Entries in `STICKERS` place them: `x`/`y`
  are percentages of the sheet, so negative or over 100 hangs off the edge.

## How the fold works

The middle third is the anchor; the top and bottom thirds hang off it in hinge
wrappers and rotate ±180° about their creases. All three panels hold the *same*
full-height sheet, each shifted up by one panel and clipped — so the words and
photos read as one continuous page across the folds.
