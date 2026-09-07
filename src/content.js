// ─────────────────────────────────────────────────────────────
//  EDIT YOUR LETTER HERE. Nothing else needs touching.
//  The paper measures itself against this text, so add or cut as
//  much as you like — it grows and stays readable.
//  Photos: drop files in /public and point `src` at them
//  (e.g. src: '/us-in-kyoto.jpg').
// ─────────────────────────────────────────────────────────────

export const cover = {
  note: 'A letter for my baby',
  hint: 'tap to open',
}

export const letter = {
  date: '7 September 2026',
  greeting: 'Hi, Love.',
  paragraphs: [
    'Time really flies so fast. I can’t believe it’s been already 7 months. I still remember the first time we met, and how beautiful your eyes were when I first saw it. Happy 7th Monthsary, Love! I love you so much.',
    'I know I don’t always say it, but I really appreciate you and everything you do for me. I love the handwritten letters you gave, the cute flowers you made, the time you spend with me, and even the little things like always bringing a handkerchief and fan whenever we go somewhere hot. I appreciate how you take care of me, check on me, remind me to get a haircut, help me choose clothes, remind me to trim my nails, and all the other things you do for me.',
    'I really appreciate having you in my life, Love. You make me feel cared for and loved, and I’m very grateful for you.',
    'You’re the person I’d look for in every room, the first person I want beside me in my future plans, travels, and adventures. You’re the person I want to marry someday and build a life with.',
    'And from a garden full of flowers, you’d still be the one I’d pick.',
    'Thank you for everything, Love. Seven months with you, and I still look forward to everything that’s ahead of us.',
  ],
  closing: 'Happy 7th Monthsary!',
  signature: 'I love you so much, baby.',
}

// The two photos taped onto the letter. Swap the files in /public, or
// point one at '/photo-3.jpg' (the restaurant one) if you'd rather use that.
// `pos` nudges the crop — '50% 30%' keeps a face near the top of frame.
export const photos = [
  { src: '/photo-1.jpg', alt: 'The two of us', caption: 'us', pos: '50% 42%' },
  { src: '/photo-2.jpg', alt: 'You', caption: 'you', pos: '50% 32%' },
]
