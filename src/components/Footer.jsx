import Link from 'next/link'
import React from 'react'
import { Container } from '@/components/Container'
import TosPopup from '@/components/PrivacyPolicyPopup'
import TermsOfUsePopup from '@/components/TermsOfUsePopup'
import AccessibilityStatementPopup from '@/components/AccessibilityStatementPopup'
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/project">Projects</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                {/* <NavLink href="/consulting">Consulting</NavLink> */}
              </div>
              <div className="flex space-x-2">
                <TosPopup />
                <TermsOfUsePopup />
                <AccessibilityStatementPopup />
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Yarin Benisty. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
