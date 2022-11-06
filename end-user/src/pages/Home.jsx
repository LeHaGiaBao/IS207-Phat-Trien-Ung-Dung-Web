import React from 'react'
import Header from '../containers/Header/Header'
import Slider from '../containers/Slider/Slider'
import NewProduct from '../components/NewProduct/NewProduct'
import BestSellerProducts from '../components/BestSellerProducts/BestSellerProducts'
import TopAccessory from '../components/TopAccessory/TopAccessory'
import Footer from '../containers/Footer/Footer'

import ListProducts from '../components/ListProducts/ListProducts'

function Home() {
	return (
		<div>
			<ListProducts />
		</div>
	)
}

export default Home
