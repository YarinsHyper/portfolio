import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Experience - Yarin Benisty</title>
        <meta name="description" content="" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/path/to/your/image.jpg" // Ensure you provide a valid src path
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;ve been a developer advocate, created dozens of developer
              education videos, and interviewed industry leaders at crypto
              events around the world.
            </h1>
            <div className="mt-24 space-y-7">
              <SpeakingSection title="Videos">
                <Appearance
                  href="https://www.youtube.com/watch?v=Axv9xxCSmdQ"
                  title="Interviewing Web3 Founders at DevConnect"
                  description=""
                  event="DevConnect Amsterdam 2022"
                  cta="Watch video"
                />
                <Appearance
                  href="https://www.youtube.com/watch?v=XAQupxAOrK8"
                  title="DeSo x Metamask: Crypto Key Pairs + Signing Cross-Chain Tx's"
                  description=""
                  event="The DeSo Foundation"
                  cta="Watch video"
                />
                <Appearance
                  href="https://www.youtube.com/watch?v=sUnMDRzVbqs"
                  title="How to Render NFT Metadata In a React App (NFT Metadata Tutorial)"
                  description=""
                  event="Thirdweb"
                  cta="Watch video"
                />
                <Appearance
                  href="https://www.youtube.com/watch?v=P5jetKCsupo"
                  title="Build Bored Ape Yacht Club with Next.js, Tailwind & Thirdweb (NFT Drop Tutorial)"
                  description=""
                  event="Clever Programmer"
                  cta="Watch video"
                />
              </SpeakingSection>
            </div>
          </div>
          <div className="lg:pl-20">
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              One of my favorite ways to share my ideas about software is
              through content creation. I&apos;ve had the opportunity to work as
              a developer advocate for Gelato Network, curating written and
              video documentation of their smart contract automation platform.
              In addition to creating videos for blockchain developers on my own
              educational YouTube channel, I&apos;ve been able to partner with
              big industry names like Thirdweb, The DeSo Foundation and others
              to make video tutorials for their social outlets. Check out some
              highlights here.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
