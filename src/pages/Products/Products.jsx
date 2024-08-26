
import { useState } from "react"
import { products } from "../../datas"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './Products.css'
export default function UsersList() {

  const [productsDatas,setProductsDatas] = useState(products)

  const productsDelete = (productId) => {
    let newProductsDatas = productsDatas.filter(user => user.id !== productId)
    setProductsDatas(newProductsDatas)
  }

  const columns = [
    {
      field: 'id',
      headerName:'ID',
      width: 90
    },
    {
      field:'title',
      headerName:'Products',
      width: 200,
      renderCell : (params) => {
        return (
         <Link>
         <div className="userlist-user">
          <img src={params.row.avatar} className="userList-img"/>
          {params.row.title}
         </div>
         </Link>
        )
      }
    },
    {
      field:'price',
      headerName:'Price',
      width: 200
    },
    {
      field:'action',
      headerName:'Action',
      width:150,
      renderCell: (params) => {
         return (
          <>
           <Link to={`/product/${params.id}`}>
            <button className="userlist-edit">Edit</button>
           </Link>
           <DeleteOutlineIcon onClick={()=> productsDelete(params.id)} className="userlist-delete"/>
             
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
        rows={productsDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}
