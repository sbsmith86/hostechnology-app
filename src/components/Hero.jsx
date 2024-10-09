

import headerImage from "../images/concierge-bell-header-one.jpg";

export default function Hero({primaryText, secondaryText}) {
    return (
        <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url(${headerImage})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hostechnology</h1>
            <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    )
  }
