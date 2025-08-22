"use client"
import Head from 'next/head'
import React, { useState } from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import TosPopup from '@/components/PrivacyPolicyPopup'
import TermsOfUsePopup from '@/components/TermsOfUsePopup'

export default function Contact() {
  const [tosChecked, setTosChecked] = useState(false)

  const Labelstyle = {
    color: '#D4D4D8',
    fontSize: '25px',
    marginTop: '15px',
  }
  const Inputstyle = {
    width: '400px',
    padding: '12px',
    boxSizing: 'border-box',
    border: '1px solid white',
    borderRadius: '4px',
    marginTop: '7px',
  }

  return (
    <>
      <Head>
        <title>Contact - Yarin Benisty</title>
        <meta name="description" content="" />
      </Head>
      <SimpleLayout
        title="Contact Me"
        intro="If you think I have what it takes or just want to contact me for any reason, leave your info and send me an email."
      ></SimpleLayout>
      <Container className="sm:mt-26 mt-16">
        <div>
          <form
            action="https://formsubmit.co/itshyperex@gmail.com"
            method="POST"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={e => {
              if (!tosChecked) {
                e.preventDefault()
                alert('You must agree to the Terms of Service before sending.')
              }
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <label htmlFor="name" style={Labelstyle}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="your name here.."
              style={{ ...Inputstyle, height: '40px' }}
              required
            />
            <label htmlFor="email" style={Labelstyle}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your email here.."
              style={{ ...Inputstyle, height: '40px' }}
              required
            />
            <label htmlFor="message" style={Labelstyle}>
              Message
            </label>
            <input
              type="text"
              name="message"
              placeholder="Write something.."
              style={{
                ...Inputstyle,
                resize: 'vertical',
              }}
              required
            />
            <label
              style={{
                ...Labelstyle,
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                marginTop: '25px',
                marginBottom: '10px',
                gap: '10px',
              }}
            >
              <input
                type="checkbox"
                checked={tosChecked}
                onChange={e => setTosChecked(e.target.checked)}
                style={{
                  width: '20px',
                  height: '20px',
                  accentColor: '#27272A',
                  marginRight: '10px',
                }}
                required
              />
              I have read and agree to the&nbsp;
              {/* <a
                href="/tos"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1976d2",
                  textDecoration: "underline",
                  fontWeight: 500,
                  fontSize: '18px',
                }}
              >
                Terms of Service
              </a> */}
              <TosPopup /> and the <TermsOfUsePopup />
            </label>
            <button
              type="submit"
              disabled={!tosChecked}
              style={{
                ...Labelstyle,
                border: 'solid 1px #27272A80',
                borderRadius: '8px',
                backgroundColor: '#27272A80',
                width: '200px',
                height: '50px',
                marginTop: '30px',
                opacity: tosChecked ? 1 : 0.5,
                cursor: tosChecked ? 'pointer' : 'not-allowed',
              }}
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </>
  )
}