import React from 'react';
import './AboutUsPage.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import tailorIllustration from '../../assets/tailor_ilus.png';
import ceo from '../../assets/BOD/CEO.jpg';
import cfo from '../../assets/BOD/CFO.jpg';
import cto from '../../assets/BOD/CTO.jpg';
import branchManagerNepal from '../../assets/BOD/branch-manager-nepal.jpg';
import branchManagerIndia from '../../assets/BOD/branch-manager-india.jpg';
import branchManagerJapan from '../../assets/BOD/branch-manager-japan.jpg';
import branchManagerKorea from '../../assets/BOD/branch-manager-korea.jpg';
import customerSupportAsia from '../../assets/BOD/customer-support-asia.jpg';
import customerSupportAmerica from '../../assets/BOD/customer-support-america.png';
import customerSupportEurope from '../../assets/BOD/customer-support-europe.jpg';

import salesMarketingLead from '../../assets/BOD/salese-marketing-lead.png';
import salesMarketingAsst from '../../assets/BOD/sales-asst.png';
import techLead from '../../assets/BOD/tech-lead.jpeg';
import techAsst from '../../assets/BOD/tech-asst.png';
import finance from '../../assets/BOD/finance-associate.png';
import { Helmet } from 'react-helmet';
const AboutUs = () => {
    return <div className='content'>
        <Helmet>
            <title>Pushpa Kaju - About Us</title>
        </Helmet>
        <NavBar />
        <div className='about-us-wrapper'>
            <div className='about-us'>
                <div className='about-us-txt'>
                    <div className='about-us-header'>
                        <strong>About Us</strong>
                    </div>
                    <div className='about-us-content'>
                        <p>Cyclone Boutique epitomizes a blend of bold fashion and enduring craftsmanship. Nestled in the heart of urban chic, our boutique offers a curated selection of apparel that marries contemporary trends with timeless elegance. Each piece in our collection is meticulously crafted from the finest materials, ensuring not only impeccable quality but also unmatched comfort and durability. Whether you're seeking a statement piece for a special event or everyday essentials that exude sophistication, Cyclone Boutique is your destination. With a commitment to style innovation and customer satisfaction, we invite you to discover a shopping experience that transcends fashion, leaving a lasting impression with every visit.</p>
                    </div>
                </div>


                <div className='about-us-img'>
                    <img src={tailorIllustration} height={300} width={300} />
                </div>

            </div>
        </div>

        <div className='team'>
            <div className='team-title'>
                <strong>Our Team</strong>
            </div>
            <div className='team-sub-title'>
                <p>Get on board and meet out professionals.</p>
            </div>

            <div className='members'>
                <div className='member'>
                    <img src={ceo} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Pushpa Kaju</strong><br />
                        <span>Co-Founder/CEO</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={cfo} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Reshma Rai</strong><br />
                        <span>Co-Founder/CFO</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={cto} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Ajnesh Duwal</strong><br />
                        <span>Co-Founder/CTO</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={branchManagerNepal} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Nishan Paudel</strong><br />
                        <span>Branch Manager - Nepal</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={branchManagerIndia} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>krishna A. Gainju</strong><br />
                        <span>Branch Manager - India</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={branchManagerJapan} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Soniya Prajapati</strong><br />
                        <span>Branch Manager - Japan</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={branchManagerKorea} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Binila Rajchal</strong><br />
                        <span>Branch Manager - Korea</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={customerSupportAsia} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Ayusha Shreatha</strong><br />
                        <span>Customer Support - Asia</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={customerSupportAmerica} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Deena Jakibanjar</strong><br />
                        <span>Customer Support - America</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={customerSupportEurope} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Pratisha Manandhar</strong><br />
                        <span>Customer Support - Europe</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={salesMarketingLead} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Priyanka Chaguthi</strong><br />
                        <span>Sales/Marketing Lead</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={salesMarketingAsst} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Bibisha Thakuri</strong><br />
                        <span>Sales/Marketing Asst.</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={techLead} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Shirish Jonchhen</strong><br />
                        <span>Tech Lead</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={techAsst} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Rabi Shrestha</strong><br />
                        <span>Tech Asst.</span>
                    </div>
                </div>
                <div className='member'>
                    <img src={finance} alt='design' height={150} width={100} />
                    <div className='design-text'>
                        <strong>Bibek Shrestha</strong><br />
                        <span>Finance Associate</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='client'>
            <div className='client-form'>
                <div className='client-form-slogan'>
                    <b>If you have ideas, you have the main asset you need, and there isn’t any
                        limit to what you can do with your business and your life. Ideas are any man’s
                        greatest asset.</b><br />
                    <p>- Harvey S. Firestone</p>
                </div>

                <div className='client-form-title'>
                    <strong>Give an idea about your requirements.</strong>
                    <form>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='number' placeholder='Phone' />
                        <textarea placeholder='Requirements' rows={3} ></textarea>
                        <button>Submit</button>
                    </form>
                </div>

            </div>

        </div>

        <Footer />
    </div>

}
export default AboutUs;