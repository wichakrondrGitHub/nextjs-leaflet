'use client'

import { Alert, Button, Form, FormControl, InputGroup } from 'react-bootstrap'

import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { deleteCookie, getCookie } from 'cookies-next'

export default function Register() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const getRedirect = () => {
    const redirect = getCookie('redirect')
    if (redirect) {
      deleteCookie('redirect')
      return redirect.toString()
    }

    return '/'
  }

  const register = async (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()

    setSubmitting(true)

    try {
      // eslint-disable-next-line no-constant-condition
      if (true) {
        router.push(getRedirect())
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Alert variant="danger" show={error !== ''} onClose={() => setError('')} dismissible>
        {error}
      </Alert>
      <Form onSubmit={register}>
        <InputGroup className="mb-3">
          <FormControl
            name="username"
            required
            disabled={submitting}
            placeholder="Username"
            aria-label="Username"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            type="email"
            name="email"
            required
            disabled={submitting}
            placeholder="Email"
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder="Password"
            aria-label="Password"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            type="password"
            name="password_repeat"
            required
            disabled={submitting}
            placeholder="Repeat password"
            aria-label="Repeat password"
          />
        </InputGroup>

        <Button type="submit" className="d-block w-100" disabled={submitting} variant="success">
          Create Account
        </Button>
      </Form>
    </>
  )
}
