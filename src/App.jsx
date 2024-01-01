import "./App.scss";
import Logo from "./assets/images/logo.svg";
import MobileImage from "./assets/images/image-web-3-mobile.jpg";
import DesktopImage from "./assets/images/image-web-3-desktop.jpg";
import PCS from "./assets/images/image-retro-pcs.jpg";
import Laptops from "./assets/images/image-top-laptops.jpg";
import GamePad from "./assets/images/image-gaming-growth.jpg";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance =
        document.body.scrollTop || document.documentElement.scrollTop;

      setScrolled(scrollDistance > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="header__container">
          <a href="#" className="logo">
            <img src={Logo} width={65} height={40} />
          </a>

          <button
            className={sidebar ? "menu active" : "menu"}
            onClick={() => setSidebar(!sidebar)}
          ></button>

          <nav className={!sidebar ? "nav" : "nav active"}>
            <ul className="Menu__List">
              <li className="List__Item">
                <a href="#" className="List__Link">
                  Home
                </a>
              </li>
              <li className="List__Item">
                <a href="#" className="List__Link">
                  New
                </a>
              </li>
              <li className="List__Item">
                <a href="#" className="List__Link">
                  Popular
                </a>
              </li>
              <li className="List__Item">
                <a href="#" className="List__Link">
                  Trending
                </a>
              </li>
              <li className="List__Item">
                <a href="#" className="List__Link">
                  Categories
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <h1 hidden>NEWS HOMEPAGE</h1>
      <main className="main">
        <article className="article">
          <picture className="Illustration">
            <source media="(min-width: 64rem)" srcSet={DesktopImage} />
            <img
              src={MobileImage}
              width="686"
              height="600"
              className="Illustration__Img"
            />
          </picture>
          <h2 className="article__title">The Bright Future of Web 3.0?</h2>
          <div className="texts__block">
            <p className="texts">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a href="#" className="read-more__link">
              Read more
            </a>
          </div>
        </article>

        <aside className="aside">
          <h3 className="aside__heading">New</h3>
          <div className="aside__block">
            <a href="#" className="block__title">
              Hydrogen VS Electric Cars
            </a>
            <p className="block__description">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="aside__block">
            <a href="#" className="block__title">
              The Downsides of AI Artistry
            </a>
            <p className="block__description">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="aside__block">
            <a href="#" className="block__title">
              Is VC Funding Drying Up?
            </a>
            <p className="block__description">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </aside>

        <section className="section">
          <div className="section__block">
            <img src={PCS} width="200" height="254" className="section__img" />
            <div className="section__text-block">
              <a href="#" className="section__title">
                <span className="section__number">01</span>
                Reviving Retro PCs
              </a>
              <p className="section__text">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="section__block">
            <img
              src={Laptops}
              width="200"
              height="254"
              className="section__img"
            />
            <div className="section__text-block">
              <a href="#" className="section__title">
                <span className="section__number">02</span>
                Top 10 Laptops of 2022
              </a>
              <p className="section__text">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="section__block">
            <img
              src={GamePad}
              width="200"
              height="254"
              className="section__img"
            />
            <div className="section__text-block">
              <a href="#" className="section__title">
                <span className="section__number">03</span>
                The Growth of Gaming
              </a>
              <p className="section__text">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io/"
          target="_blank"
          aria-describedby="Frontend Mentor Website"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        Coded by
        <a
          href="https://github.com/Zukizuk"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="Marzuk Entsie's Github profile"
        >
          Zuki
        </a>
      </footer>
    </>
  );
}

export default App;
