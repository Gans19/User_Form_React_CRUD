import React from 'react'
import "./App.css"

const EditableRow = ({editField,HandleEditForm}) => {
  return (
    <tr>
        <td></td>
        <td>
            <input type="text" placeholder='Enter a Name....' required="required" name='name' onChange={HandleEditForm} value={editField.name}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Email....' required="required" name='email' onChange={HandleEditForm} value={editField.email}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Username....' required="required" name='username' onChange={HandleEditForm} value={editField.username}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Website....' required="required" name='website' onChange={HandleEditForm} value={editField.website}/>
        </td>
        <td>
            <input type="text" placeholder='Enter a Phone....' required="required" name='phone' onChange={HandleEditForm} value={editField.phone}/>
        </td>
       <td>
       <button type='submit'  className="btn">
                      Save
                    </button>
       </td>
    </tr>
  )
}

export default EditableRow
