import { Col, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import "./blogStyle.scss";
import Slider from "react-slick";


const Blog = () => {
    
    const [data , setData] = useState('')
    const [loading , setLoading] = useState(true)

    const BlogTitle = "Blog"

    useEffect(() => {
        fetch('https://reqres.in/api/users')
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            setData(response.data)
            setLoading(false)
          });
      }, []);


      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

      

    return(
        <div className="blog">
            
            <h2>{BlogTitle}</h2>

            <div className="blog__itemsContainer">
                {loading ?
                    <Row>
                        <Col xl={8} lg={8}>
                            <Skeleton />
                        </Col>
                        <Col xl={8} lg={8}>
                            <Skeleton />
                        </Col>
                        <Col xl={8} lg={8}>
                            <Skeleton />
                        </Col>
                    </Row>

                    :
                    <>
                    <div className="blog__itemsContainer__item" >
                        <Slider {...settings} >
                            {data.map(item =>
                                <a  href="#" className="blog__itemsContainer__item__items" >
                                    <div className="blog__itemsContainer__item__items__img" >
                                        <img src={item.avatar} alt="can't load" />
                                    </div>
                                    <div className="blog__itemsContainer__item__items__desciription" >
                                        <p>{item.first_name + ' ' + item.last_name}</p>
                                        <span>{item.email}</span>
                                    </div>
                                </a>
                            )
                            }
                        </Slider>
                    </div>
                    <Product/>
                    </>
                }
            </div>
        </div>
    )
}



const Product = () => {

    const productTitle = "Styling and nourishment"
    const productContent = "A range of products perfect for creating all types of hair styling with restructuring, nourishing and plumping action. A blend of organic and biological oils enriched with a Rice Bran Oil for forever young-looking hair. Free of Parabens, Paraffine, Silicones, Petrolatum, Sulfates, SLES and SLS."

    return(
        <div className="product" >
            <div className="product__image" >
                <img src="img/product.jpg" alt="product" />
            </div>
            <div className="product__content" >
                <span>{productTitle}</span>
                <p>{productContent}</p>
            </div>
        </div>
    )
}

export default Blog