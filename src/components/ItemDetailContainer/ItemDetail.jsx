import React from 'react';
import ItemCount from '../ItemListContainer/ItemCount';

function ItemDetail({title, image, imageTittle, description, stock}) {
  return (
	<div className='d-flex justify-content-center align-items-center flex-column m-5 p-3 w-75 mw-100 border border-white'>
		<h2 className='mb-2 text-light'>{title}</h2>
		<img className='img-fluid' src={image} alt={imageTittle} />
		<p className='m-3 text-light'> { description } </p>
		<ItemCount stock={stock} />
	</div>
  )
}

export default ItemDetail