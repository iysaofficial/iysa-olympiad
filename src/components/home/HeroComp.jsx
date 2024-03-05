const HeroComp = () => {
    return(
        <>
        <section className="hero-section" id="home">
            <div className="hero-content">
                <h3 className="">Welcome to</h3>
                <h1 className="">IYSA Olympiad</h1>
                <h3></h3>
                <p className="">IYSA Olympiad is designed to test your intelligence, creativity and perseverance. With more and more diverse participants, each subject category now gets its own stage, giving every brilliant participant like you a greater chance to shine. let's choose your event</p>
                <div className="hero-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="https://www.instagram.com/iysa_official/?hl=id" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                </div>
                <a href="#category-main-section" className="hero-btn">Choose Your Event</a>
            </div>

            <div className="hero-img">
                <img src="./assets/images/logo/IYSAOlympiad.webp" alt="" />
            </div>
        </section>
        </>
    )
}

export default HeroComp