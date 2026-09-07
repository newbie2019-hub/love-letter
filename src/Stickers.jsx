// Little paper-cut flowers. Add/remove entries in STICKERS to redecorate —
// x/y are % of the unfolded sheet (negative or >100 hangs over the edge),
// s is width as % of sheet width, r is rotation in degrees.

const Daisy = () => (
  <svg viewBox="0 0 48 48">
    {[0, 1, 2, 3, 4].map((i) => (
      <ellipse
        key={i}
        cx="24"
        cy="12.5"
        rx="6.4"
        ry="10.6"
        fill="#FFF9FB"
        stroke="#E7C6D1"
        strokeWidth="1.1"
        transform={`rotate(${i * 72} 24 24)`}
      />
    ))}
    <circle cx="24" cy="24" r="6.2" fill="#F4C86A" />
    <circle cx="24" cy="24" r="6.2" fill="none" stroke="#DFA83E" strokeWidth="1" opacity=".55" />
  </svg>
)

const Blossom = () => (
  <svg viewBox="0 0 44 44">
    {[0, 1, 2, 3].map((i) => (
      <circle
        key={i}
        cx="22"
        cy="11.5"
        r="9"
        fill="#EEDCF2"
        stroke="#DCC4E4"
        strokeWidth="1"
        transform={`rotate(${i * 90} 22 22)`}
      />
    ))}
    <circle cx="22" cy="22" r="5" fill="#F7EEC4" />
  </svg>
)

const Bud = () => (
  <svg viewBox="0 0 40 56">
    <path d="M20 54C20 42 18.5 36 15.5 29.5" stroke="#9EBAA1" strokeWidth="2.3" fill="none" strokeLinecap="round" />
    <path d="M15 41C9 39 6 34 6.5 28C13 28 16 33 15 41Z" fill="#BFD6BE" stroke="#A3C0A3" strokeWidth="1" strokeLinejoin="round" />
    <path d="M20 5.5C29.5 12 30.5 24 20 30.5C9.5 24 10.5 12 20 5.5Z" fill="#F7C9D4" stroke="#E5A6B7" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M20 8.5C24 14.5 24 24 20 29.5" stroke="#EFB0C1" strokeWidth="1" fill="none" opacity=".85" />
  </svg>
)

const Sprig = () => (
  <svg viewBox="0 0 44 62">
    <path d="M22 60C22 42 22 22 22 9" stroke="#9EBAA1" strokeWidth="2.1" fill="none" strokeLinecap="round" />
    {[
      [16, -38],
      [27, 38],
      [37.5, -34],
      [47, 32],
    ].map(([y, rot], i) => {
      const cx = 22 + (rot < 0 ? -8 : 8)
      return (
        <ellipse
          key={i}
          cx={cx}
          cy={y}
          rx="4.3"
          ry="8"
          fill="#C6DAC3"
          stroke="#A5C1A4"
          strokeWidth=".9"
          transform={`rotate(${rot} ${cx} ${y})`}
        />
      )
    })}
    <circle cx="22" cy="7" r="4.2" fill="#F4CBD6" stroke="#E5A6B7" strokeWidth="1" />
  </svg>
)

const Berries = () => (
  <svg viewBox="0 0 44 44">
    <path d="M22 42V26M22 30L12.5 20.5M22 30L31.5 20.5" stroke="#A9C0A7" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <circle cx="22" cy="20" r="7" fill="#E9A7B0" stroke="#D68B98" strokeWidth="1" />
    <circle cx="11" cy="15.5" r="5.4" fill="#F3C2C9" stroke="#DFA3AD" strokeWidth="1" />
    <circle cx="33" cy="15.5" r="5.4" fill="#F3C2C9" stroke="#DFA3AD" strokeWidth="1" />
    <circle cx="19.8" cy="17.6" r="1.9" fill="#fff" opacity=".55" />
  </svg>
)

