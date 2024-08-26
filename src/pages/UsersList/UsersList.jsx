import { useState } from "react"
import { userRows } from "../../datas"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './UsersList.css'
export default function UsersList() {

  const [userDatas,setUserDatas] = useState(userRows)

  const userDelete = (id) => {
    let newUserDatas = userDatas.filter(user => user.id !== id)
    setUserDatas(newUserDatas)
  }

  const columns = [
    {
      field: 'id',
      headerName:'ID',
      width: 90
    },
    {
      field:'user',
      headerName:'User',
      width: 200,
      renderCell : (params) => {
        return (
         <Link to={'/'}>
         <div className="userlist-user">
          <img src={params.row.avatar} className="userList-img"/>
          {params.row.username}
         </div>
         </Link>
        )
      }
    },
    {
      field:'email',
      headerName:'Email',
      width: 200
    },
    {
      field:'status',
      headerName:'Status',
      width:120
    },{
      field:'transAction',
      headerName:'TransAction',
      width: 160
    },
    {
      field:'action',
      headerName:'Action',
      width:150,
      renderCell: (params) => {
         return (
          <>
           <Link to={`/user/${params.id}`}>
            <button className="userlist-edit">Edit</button>
           </Link>
           <DeleteOutlineIcon onClick={()=> userDelete(params.id)} className="userlist-delete"/>
             
          </>
         )
      }
    }
  ]

  return (
    <div className="userlist">
      <DataGrid 
        sx={{
          fontSize:'1.5rem'
        }}
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  )
}
