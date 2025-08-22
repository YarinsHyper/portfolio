import { useState, useEffect } from 'react'

export default function AccessibilityStatementPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button style={{ fontWeight: '400', color: "white", fontSize: '14px' }} onClick={() => setOpen(true)}>
        Accessibility Statement
      </button>
      {open && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            position: 'relative',
            background: 'white',
            padding: 24,
            borderRadius: 12,
            maxWidth: 600,
            width: '90vw', // Responsive width for smartphones
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            {/* X exit button in top right */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'transparent',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer'
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 28, fontWeight: 700, textAlign: 'center', color:"black" }}>
              Accessibility Statement
            </h2>
            <div style={{ fontSize: 16, lineHeight: 1.7, color: '#333' }}>
              <section style={{ marginBottom: 16 }}>
                <strong>Commitment to Accessibility</strong>
                <p>
                  I am committed to making <strong>yarinbenisty.com</strong> accessible to all users, regardless of ability or technology. My goal is to provide a website experience that is inclusive and usable for everyone.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Measures Taken</strong>
                <p>To support accessibility, I have:</p>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Used semantic HTML for structure and readability.</li>
                  <li>Added alternative text for images wherever possible.</li>
                  <li>Ensured keyboard navigation works throughout the site.</li>
                  <li>Considered color contrast and legible typography.</li>
                  <li>Kept animations and motion minimal for ease of use.</li>
                </ul>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Standards</strong>
                <p>
                  This site aims to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level where reasonably possible.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Limitations</strong>
                <p>
                  While I strive to ensure accessibility, some content may not fully meet all guidelines. I continue to improve the site and welcome feedback to identify and address issues.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Feedback</strong>
                <p>
                  If you encounter any difficulty accessing content on this website, please contact me so I can help:<br />
                  📧{" "}
                  <a
                    href="mailto:itshyperex@gmail.com"
                    style={{ fontWeight: 500, color: "#1976d2", textDecoration: "underline" }}
                  >
                    itshyperex@gmail.com
                  </a>
                </p>
                <p>
                  I aim to respond to accessibility feedback within a reasonable timeframe and will do my best to address any issues.
                </p>
              </section>
              <section>
                <strong>Date of Statement</strong>
                <p>
                  This Accessibility Statement was last updated on <span style={{ fontWeight: 500 }}>August 22, 2025</span>.
                </p>
              </section>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '8px 24px',
                fontSize: 16,
                fontWeight: 600,
                background: '#222',
                color: 'white',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}