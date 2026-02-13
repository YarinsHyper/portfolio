import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

import amanLogo from '@/images/logos/aman-logo.png'
import companyJeenAILogo from '@/images/logos/jeen_logo.ico'
import theOpenUniLogo from '@/images/logos/theOpenUni-logo.png'

import { getAllExperiences } from '@/lib/getAllArticles'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

// function EducationHat() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
//       <g styles="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
//         <path d="M 89.705 60.21 c 0 -2.087 -1.457 -3.831 -3.404 -4.295 V 34.354 c 0 -0.565 -0.457 -1.023 -1.023 -1.023 c -0.565 0 -1.023 0.458 -1.023 1.023 v 21.561 c -1.947 0.464 -3.404 2.208 -3.404 4.295 s 1.457 3.831 3.404 4.295 v 6.839 c 0 0.565 0.457 1.023 1.023 1.023 c 0.565 0 1.023 -0.457 1.023 -1.023 v -6.839 C 88.249 64.041 89.705 62.298 89.705 60.21 z" styles="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(112,112,112); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
//         <path d="M 70.545 40.218 v 24.831 c 0 1.948 -1.315 3.636 -3.19 4.165 c -14.904 4.204 -29.807 4.204 -44.711 0 c -1.875 -0.529 -3.19 -2.217 -3.19 -4.165 V 40.218 H 70.545 z" styles="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(100,100,100); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
//         <path d="M 1.015 34.159 l 39.651 13.028 c 2.815 0.925 5.852 0.925 8.667 0 l 39.651 -13.028 c 1.354 -0.445 1.354 -2.36 0 -2.805 L 49.333 18.326 c -2.815 -0.925 -5.852 -0.925 -8.667 0 L 1.015 31.354 C -0.338 31.799 -0.338 33.714 1.015 34.159 z" styles="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(70,70,70); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
//       </g>
//     </svg>
//   )
// }

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Jeen Ai',
      title: 'Full Stack Developer',
      logo: companyJeenAILogo,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'IDF Intelligence',
      title: 'Full Stack Developer',
      logo: amanLogo,
      start: '2020',
      end: '2023',
    }
  ]

  let resume2 = [
    {
      company: 'The Open University',
      title: 'B.Sc Computer Science',
      logo: theOpenUniLogo,
      start: '2024',
      end: 'Present'
      // end: {
      //   label: 'Present',
      //   dateTime: new Date().getFullYear(),
      // },
    }
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                    }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <Button
          href="/assets/Yarin-Benisty-Resume.pdf"
          variant="secondary"
          className="group mt-6 w-full"
          download
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
        {/* <a
        href="./Yarin-Benisty-Resume.pdf"
        download="Yarin-Benisty-Resume.pdf"
        class="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          ></path>
        </svg>
        Download Resume
      </a> */}
      </div>
      <br></br>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Education</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume2.map((role, roleIndex) => (
            <li key={roleIndex} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                    }`}
                >
                  <time dateTime={role.start.dateTime ?? role.start}>
                    {role.start.label ?? role.start}
                  </time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={role.end.dateTime ?? role.end}>
                    {role.end.label ?? role.end}
                  </time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        {/* <a
        href="./Yarin-Benisty-Resume.pdf"
        download="Yarin-Benisty-Resume.pdf"
        class="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          ></path>
        </svg>
        Download Resume
      </a> */}
      </div>
    </>
  )
}

export default function Home({ experiences }) {
  return (
    <>
      <Head>
        <title>Yarin - Resume</title>
        <meta
          name="description"
          content="I’m Yarin, a full-stack web developer based in Israel with over 4 years of practice. 
          ${\n} Seeking a dynamic role as a Full Stack or Backend Developer. "
        />
        {/* Accessibility scripts */}
        <script src="https://code.jquery.com/jquery-1.12.4.js" type="text/javascript"></script>
        <script src="https://www.negishim.com/accessibility/accessibility_pro_group255.js" type="text/javascript"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              accessibility_rtl = true;
              pixel_from_side = 20;
              pixel_from_start = 20;
            `,
          }}
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full-stack web developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <b>
              I&apos;m Yarin, a Full-stack web developer based in Israel with 3+
              years of practice.
              <br></br>
              Seeking a dynamic role as a Full Stack or Backend Developer,
              utilizing my skills and experience to contribute to innovative
              projects and deliver high-quality solutions.
            </b>
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/YarinsHyper"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/yarinbenisty/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I love building software, and have spent the past few years working
              on applications With contributions
              in frontend, backend, and devops spanning a range of programming
              languages and tools, I&apos;ve participated in the full software
              development lifecycle from requirements gathering to agile and
              micro-service development to quality assurance.<br></br>
              <br></br>
              I&apos;ve worked with a team to deliver results in a fast-paced,
              early stage startup environment. I&apos;ve written code
              that&apos;s responsible for.<br></br>
              <br></br>
              In my past role I Continued to make improvements and optimizations
              to internal systems and help move my team towards best practices
              in engineering standards.<br></br>
              <br></br>
              I&apos;m Experienced in both independent work and collaborative
              teamwork, Hardworker, creative and highly motivated. Striving for
              excellence, loves technology and learning new things. When
              I&apos;m not coding, I enjoy traveling, gaming, working-out,
              volleyball, and hanging out with friends.
            </p>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    // await generateRssFeed()
  }

  return {
    props: {
      experiences: (await getAllExperiences())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
