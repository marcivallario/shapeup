import bannerimg from '../assets/landing.png'

function Landing() {
    return (
        <div id="landing">
            <div id="landing-img-container">
                <img src={bannerimg} alt="landing"/>
            </div>
            <div id="landing-info">
                <h1>Get In. Get Fit. Get on with your life.</h1>
                <p>The hardest part of a fitness journey is taking the first step. Whether your a seasoned gym pro or fresh to the fitness game, Shape Up makes it easy to level up and get your health on track. Utilize the random workout generator to take all the guesswork out of gymwork. Broken into the 5 main muscle groups (back, chest, abs, legs, and cardio), allow the computer to choose exercises </p>
            </div>
        </div>
    )
}

export default Landing;