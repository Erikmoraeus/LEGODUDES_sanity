import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { fetchProductBySlug } from '../../sanity/services/productServices'

export default function ProductPage() {
    //states for å lagre skjemainformasjon
    const [reviewer, setReviewer] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0)

    //handleChange-funksjoner for felter
    const handleReviewerChange = (e) => {
        e.preventDefault()
        setReviewer(e.target.value)
    }
    const handlecommentChange = (e) => {
        e.preventDefault()
        setComment(e.target.value)
    }
    const handleRatingChange = (e) => {
        e.preventDefault()
        setRating(e.target.value)
    }

    const {slug} = useParams()
    const [product, setProduct] = useState(null)

    const getProductBySlug = async (slug) => {
        const data = await fetchProductBySlug(slug)
        setProduct(data[0])
    }

    useEffect(() => {
        getProductBySlug(slug)
    }, [slug])

    console.log("Product", product)

    if(product) {
        return (
            <main id="productpage">
                <figure>
                    <img src={product?.image} alt={`Produktbilde av LEGO-figuren ${product?.productname}`} />
                </figure>
                <article>
                    <h2>{product?.productname}</h2>
                    <p className="metainfo">
                        <Link to={"/produkter/" + product?.catslug}>{product?.categoryname}</Link>
                        <span className="stockcount">{product?.stock === 0 ? "Tomt" : product?.stock} på lager</span>
                    </p>
                    <p>{product?.description}</p>
                    <p className="priceview">Kr. {product?.price}</p>
                    <h3>Anmeldelser:</h3>
                    <form>
                        <p>
                            <label htmlFor ="reviewer">Ditt navn</label><br />
                            <input name ="reviewer" id="reviewer" onChange={handleReviewerChange} type="text"></input>
                        </p>
                        <p>
                            <label htmlFor ='comment:'>Kommentar:</label><br />
                            <textarea name="comment" onChange={handlecommentChange} id="comment"></textarea>
                        </p>
                        <p>
                            <label htmlFor="rating">Vurdering</label><br />
                            <select name="rating" onChange={handleRatingChange} id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <p>
                            <button>Send inn anmeldelse</button>
                        </p>
                    </form>
                    {
                        product?.reviews.map((r, i) => <p key={i}>
                            <strong>{r.reviewer}</strong>< br />
                            {r.comment}<br />
                            Vurdering: {r.rating}
                        </p>) 
                    }
                </article>
            </main>
        )
    } else {
        return (
            <main>
                <p>Laster produktinfo...</p>
            </main>
        )
    }
    
}