import bannerimg from '../assets/landing.jpg'

function Landing() {
    return (
        <div id="landing">
            <div id="landing-info">
                <h1>Title Goes Here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris. Volutpat maecenas volutpat blandit aliquam etiam erat. Nibh venenatis cras sed felis. Eget gravida cum sociis natoque penatibus et. Vitae et leo duis ut diam quam nulla porttitor. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Mattis pellentesque id nibh tortor. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Ut morbi tincidunt augue interdum velit.</p>
            </div>
            <div id="landing-img-container">
                <img src={bannerimg} alt="landing"/>
            </div>
        </div>
    )
}

export default Landing;