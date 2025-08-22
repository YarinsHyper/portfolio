import { useState, useEffect } from 'react'

export default function TermsOfUsePopup() {
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
        Terms of Use
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
              Terms of Use
            </h2>
            <div style={{ fontSize: 16, lineHeight: 1.7, color: '#333' }}>
              <section style={{ marginBottom: 16 }}>
                <strong>By using this website (<span style={{ fontWeight: 500 }}>yarinbenisty.com</span>), you agree to the following terms and conditions:</strong>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Purpose of the Site</strong>
                <p>
                  This website is provided for informational purposes only, to showcase my personal work, projects, and professional experience.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Intellectual Property</strong>
                <p>
                  Unless otherwise noted, all content on this site—including text, images, and design—is owned by me and protected under copyright laws. You may view and share the site for personal, non-commercial purposes, but you may not reproduce, modify, or distribute the content without prior written permission.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Accuracy of Information</strong>
                <p>
                  While I strive to ensure that the information presented on this site is accurate and up to date, I cannot guarantee completeness or accuracy. The content is provided “as is” without warranties of any kind.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>External Links</strong>
                <p>
                  This site may include links to third-party websites. I am not responsible for the content, accuracy, or practices of any third-party sites.
                </p>
              </section>
              <section style={{ marginBottom: 16 }}>
                <strong>Limitation of Liability</strong>
                <p>
                  I am not liable for any damages or losses that may arise from the use or inability to use this website, including technical issues or reliance on its content.
                </p>
              </section>
              <section>
                <strong>Changes to These Terms</strong>
                <p>
                  I may update these Terms of Use from time to time. Any changes will be posted on this page with a revised date.
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