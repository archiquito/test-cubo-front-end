import React, { useEffect, useState } from 'react'
import { UserContext } from './context'
import { Home } from './Home'
import { isEmpty } from 'lodash'
import {
  createUser,
  getUsers,
  type GetUserResponse,
} from '../../api/services/users'
import { formatPieChart } from './hooks/formatPieChart'

export interface UserContextType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  error: Error | null
  setError: React.Dispatch<React.SetStateAction<Error | null>>
  users: GetUserResponse[]
  setUsers: React.Dispatch<React.SetStateAction<GetUserResponse[]>>
  dataPie: { name: string; value: number }[]
  setDataPie: React.Dispatch<
    React.SetStateAction<{ name: string; value: number }[]>
  >
  newUserToApi:
    | {
        first_name: string
        last_name: string
        participation: string
      }
    | object
  setNewUserToApi: React.Dispatch<
    React.SetStateAction<
      | {
          first_name: string
          last_name: string
          participation: string
        }
      | object
    >
  >
}

export const HomeContainer = () => {
  const [users, setUsers] = useState<GetUserResponse[]>([])
  const [loading, setLoading] = useState<UserContextType['loading']>(true)
  const [error, setError] = useState<UserContextType['error']>(null)
  const [dataPie, setDataPie] = useState<UserContextType['dataPie']>([])
  const [newUserToApi, setNewUserToApi] = useState<
    UserContextType['newUserToApi']
  >({})

  const fetchUsers = async () => {
    try {
      const response = await getUsers()
      setUsers(response)
      setDataPie(formatPieChart(response))
      setLoading(false)
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
      setLoading(false)
    }
  }

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      fetchUsers()
    })
  }, [])

  const createNewUserApi = async (userData: Omit<GetUserResponse, 'id'>) => {
    try {
      const newUser = await createUser(userData)
      setUsers((prevUsers) => [...prevUsers, newUser])
      setDataPie((prevData) => [
        ...prevData,
        {
          name: `${newUser.first_name} ${newUser.last_name}`,
          value: parseFloat(newUser.participation) * 100 || 0,
        },
      ])
      setNewUserToApi({}) // Reset the new user state
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
      console.error('Error creating user:', err)
    }
  }

  useEffect(() => {
    if (!isEmpty(newUserToApi)) {
      createNewUserApi(newUserToApi as Omit<GetUserResponse, 'id'>)
    }
  }, [newUserToApi])

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        users,
        setUsers,
        dataPie,
        setDataPie,
        newUserToApi,
        setNewUserToApi,
      }}
    >
      <Home />
    </UserContext.Provider>
  )
}
