import bannerimg from '../assets/landing.png'

function Landing() {
    return (
        <div id="landing-container">
            <div id="landing">
                <div id="landing-img-container">
                    <img src={bannerimg} alt="landing"/>
                </div>
                <div id="landing-details">
                    <h1>Get In. Get Fit.
                        <br/>
                    Get on with <span className="green-accent">your life.</span></h1>
                    <p>The hardest part of a fitness journey is taking the first step. Whether your a seasoned gym pro or fresh to the fitness game, Shape Up makes it easy to level up and get your health on track. Utilize the random workout generator to take all the guesswork out of gymwork. 
                    <br />
                    <br />
                    Broken into the 5 main muscle groups (back, chest, abs, legs, and cardio), the generator browses the excess of exercises available to you and serves you an exercise for each muscle group for a complete full body workout. Struggling with an exercise? Randomly generate a new exercise for specific muscle groups without losing your other choices. Once you're satisfied with a regime, save it to your account so the next time you slide your workout gear on, you can rest assured that paralysis-by-analysis will <em>not</em> dominate your fitness goals.
                    <br />
                    <br />
                    Working on your health &#38; fitness is a great step towards investing in your future &#8212; and Shape Up is with you every step of the way. Curated, customizable full-body workouts are only a click away.
                    </p>
                    <h3>Let's get <span className="green-accent">moving.</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Landing;