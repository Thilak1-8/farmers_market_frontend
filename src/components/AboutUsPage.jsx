import React from 'react';
import '../styles.css'; // Ensure you have relevant styles

const AboutUsPage = () => {
    return (
        <div className="about-container">
            <section className="about-us-section">
                <div className="container">
                    <h1 className="about-title">About Farmers Market</h1>
                    <p className="about-text">
                        Welcome to Farmers Market, your one-stop platform to connect local farmers, artisans, and customers. We believe in empowering local communities by showcasing the talent and hard work of individuals who produce traditional handicrafts, textiles, fresh produce, carpets, shawls, and other local products.
                    </p>
                    
                    <h2 className="about-subtitle">Our Mission</h2>
                    <p className="about-text">
                        Our mission is to promote and preserve the rich cultural heritage of local craftsmanship and agricultural excellence. We aim to bridge the gap between producers and consumers, providing a seamless platform for farmers and artisans to market their products directly to customers, bypassing intermediaries and ensuring fair trade.
                    </p>
                    
                    <h2 className="about-subtitle">Why Farmers Market?</h2>
                    <p className="about-text">
                        Farmers Market offers a variety of products, including traditional handicrafts, fresh organic produce, hand-woven textiles, and much more. Our platform allows you to:
                    </p>
                    <ul className="about-list">
                        <li>Directly connect with local farmers and artisans.</li>
                        <li>Support small-scale businesses and communities.</li>
                        <li>Purchase authentic, high-quality products.</li>
                        <li>Experience transparency in pricing and quality.</li>
                    </ul>

                    <h2 className="about-subtitle">Our Values</h2>
                    <ul className="about-list">
                        <li><strong>Community Empowerment:</strong> Supporting local communities is at the heart of everything we do.</li>
                        <li><strong>Fair Trade:</strong> We believe in fair pricing for both producers and consumers, ensuring mutual benefit.</li>
                        <li><strong>Quality:</strong> We are committed to providing products that meet the highest quality standards.</li>
                        <li><strong>Sustainability:</strong> We promote eco-friendly practices in farming and production.</li>
                    </ul>

                    <h2 className="about-subtitle">Join Us</h2>
                    <p className="about-text">
                        Whether you're a farmer looking to sell your organic produce, an artisan showcasing your handmade crafts, or a customer seeking authentic, locally sourced products—Farmers Market is here for you. Join us in supporting local talent and bringing communities closer together.
                    </p>

                    <h2 className="about-subtitle">Contact Us</h2>
                    <p className="about-text">
                        Have any questions? Feel free to reach out to us via our <a href="#Contact">Contact Us</a> page. We’re here to help and provide a smooth, enjoyable experience for all.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
