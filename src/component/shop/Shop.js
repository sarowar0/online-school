import React, { useEffect, useState } from 'react';
import courseData from '../../../src/courseData/fakeData.json';
import Cart from '../cart/Cart';
import Course from '../course/Course';
import './Shop.css'
const Shop = () => {
    const [courses,setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => setCourses(courseData));

    const courseHandler = (course) => {
        const newCart = [...cart,course]
        setCart(newCart);
    };
    return (
        <div className='shop'>
            <div className="course-container">
                {
                    courses.map(course =><Course course={course} courseHandler={courseHandler}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;