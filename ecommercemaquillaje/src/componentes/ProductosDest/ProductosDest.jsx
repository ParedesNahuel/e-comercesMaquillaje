import React from 'react'
import CardProdDest from './CardProdDest'

function ProductosDest() {
  return (
    <div className='d-flex flex-column flex-wrap'>
        <div className='me-auto my-2'>
            <h5>Productos destacados</h5>
        </div>
        <div className='d-flex flex-wrap flex-row'>
            <CardProdDest img={'https://d3ugyf2ht6aenh.cloudfront.net/stores/967/629/products/d0d2a3d0-04f0-4e09-afca-adcd58edfcad1-6666e3fb0b26a53a1116671641940121-480-0.webp'}/>
            <CardProdDest img={'https://d3ugyf2ht6aenh.cloudfront.net/stores/967/629/products/47bbf874-a2bb-47aa-8e92-f62bb0df25071-cb4003cb25b78198e516624100592136-480-0.jpeg'}/>
            <CardProdDest img={'https://d3ugyf2ht6aenh.cloudfront.net/stores/967/629/products/f5e9413e-83ee-4153-93e2-58e4834da85f1-9109d0c1365b8ef2e016609334385523-480-0.jpeg'}/>
            <CardProdDest img={'https://d3ugyf2ht6aenh.cloudfront.net/stores/967/629/products/ca66bb0f-fcc4-49e9-acaf-e12422157c551-fee0cecd0f487ca46116648091717547-480-0.webp'}/>
            <CardProdDest img={'https://d3ugyf2ht6aenh.cloudfront.net/stores/967/629/products/b91402b8-577b-4cba-9b93-2e9b8906e9541-857b86d505716ada3216587977842724-480-0.jpeg'}/>
            <CardProdDest img={'https://d3ugyf2ht6aenh.cloudfront.net/stores/967/629/products/4d03c01a-5c74-4f0e-87fb-4e19d5978d361-82909118bc17593b3016547135264564-480-0.jpeg'}/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default ProductosDest