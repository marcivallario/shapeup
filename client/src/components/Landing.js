import bannerimg from '../assets/landing.png'

function Landing() {
    return (
        <div id="landing">
            <div id="landing-info">
                <h1>Get In. Get Fit. Get on with your life.</h1>
                <p>The hardest part of a fitness journey is taking the first step. Whether your a seasoned gym pro or fresh to the fitness game, Shape Up makes it easy to level up </p>
            </div>
            <div id="landing-img-container">
                <img src={bannerimg} alt="landing"/>
            </div>
        </div>
    )
}

export default Landing;