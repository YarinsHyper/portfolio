import { useState, useEffect } from 'react'

export default function TosPopup() {
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
        Privacy Policy
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
              Privacy Policy
            </h2>
            <div style={{ fontSize: 16, lineHeight: 1.7, color: '#333' }}>
              <section style={{ marginBottom: 16 }}>
                <strong>Privacy Policy</strong>
                <p>
                  This website (<strong>yarinbenisty.com</strong>) is a personal portfolio site intended to showcase my work, experience, and projects. I respect your privacy and am committed to being transparent about how your information is handled.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Information I Collect</strong>
                <ul style={{ paddingLeft: 20 }}>
                  <li>
                    <strong>Information you provide:</strong> If you choose to contact me through a form or email link, I may collect your name, email address, and any message you send.
                  </li>
                  <li>
                    <strong>Information collected automatically:</strong> Like most websites, basic technical information may be collected, such as your IP address, browser type, and usage data. This may be done through cookies or analytics tools (e.g., Google Analytics).
                  </li>
                </ul>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>How I Use Your Information</strong>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Responding to inquiries or messages you send me.</li>
                  <li>Understanding website traffic and improving the site’s performance.</li>
                </ul>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Sharing of Information</strong>
                <p>
                  I do not sell, rent, or trade your personal information. Information may only be shared with trusted service providers (such as hosting or analytics services) to operate this site.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Cookies and Analytics</strong>
                <ul style={{ paddingLeft: 20 }}>
                  <li>Track website performance.</li>
                  <li>Understand visitor interaction with the content.</li>
                </ul>
                <p>
                  You can disable cookies in your browser settings if you prefer.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Data Security</strong>
                <p>
                  Reasonable steps are taken to protect your information, but please note that no system is completely secure.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Your Rights</strong>
                <p>
                  If you would like to request access to, correction of, or deletion of your personal information, you can contact me at:{" "}
                  <a
                    href="mailto:itshyperex@gmail.com"
                    style={{ fontWeight: 500, color: "#1976d2", textDecoration: "underline" }}
                  >
                    itshyperex@gmail.com
                  </a>.
                </p>
              </section>
              <section>
                <strong>Changes to This Policy</strong>
                <p>
                  This Privacy Policy may be updated from time to time. Any updates will be posted on this page with a revised date.
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