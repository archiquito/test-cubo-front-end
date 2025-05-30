import type { GetUserResponse } from "../../../api/services/users"

export const formatPieChart = (users: GetUserResponse[]) => {
    return users.map((user) => ({
      name: `${user.first_name} ${user.last_name}`,
      value: parseFloat(user.participation) * 100 || 0,
    }))
  }