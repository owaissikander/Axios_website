import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCart from "../component/ProductCart";
import ProductChip from "../component/ProductChip";


function Product() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [chooseCategory, setChoosecategory] = useState('All')
    useEffect(() => {
        console.log('hoagye dubar compiler');


        const url = chooseCategory === 'All'
            ? 'https://dummyjson.com/products'
            : `https://dummyjson.com/products/category/${chooseCategory}`

        axios.get(url)
            .then((res) => {
                setProduct(res.data.products)
                setLoading(false)

            })
            .catch((err) => {
                console.log('--->', err);
                setLoading(false);
            }
            )
    }, [chooseCategory])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategories(res.data)
                setLoading(false)

            })
            .catch((err) => {
                console.log('--->', err);
                setLoading(false);
            }
            )
    }, [])


    return (


        <div className="container mx-auto">
            <div>

            </div>
            {loading ? (
                <h1 className="text-center my-64 text-4xl ">Please Wait...</h1>
            ) : (
                <div>
                    <div className=" container flex flex-wrap gap-2 ">
                        <ProductChip
                            isChoose={chooseCategory === 'All'}
                            category={{
                                slug: "All",
                                name: "All"
                            }} />

                        {categories.map((category) => <ProductChip
                            onClick={() => setChoosecategory(category.slug)}
                            isChoose={category.slug === chooseCategory}
                            category={category} key={categories.slug} />)}
                    </div>
                    <div className="flex flex-wrap -m-4">

                        {product.map((item) =>
                        (<ProductCart item={item} key={item.id} />

                        ))}
                    </div>
                </div>)
            }
        </div>

    )
}

export default Product;