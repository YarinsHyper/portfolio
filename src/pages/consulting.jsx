import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

// import logoDove from '@/images/logos/dove-logo.png';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Consulting() {
  return (
    <>
      <Head>
        <title>Consulting - Yarin Benisty</title>
        <meta name="description" content="Projects I've advised on Web3 integration strategy." />
      </Head>
      <SimpleLayout
        title="Projects I've advised on Web3 integration strategy."
        intro="Occasionally I take on consulting work in specific cases where I feel there is strong alignment with a project's blockchain goals."
      >
        <div className="space-y-20">
          <ToolsSection title="Contract">
            <div className="flex">
              <div className="relative mt-1 mr-3 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <a href="https://www.dove.com/us/en/home.html" target="_blank" rel="noreferrer">
                  {/* <Image src={logoDove} alt="Dove Logo" className="h-7 w-7" unoptimized /> */}
                </a>
              </div>
              <Tool title="Dove">
                Participated in an advisory council to help the Dove corporation define a meaningful role to play in the metaverse and Web3 spaces to highlight. Offered perspectives and insights that informed solutions the brand was building, as well as validation and co-creation of ideas.
              </Tool>
            </div>
            <div className="flex">
              <div className="relative mt-1 mr-3 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <a href="https://www.angelflightwest.org/?gclid=CjwKCAiAleOeBhBdEiwAfgmXfyf1bQdySutsja5RIxvzojnRjXKRylj6uB0JwmeyQl6tAkah2HfnjRoCwWYQAvD_BwE" target="_blank" rel="noreferrer">
                  {/* <Image src={logoAngelFlight} alt="Angel Flight Logo" className="h-7 w-7" unoptimized /> */}
                </a>
              </div>
              <Tool title="Angel Flight">
                Advised Angel Flight in technical best practices and strategy for their organization to use blockchain technology to further their mission of connecting volunteer pilots with patients in need of free transportation to medical appointments.
              </Tool>
            </div>
            <div className="flex">
              <div className="relative mt-1 mr-3 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <a href="https://infinispace.io/" target="_blank" rel="noreferrer">
                  {/* <Image src={logoInfinispace} alt="Infinispace Logo" className="h-7 w-7" unoptimized /> */}
                </a>
              </div>
              <Tool title="Infinispace">
                Consulted on gamified social metaverse and NFT platform.
              </Tool>
            </div>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
