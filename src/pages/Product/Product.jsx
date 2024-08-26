import {useParams} from 'react-router-dom'
import { products } from '../../datas'
import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import './Product.css'
import PublishIcon from '@mui/icons-material/Publish'
export default function Product() {
    let params = useParams()
    let mainProduct = products.find(product => product.id == params.productID)
   
    console.log(mainProduct)
  return (
    <div className='product'>
      <div className="product-title__container">
        <h1 className="product-title">
            {mainProduct.title}
        </h1>
        <Link to={'/newProduct'}>
          <button className='product-add__button'>Create</button>
        </Link>
      </div>

      <div className="product-top">
        <div className="product-top__left">
            <Chart grid title={'Sale in Month'} data={mainProduct.Sales} datakey={'sales'}/>
        </div>
        <div className="product-top__right">
            <div className="productInfoTop">
                <img src={mainProduct.avatar} alt="" />
                <span className='product-name'>{mainProduct.title} LapTop</span>
            </div>

            <div className="productInfoButtom">
                <div className="productInfo-item">
                    <div className="productInfo-key">ID:</div>
                    <div className='productInfo-value'>{mainProduct.id}</div>
                </div>
            </div>

            <div className="productInfoButtom">
                <div className="productInfo-item">
                    <div className="productInfo-key">Name:</div>
                    <div className='productInfo-value'>{mainProduct.title} LapTop</div>
                </div>
            </div>
            <div className="productInfoButtom">
                <div className="productInfo-item">
                    <div className="productInfo-key">Sales:</div>
                    <div className='productInfo-value'>{mainProduct.price}</div>
                </div>
            </div>
            <div className="productInfoButtom">
                <div className="productInfo-item">
                    <div className="productInfo-key">Active:</div>
                    <div className='productInfo-value'>{mainProduct.Active}</div>
                </div>
            </div>
            <div className="productInfoButtom">
                <div className="productInfo-item">
                    <div className="productInfo-key">in Stock:</div>
                    <div className='productInfo-value'>{mainProduct.Stock}</div>
                </div>
            </div>
        </div>
      </div>

      <div className="product-bottom">
        <form 
         className="prodcut-form">
            <div className="product-form__left">
                <label>Product Name</label>
                <input type="text" placeholder={mainProduct.title} />

                <label >In Stock</label>
                <select id='inStock'>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                <label>Active</label>
                <select id='Active'>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="product-form__right">
                <div className="product-uploader">
                    <img src={mainProduct.avatar} alt="" className='product-uploader__img' />
                    <label>
                    <PublishIcon/>
                    </label>
                    <input type="file" style={{display:'none'}} />
                </div>

                <button className='productButton'>Upload(Edit)</button>
            </div>
         </form>
      </div>
    </div>
  )
}
