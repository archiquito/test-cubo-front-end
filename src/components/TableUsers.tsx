import { useContext } from "react";
import { UserContext } from "../views/Home/context";
import type { UserContextType } from "../views/Home/HomeContainer";

export const TableUsers = () => {
    const { users } = useContext(UserContext)  as UserContextType
    return (
        <div className="flex w-full items-center justify-center">
                        <table className="w-full table-auto border-collapse border border-gray-300">
                          <thead>
                            <tr>
                              <th className="border border-gray-400 p-2"></th>
                              <th className="border border-gray-400 p-2 text-sm text-gray-500">
                                First Name
                              </th>
                              <th className="border border-gray-400 p-2 text-sm text-gray-500">
                                Last Name
                              </th>
                              <th className="border border-gray-400 p-2 text-sm text-gray-500">
                                Participation
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((user) => (
                              <tr key={user.id}>
                                <td className="h-[20px] border border-gray-400 p-2 text-sm text-gray-500">
                                  {user.id}
                                </td>
                                <td className="border border-gray-400 p-2 text-sm text-gray-500">
                                  {user.first_name}
                                </td>
                                <td className="border border-gray-400 p-2 text-sm text-gray-500">
                                  {user.last_name}
                                </td>
                                <td className="border border-gray-400 p-2 text-sm text-gray-500">
                                  {parseFloat(user.participation) * 100}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
    )
}