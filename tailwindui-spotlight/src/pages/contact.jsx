import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

export default function Contact() {
  const LabelStyles = {
    color: '#D4D4D8',
    fontSize: '25px',
    marginTop: '15px',
  }
  const InputStyles = {
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
            action="https://formsubmit.co/yarin1857@gmail.com"
            method="POST"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <input type="hidden" name="_captcha" value="false" />
            <label htmlFor="name" style={LabelStyles}>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="your name here.."
              style={{ ...InputStyles, height: '40px' }}
              required
            />
            <label htmlFor="email" style={LabelStyles}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your email here.."
              style={{ ...InputStyles, height: '40px' }}
              required
            />
            <label htmlFor="message" style={LabelStyles}>
              Message
            </label>
            <input
              type="text"
              name="message"
              placeholder="Write something.."
              style={{
                ...InputStyles,
                resize: 'vertical',
              }}
              required
            />
            <button
              type="submit"
              style={{
                ...LabelStyles,
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
