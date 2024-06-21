"use client"
import Head from 'next/head'
import React from 'react'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

export default function Contact() {
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
        <title>Conact - Yarin Benisty</title>
        <meta name="description" content="" />
      </Head>
      <SimpleLayout
        title="Contact Me"
        intro="If you think i have what it takes or just want to contact me for any reason, leave your info and send me an email."
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
            <button
              type="submit"
              style={{
                ...Labelstyle,
                border: 'solid 1px #27272A80',
                borderRadius: '8px',
                backgroundColor: '#27272A80',
                width: '200px',
                height: '50px',
                marginTop: '30px',
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
