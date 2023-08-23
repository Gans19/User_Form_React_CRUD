import React from 'react'
import "./App.css"

const ReadOnlyData = ({user,HandleEdit}) => {
  return (
    <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                  <td>
 {/* Table Butoon Section */}

                    {/* Edit Button */}
                    <button  className="btn" onClick={(e)=>HandleEdit(e,user)}>
                      Edit
                    </button>

                  </td>
                </tr>
  )
}

export default ReadOnlyData
