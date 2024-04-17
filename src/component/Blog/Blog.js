import { Col, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import "./blogStyle.scss";


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

      console.log(data , 'data');

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

                    <div className="blog__itemsContainer__item" >
                        {data.map(blog => 
                            <div className="blog__itemsContainer__item__content">
                                <img src={blog.avatar} />
                                <div>    
                                    <p>{blog.first_name + ' ' + blog.last_name}</p>
                                    <span>{blog.email}</span>
                                </div>
                            </div>        
                        )}
                    </div>
                }
            </div>
        </div>
    )
}


export default Blog