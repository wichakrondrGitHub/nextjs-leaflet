import { Container } from 'react-bootstrap'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center flex-row dark:bg-transparent">
      <Container>{children}</Container>
    </div>
  )
}