export const Heart = () => (
  <svg viewBox="0 0 48 44">
    <path
      d="M24 39.2C24 39.2 5.2 27.4 5.2 16.6C5.2 10.2 10.2 5.4 16.3 5.4C20 5.4 22.8 7.4 24 9.8C25.2 7.4 28 5.4 31.7 5.4C37.8 5.4 42.8 10.2 42.8 16.6C42.8 27.4 24 39.2 24 39.2Z"
      fill="#F5AEBE"
      stroke="#DE8797"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <ellipse cx="15.5" cy="14.5" rx="4.4" ry="3" fill="#fff" opacity=".5" transform="rotate(-24 15.5 14.5)" />
    <circle cx="21.2" cy="11.4" r="1.5" fill="#fff" opacity=".38" />
  </svg>
)

const Cosmos = () => (
  <svg viewBox="0 0 44 44">
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <ellipse
        key={i}
        cx="22"
        cy="10"
        rx="3.6"
        ry="9.5"
        fill="#FBE0E8"
        stroke="#EFC3D2"
        strokeWidth=".9"
        transform={`rotate(${i * 45} 22 22)`}
      />
    ))}
    <circle cx="22" cy="22" r="4.4" fill="#F6D976" stroke="#E0B94A" strokeWidth=".9" />
  </svg>
)

const Lavender = () => (
  <svg viewBox="0 0 30 58">
    <path d="M15 56C15 44 15 34 15 26" stroke="#9EBAA1" strokeWidth="2" fill="none" strokeLinecap="round" />
    <ellipse cx="9" cy="42" rx="3.4" ry="6" fill="#C6DAC3" stroke="#A5C1A4" strokeWidth=".8" transform="rotate(-32 9 42)" />
    <ellipse cx="21" cy="47" rx="3.4" ry="6" fill="#C6DAC3" stroke="#A5C1A4" strokeWidth=".8" transform="rotate(32 21 47)" />
    {[
      [15, 5],
      [10.5, 10],
      [19.5, 10],
      [15, 14.5],
      [11, 19],
      [19, 19],
      [15, 23],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill="#DCC9EC" stroke="#C4AADD" strokeWidth=".9" />
    ))}
  </svg>
)

const Forget = () => (
  <svg viewBox="0 0 46 40">
    <path
      d="M23 38C21 32 16 30 11 27M23 38C25 32 30 30 35 27"
      stroke="#A8BFA6"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    {[
      [11, 20, 1],
      [23, 13, 1.15],
      [35, 21, 0.95],
    ].map(([cx, cy, k], n) => (
      <g key={n}>
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy - 5 * k}
            rx={2.8 * k}
            ry={4.2 * k}
            fill="#DBE5F6"
            stroke="#BFCFEA"
            strokeWidth=".8"
            transform={`rotate(${i * 72} ${cx} ${cy})`}
          />
        ))}
        <circle cx={cx} cy={cy} r={2.2 * k} fill="#F7E9A8" />
      </g>
    ))}
  </svg>
)

export const STICKERS = [
  { C: Daisy, x: -5, y: 2, s: 12, r: -16 },
  { C: Sprig, x: 88, y: -3, s: 13, r: 14 },
  { C: Cosmos, x: 42, y: -4, s: 9, r: 8 },
  { C: Bud, x: -5, y: 13, s: 10, r: -24 },
  { C: Lavender, x: 91, y: 10, s: 9, r: 18 },
  { C: Forget, x: -6, y: 26, s: 11, r: 12 },
  { C: Blossom, x: 91, y: 23, s: 10, r: 18 },
  { C: Sprig, x: -6, y: 39, s: 12, r: -160 },
  { C: Cosmos, x: 91, y: 36, s: 10, r: -12 },
  { C: Berries, x: -5, y: 53, s: 11, r: -10 },
  { C: Daisy, x: 92, y: 49, s: 9, r: 26 },
  { C: Lavender, x: -6, y: 65, s: 9, r: -20 },
  { C: Berries, x: 91, y: 62, s: 11, r: 14 },
  { C: Blossom, x: -5, y: 78, s: 10, r: -8 },
  { C: Bud, x: 90, y: 75, s: 10, r: 16 },
  { C: Sprig, x: -6, y: 88, s: 12, r: 172 },
  { C: Forget, x: 90, y: 88, s: 11, r: -14 },
  { C: Cosmos, x: 38, y: 96, s: 9, r: -8 },
]
