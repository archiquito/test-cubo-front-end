import { useContext } from 'react'
import { Loader2 } from 'lucide-react'

import { UserContext } from './context'
import { Header } from '../../components/Header'
import type { UserContextType } from './HomeContainer'

import { TableUsers } from '../../components/TableUsers'
import { ChartPie } from '../../components/ChartPie'

export const Home = () => {
  const { loading } = useContext(UserContext) as UserContextType

  return (
    <>
      <Header />
      <main className="flex items-center justify-center p-10">
        <section className="flex w-full max-w-4xl flex-col items-center justify-center space-y-4 px-11">
          <h1 className="text-3xl font-bold text-zinc-900">DATA</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {loading ? (
            <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
          ) : (
            <div className="grid w-full grid-cols-2 gap-4 max-sm:flex max-sm:flex-nowrap max-sm:flex-col max-sm:w-screen max-sm: px-4">
              <TableUsers />
              <div className="flex w-full items-center justify-start ">
                <ChartPie />
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}
