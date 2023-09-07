import React from "react";
import './productsection.css';

const products = [
    {
        id: 1,
        name:"ELECTROPRIME E00E Gps Wifi Wide Angle 4Ch 6-Axis Gyro Hd 1080P Drone Hd Camera Cg033|Multicolor",
        price:689.13,
        description:"High-performance drone with advanced features",
        imageUrl:'https://m.media-amazon.com/images/I/41lM8FhSUWL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    },
    {
        id:2,
        name:"ELECTROPRIME EF99 2.4Ghz WIFI 5G 4CH 6-Axis Gyro HD 1080P Drone S70W Wide Angle LED, Multi-Colour",
        price:713.1,
        description:"Professional-grade drone for aerial photography",
        imageUrl:'https://m.media-amazon.com/images/I/51fbGQoa-LL.jpg',
    },
    {
        id:3,
        name:"ELECTROPRIME 2D3B HD Camera 4CH 6-Axis Gyro 1080P Drone Brushless LED Headless Mode Hover",
        price:664.95,
        description:"Versatile drone suitable for both beginners and experts",
        imageUrl:'https://m.media-amazon.com/images/I/41v-h+ARpCL._SL1000_.jpg',
    },
    {
        id:4,
        name:"ELECTROPRIME 0D54 Gift 2.4G 4CH 6-Axis Gyro 1080P UAV WiFi Drone Stable Gimbal Sky",
        price:386.88,
        description:"Professional-grade drone for aerial photography",
        imageUrl:'https://m.media-amazon.com/images/I/51MCxnPj-aL._SL1000_.jpg',
    },
    {
        id:5,
        name:"ELECTROPRIME 9F3E 2.4G 4CH 6-Axis HD 720P Drone S20W 2.0MP Drone WiFi FPV Real-Time Gift (Multicolor)",
        price:362.70,
        description:'High-performance drone with advanced features',
        imageUrl:'https://m.media-amazon.com/images/I/51wHMNtn+OL._SL1000_.jpg',
    }
];
const Productsection = () => {
    const handleAddToCart = (productId) => {
        console.log('Product ${productId} added to cart.');
    };
    return(
        <section className="product-section">
            <h2>Featuered Products</h2>
            <div className="products">
                {
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <button onClick={()=> handleAddToCart(product.id)}>Add to Cart</button>
                        </div>
                ))}
            </div>
        </section>
    );
};

export default Productsection;