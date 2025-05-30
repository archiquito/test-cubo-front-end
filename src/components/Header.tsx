import React, { useRef, useContext } from 'react'
import { UserContext } from '../views/Home/context'
import type { UserContextType } from '../views/Home/HomeContainer'

export const Header = () => {
  const { setNewUserToApi } = useContext(UserContext) as UserContextType

  const first_name = useRef<HTMLInputElement>(null)
  const last_name = useRef<HTMLInputElement>(null)
  const participation = useRef<HTMLInputElement>(null)

  const handleCreateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const firstName = first_name.current?.value || ''
    const lastName = last_name.current?.value || ''
    const participationValue = participation.current?.value || ''

    if (firstName && lastName && participationValue) {
      setNewUserToApi({
        first_name: firstName,
        last_name: lastName,
        participation: parseInt(participationValue, 10) / 100,
      })
    }
    // Clear input fields after submission
    if (first_name.current) first_name.current.value = ''
    if (last_name.current) last_name.current.value = ''
    if (participation.current) participation.current.value = ''
  }

  return (
    <header className="flex items-center justify-center bg-sky-500 p-10">
      <form
        className="max-w-4xl items-center justify-between space-x-4 "
        onSubmit={handleCreateUser}
      >
        <input
          ref={first_name}
          type="text"
          placeholder="First name"
          className="w-full bg-white p-2 text-zinc-900 md:w-auto max-sm:mb-2"
        />
        <input
          ref={last_name}
          type="text"
          placeholder="Last name"
          className="w-full bg-white p-2 text-zinc-900 md:w-auto max-sm:mb-2"
        />
        <input
          ref={participation}
          type="text"
          placeholder="Participation"
          className="w-full bg-white p-2 text-gray-900 md:w-auto max-sm:mb-2"
        />
        <button
          type="submit"
          className="max-sm:w-full w-[140px] border-2 border-white p-2 text-white transition-colors hover:bg-blue-700 "
        >
          SEND
        </button>
      </form>
    </header>
  )
}
