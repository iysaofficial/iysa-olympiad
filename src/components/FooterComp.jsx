import '../assets/css/Footer.css'

const FooterComp = () => {
    return(
        <>
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Office</h4>
                                <a href='https://goo.gl/maps/9x18coXGCmSscKec6' target='_blank'>Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Phone</h4>
                                <a href='https://wa.me/+6281770914129' target='_blank'>+62-817-7091-4129</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Email</h4>
                                <a href='mailto:youngscientist.iysa@gmail.com' target='_blank'>youngscientist.iysa@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="./assets/images/logo/IYSAOlympiad.webp" className="img-fluid" style={{maxHeight:"100px"}} alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>An event for the achievement of talented young academics from various countries around the world in solving global problems</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://www.instagram.com/iysa_official/?hl=id" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                                <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                                <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                                <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/AboutPage">About</a></li>
                                <li><a href="/#category-main-section">Category</a></li>
                                {/* <li><a href="#">FAQ</a></li> */}
                                <li><a href="/ContactPage">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Newsletter</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Subscribe to our newsletter to receive our latest news and exclusive deals.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="https://formspree.io/f/xoqgjrok" method='POST'>
                                    <input type="email" name='email' placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Policy Privacy</a></li>

                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default FooterComp