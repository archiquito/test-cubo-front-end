import { useContext } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { UserContext } from '../views/Home/context'
import type { UserContextType } from '../views/Home/HomeContainer'
import colors from 'tailwindcss/colors'
import useScreenSize from './useScreenSize'

export const ChartPie = () => {
  const { dataPie } = useContext(UserContext) as UserContextType
  const screenSize = useScreenSize()

  const COLORS = [
    colors.blue['500'],
    colors.green['400'],
    colors.yellow['500'],
    colors.orange['500'],
    colors.violet['600'],
  ]

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  }

  const styleResp = {
    top: '100%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  }
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={dataPie}
          cx={screenSize.width <= 560 ? "50%" : "30%"}
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {dataPie.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              strokeWidth={4}
            />
          ))}
        </Pie>
        <Legend
          iconSize={10}
          layout={screenSize.width <= 560 ? "horizontal" : "vertical"}
          verticalAlign="middle"
          wrapperStyle={screenSize.width <= 560 ? styleResp : style}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
