import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CourseListingPage = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()


	useEffect(() => {
		const getProduct = async () => {
			try {
				const { data } = await axios.get(`http://127.0.0.1:8000/courses/${id}/`)
				setProduct(data)
			} catch (error) {
				console.log('Ошибка', error)
			}
		}
		getProduct()
	}, [])


	return (
		<div>{product.title} {id}</div>
	)
}
