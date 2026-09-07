import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { cover, letter, photos } from './content'
import { STICKERS, Heart } from './Stickers'

const ROTS = STICKERS.map((s) => s.r)
// works whether the site is served from / or from /love-letter/
const asset = (f) => import.meta.env.BASE_URL + f.replace(/^\//, '')
const reduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* The same full-height sheet lives in all three panels, shifted up by one
   panel each time, so the text and photos read as one continuous page. */
function Sheet({ i, measuring }) {
  return (
    <div className="sheet" style={{ top: `calc(var(--panel) * ${-i})` }} aria-hidden={i !== 0}>
      <p className="sheet__date" data-fade>{letter.date}</p>
      <h1 className="sheet__greeting" data-fade>{letter.greeting}</h1>
      <p className="sheet__p" data-fade>
        {letter.paragraphs[0]}
      </p>

      {photos.length > 0 && (
        <div className="photos">
          {photos.map((p) => (
            <figure className="photo" key={p.src} data-fade>
              <img src={measuring ? undefined : asset(p.src)} alt={p.alt} draggable="false" style={{ objectPosition: p.pos }} />
            </figure>
          ))}
        </div>
      )}

      {letter.paragraphs.slice(1).map((t, n) => (
        <p className="sheet__p" key={n} data-fade>
          {t}
        </p>
      ))}

      <span className="sheet__rule" data-fade />

      <div className="sheet__sign-block">
        <p className="sheet__closing" data-fade>{letter.closing}</p>
        <p className="sheet__sign" data-fade>{letter.signature}</p>
      </div>
    </div>
  )
}

function Panel({ i, kind }) {
  return (
    <div className={`panel panel--${kind}`}>
      <div className="face face--front">
        <Sheet i={i} />
        <div className={`shade shade--${kind}`} />
      </div>
      <div className="face face--back">
        {kind === 'top' && (
          <div className="cover">
            <span className="cover__heart">
              <Heart />
            </span>
            <p className="cover__note">{cover.note}</p>
            <span className="cover__rule" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const root = useRef(null)
  const tl = useRef(null)
  const measure = useRef(null)
  const [open, setOpen] = useState(reduced)

  /* The paper is a fixed-size page, so its height has to be a real number
     before the three panels can each take a third of it. Measure an
     unconstrained copy of the sheet and publish it as --measured; the
     ResizeObserver keeps it right through web-font load and resizes. */
  useLayoutEffect(() => {
    const el = measure.current
    const apply = () => {
      const h = Math.ceil(el.getBoundingClientRect().height / 3) * 3
      if (h <= 0) return
      const root = document.documentElement.style
      root.setProperty('--measured', h + 'px')
      // a long letter means a tall folded packet; shrink it just enough to
      // stay fully on screen, so "tap to open" is never below the fold
      root.setProperty('--fit', Math.min(1, (window.innerHeight - 28) / (h / 3)).toFixed(3))
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    window.addEventListener('resize', apply)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', apply)
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut' } })

      t.fromTo('.letter', { rotationX: 9, scale: 1.03 }, { rotationX: 0, scale: 1, duration: 1.7 }, 0)
        .to('.hint', { autoAlpha: 0, duration: 0.3 }, 0)
        .fromTo('.glow--top', { scaleY: 0, z: -1 }, { scaleY: 1, z: -1, duration: 0.5 }, 0.55)
        .fromTo('.glow--bottom', { scaleY: 0, z: -1 }, { scaleY: 1, z: -1, duration: 0.5 }, 1.05)
        .fromTo(
          '.panel--top',
          { rotationX: -180, transformOrigin: '50% 100%' },
          { rotationX: 0, duration: 1, transformOrigin: '50% 100%' },
          0.05,
        )
        .fromTo(
          '.panel--bottom',
          { rotationX: 180, transformOrigin: '50% 0%' },
          { rotationX: 0, duration: 1, transformOrigin: '50% 0%' },
          0.55,
        )
        .to('.shade', { opacity: 0.26, duration: 0.9 }, 0.8)
        .fromTo(
          '.letter [data-fade]',
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            // position within its own sheet, so the same line in all three
            // panel copies fades at the same moment
            stagger: (i, el) =>
              [...el.closest('.sheet').querySelectorAll('[data-fade]')].indexOf(el) * 0.085,
          },
          1.5,
        )
        .fromTo(
          '.sticker',
          { autoAlpha: 0, scale: 0.3, rotation: (i) => ROTS[i] - 45 },
          {
            autoAlpha: 1,
            scale: 1,
            rotation: (i) => ROTS[i],
            duration: 0.55,
            stagger: { each: 0.022, from: 'random' },
            ease: 'back.out(2.4)',
          },
          1.35,
        )

      tl.current = t
      if (reduced) t.progress(1).pause()
    }, root)

    return () => ctx.revert()
  }, [])

  const toggle = (next) => {
    const t = tl.current
    if (!t) return
    if (reduced) t.progress(next ? 1 : 0).pause()
    else next ? t.play() : t.reverse()
    setOpen(next)
  }

  return (
    <div className="app" ref={root}>
      <div className="measure" ref={measure} aria-hidden="true">
        <Sheet i={0} measuring />
      </div>

      <div className={`float${open ? ' is-open' : ''}`}>
        <div className="stage">
          <div className="letter">
            <div className="glow glow--top" />
            <div className="glow glow--mid" />
            <div className="glow glow--bottom" />

            <Panel i={1} kind="mid" />
            <div className="hinge hinge--top">
              <Panel i={0} kind="top" />
            </div>
            <div className="hinge hinge--bottom">
              <Panel i={2} kind="bottom" />
            </div>

            <div className="stickers">
              {STICKERS.map(({ C, x, y, s, edge }, n) => (
                <div
                  className="sticker"
                  key={n}
                  style={{
                    left: `${x}%`,
                    [edge === 'bottom' ? 'bottom' : 'top']: `${y}%`,
                    width: `${s}%`,
                  }}
                >
                  <C />
                </div>
              ))}
            </div>
          </div>

          <p className="hint">
            <span>{cover.hint}</span>
          </p>

          <button
            className="opener"
            onClick={() => toggle(!open)}
            aria-label={open ? 'Fold the letter' : 'Open the letter'}
          />
        </div>
      </div>
    </div>
  )
}
