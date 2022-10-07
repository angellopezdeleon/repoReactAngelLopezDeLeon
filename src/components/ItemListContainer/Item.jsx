import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Item(props) {
	let { title, image, imagetitle, id, price } = props;
	const urlDetalle = `/item/${id}`;

	return (
		<div className='d-flex justify-content-center align-items-center flex-column m-5 p-3 w-25 mw-100 border border-white'>
			<h5 className='mb-3 text-light'>{title}</h5>
			<img className='img-thumbnail w-50 img-fluid' src={image} alt={imagetitle} />
			<p className='mb-2 text-light'>${price}</p>

			<Link to={urlDetalle}>
				<button className='btn btn-light m-2'>
					Ver más
				</button>
			</Link>

	</div>
  )
}
