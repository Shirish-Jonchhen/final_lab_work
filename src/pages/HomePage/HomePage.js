import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';
import bgImg from '../../assets/botique.jpg';
import lehenga from '../../assets/designs/lehenga.png';
import suit from '../../assets/designs/suit.png';
import sari from '../../assets/designs/sari.png';
import Footer from '../../components/Footer/Footer';
import kurths from '../../assets/designs/kurtha.png';
import jacket from '../../assets/designs/jacket.png';
import sweater from '../../assets/designs/sweater.png';
import jersey from '../../assets/designs/jersey.png';
import shirt from '../../assets/designs/shirt.png';
import designing from '../../assets/services/design.jpg';
import crafting from '../../assets/services/crafting.jpg';
import tailoring from '../../assets/services/tailoring.jpg';
import delivery from '../../assets/services/delivery.jpg';
const Home = () => {
    return (
        <div className='content'>
            <NavBar />

            <div className='hero'>
                <div className='hero-text'>
                    <h1>Welcome to Cyclone Boutique<br />Where you can be yourself.</h1>
                </div>
                <div className='hero-sub-text'>

                    Discover timeless elegance and modern comfort with our clothing brand,<br /> blending sophisticated designs with premium fabrics for you.
                </div>

                <button>Visit Store</button>
            </div>

            <div className='feedback'>
                <div className='quot'>
                    <i>"</i>
                </div>
                <div className='feedback-text'>
                    I love the quality of the clothes and the customer service is amazing. I have been shopping here for years and I have never been disappointed.lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    <p>- Akira Kimbot<br />
                        <span>Model/Influencer</span>
                    </p>
                </div>
            </div>

            <div className='eval-wrapper'>
                <div className='eval'>
                    <div className='eval-title'>
                        <strong>Proven Excellence, Authenticity</strong>
                    </div>
                    <div className='eval-sub-title'>
                        <p>Our products are made with the highest quality materials and are designed to last. <br />We are committed to providing you with the best products and service.</p>
                    </div>

                    <div className='eval-cards'>
                        <div className='eval-card'>
                            <strong>100+</strong>
                            <p>Customers</p>
                        </div>
                        <div className='eval-card'>
                            <strong>5</strong>
                            <p>Countries</p>
                        </div>
                        <div className='eval-card'>
                            <strong>600+</strong>
                            <p>Designs</p>
                        </div>
                        <div className='eval-card'>
                            <strong>20+</strong>
                            <p>Categories</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='top-designs'>
                <div className='top-designs-title'>
                    <strong>Top Designs</strong>
                </div>
                <div className='top-designs-sub-title'>
                    <p>Discover our top designs for the season. <br />Shop now and get up to 50% off.</p>
                </div>

                <div className='designs'>
                    <div className='design'>
                        <img src={lehenga} alt='design' />
                        <div className='design-text'>
                            <strong>Lehenga</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={kurths} alt='design' />
                        <div className='design-text'>
                            <strong>Kurtha</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={suit} alt='design' />
                        <div className='design-text'>
                            <strong>Suit</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={sari} alt='design' />
                        <div className='design-text'>
                            <strong>Saree</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={jacket} alt='design' />
                        <div className='design-text'>
                            <strong>Jackets</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={sweater} alt='design' />
                        <div className='design-text'>
                            <strong>Sweaters</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={shirt} alt='design' />
                        <div className='design-text'>
                            <strong>Shirt</strong>
                        </div>
                    </div>
                    <div className='design'>
                        <img src={jersey} alt='design' />
                        <div className='design-text'>
                            <strong>Jersey</strong>
                        </div>
                    </div>

                </div>
            </div>

            <div className='top-designs'>
                <div className='top-designs-title'>
                    <strong>Services we provide</strong>
                </div>
                <div className='top-designs-sub-title'>
                    <p>Our Experties.</p>
                </div>
                <div className='service-block'>
                    <div className='service'>
                        <strong>Design</strong>
                        <p>Designing clothing is an intricate blend of art, science, and cultural expression. It begins with a creative vision, often inspired by trends, historical influences, and personal aesthetics. Designers sketch their ideas, meticulously planning every detail from fabric selection to color palettes, ensuring each piece not only looks appealing but also feels comfortable and functional. They consider the silhouette and structure, balancing innovation with wearability. The process involves understanding textiles and their properties, such as drape and durability, to create garments that are both stylish and long-lasting. Attention to detail is crucial, from the stitching techniques to the placement of embellishments, ensuring high-quality craftsmanship. Designers must also anticipate market trends and consumer preferences, blending originality with commercial appeal. Sustainability is becoming increasingly important, prompting designers to source eco-friendly materials and adopt ethical practices. Ultimately, designing clothing is about creating pieces that resonate with people, allowing them to express their individuality and feel confident in their attire. This fusion of creativity and practicality makes fashion design a dynamic and continually evolving field.</p>
                    </div>
                    <div className='service-img'>
                        <img src={designing} alt='design' />
                    </div>
                </div>
                <div className='service-block'>
                    <div className='service-img'>
                        <img src={crafting} alt='design' />
                    </div>
                    <div className='service'>
                        <strong>Crafting</strong>
                        <p>
                            Crafting is a deeply rewarding and meticulous process that transforms raw materials into beautifully finished products. It involves a high level of skill and attention to detail, whether working with wood, metal, textiles, or other mediums. Artisans begin with a concept, often drawing inspiration from tradition, nature, or modern design trends, and then carefully select their materials for quality and suitability. The process of crafting requires a combination of creativity and technical knowledge, as artisans use tools and techniques that have been honed over years, sometimes centuries. Each step, from cutting and shaping to joining and finishing, is performed with precision to ensure the final product is both functional and aesthetically pleasing. Crafting is not just about creating objects; it’s about imbuing each piece with a sense of character and craftsmanship that reflects the maker's dedication and artistry. In a world increasingly dominated by mass production, handcrafted items stand out for their uniqueness and superior quality. They carry a story and a personal touch that machines cannot replicate, making them cherished items in any setting. Through crafting, artisans preserve traditional skills and contribute to a culture of quality and creativity that enriches our lives.</p>
                    </div>
                </div>
                <div className='service-block'>
                    <div className='service'>
                        <strong>Tailoring</strong>
                        <p>Tailoring is the art and science of customizing garments to fit an individual's unique body shape, ensuring both comfort and style. This meticulous process begins with precise measurements taken by the tailor, who then selects the appropriate fabric based on the client's preferences and the garment's intended use. Each piece of fabric is cut with precision, taking into account the pattern and grain to ensure a perfect drape. The tailor skillfully assembles the garment using advanced stitching techniques, paying close attention to details such as seams, hems, and linings, which contribute to the overall quality and durability.

                            Fit is paramount in tailoring; a well-tailored garment enhances the wearer’s silhouette, providing a polished and professional appearance. Tailors often make multiple fittings, adjusting the garment based on the client's feedback to achieve the ideal fit. This process not only enhances the garment's aesthetic appeal but also ensures maximum comfort and freedom of movement. Tailoring combines technical expertise with an understanding of fashion trends and individual style, resulting in bespoke pieces that are both timeless and contemporary. In a world of ready-to-wear clothing, tailored garments stand out for their personalized fit and superior craftsmanship, reflecting the tailor's dedication to their craft. Whether it's a bespoke suit, a custom dress, or a perfectly fitted pair of trousers, tailoring celebrates the art of making clothing that is as unique as the individual who wears it.</p>
                    </div>
                    <div className='service-img'>
                        <img src={tailoring} alt='design' />
                    </div>
                </div>
                <div className='service-block'>
                    <div className='service-img'>
                        <img src={delivery} alt='design' />
                    </div>
                    <div className='service'>
                        <strong>Delivery</strong>
                        <p>Delivery is a vital component of customer service, ensuring products reach buyers swiftly and in excellent condition. This process begins with careful packaging to safeguard items during transit, followed by efficient logistics planning to determine the quickest, most cost-effective routes. Advanced tracking systems keep customers informed, providing real-time updates and transparency. Companies offer various delivery options, including express services, to meet urgent needs. Clear communication about delivery times enhances the customer experience, while efficient handling of returns and exchanges ensures satisfaction. Navigating international shipping regulations smoothly is crucial for global transactions. Timely delivery is especially important in fast-paced industries like fashion. As e-commerce grows, reliable delivery becomes increasingly essential, impacting brand reputation and customer loyalty. Investing in robust delivery solutions is key to thriving in a competitive market.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );


}

export default Home;