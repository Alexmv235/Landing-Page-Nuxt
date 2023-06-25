import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Landing Page</title>
          <meta property="og:title" content="Landing Page" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-left-side">
              <img
                id="logo"
                alt="image"
                src="/274995536_5614077518619339_1292391308076401920_n%20%5B1%5D-200h.jpg"
                className="home-image"
              />
              <div data-role="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
              <div className="home-links-container">
                <a href="#resources" className="home-link Anchor">
                  Resources
                </a>
                <a href="#inspiration" className="home-link01 Anchor">
                  Inspiration
                </a>
                <a href="#process" className="home-link02 Anchor">
                  Process
                </a>
                <a href="#ourstory" className="home-link03 Anchor">
                  Our story
                </a>
              </div>
            </div>
            <div className="home-right-side">
              <button className="home-cta-btn Anchor button">START NOW</button>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image1"
                />
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <a href="#resources" className="home-link04 Anchor">
                  Resources
                </a>
                <a href="#inspiration" className="home-link05 Anchor">
                  Inspiration
                </a>
                <a href="#process" className="home-link06 Anchor">
                  Process
                </a>
                <a href="#ourstory" className="home-link07 Anchor">
                  Our story
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="resources" className="home-hero">
          <div className="home-content-container">
            <div className="home-hero-text">
              <h1 className="home-heading Section-Heading">
                Tell the whole world about your ideea
              </h1>
              <span className="home-text Section-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </span>
              <button className="home-cta-btn1 Anchor button">START NOW</button>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text01 Section-Heading">
              Which are the greatest things about it?
            </h2>
          </div>
          <div className="home-cards-container">
            <div className="home-features-card">
              <div className="home-icon-container">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container">
                <span className="home-heading01 Card-Heading">Feature One</span>
                <span className="home-text02 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-features-card1">
              <div className="home-icon-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon07">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container1">
                <span className="home-heading02 Card-Heading">Feature Two</span>
                <span className="home-text03 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-features-card2">
              <div className="home-icon-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container2">
                <span className="home-heading03 Card-Heading">
                  Feature Three
                </span>
                <span className="home-text04 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-features-card3">
              <div className="home-icon-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon13">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container3">
                <span className="home-heading04 Card-Heading">
                  Feature Four
                </span>
                <span className="home-text05 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-features-card4">
              <div className="home-icon-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container4">
                <span className="home-heading05 Card-Heading">
                  Feature Five
                </span>
                <span className="home-text06 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-features-card5">
              <div className="home-icon-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon19">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container5">
                <span className="home-heading06 Card-Heading">Feature Six</span>
                <span className="home-text07 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="process" className="home-services">
          <div className="home-heading-container1">
            <h1 className="home-text08 Section-Heading">
              More things to explore
            </h1>
            <span className="home-text09 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="home-cards-container1">
            <div className="home-service-card">
              <h3 className="home-text10 Card-Heading">Resources</h3>
              <span className="home-text11 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="Anchor">Learn more</span>
            </div>
            <div className="home-service-card1">
              <h3 className="home-text12 Card-Heading">Community</h3>
              <span className="home-text13 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="Anchor">Learn more</span>
            </div>
            <div className="home-service-card2">
              <h3 className="home-text14 Card-Heading">Newsroom</h3>
              <span className="home-text15 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="Anchor">Learn more</span>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div className="home-team">
          <div className="home-heading-container2">
            <h1 className="home-text16 Section-Heading">Meet the Team</h1>
            <span className="home-text17 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="home-cards-container2">
            <div className="home-team-card">
              <div className="home-avatar-container">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="home-name Card-Heading">John</span>
              <span className="home-position Card-Text">Position</span>
            </div>
            <div className="home-team-card1">
              <div className="home-avatar-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="home-name1 Card-Heading">Megan</span>
              <span className="home-position1 Card-Text">Position</span>
            </div>
            <div className="home-team-card2">
              <div className="home-avatar-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="home-name2 Card-Heading">Alex</span>
              <span className="home-position2 Card-Text">Position</span>
            </div>
            <div className="home-team-card3">
              <div className="home-avatar-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="home-name3 Card-Heading">Sabrina</span>
              <span className="home-position3 Card-Text">Position</span>
            </div>
            <div className="home-team-card4">
              <div className="home-avatar-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="home-name4 Card-Heading">Ben</span>
              <span className="home-position4 Card-Text">Position</span>
            </div>
          </div>
        </div>
        <div className="home-section-separator1"></div>
        <div id="ourstory" className="home-our-story">
          <div className="home-heading-container3">
            <h1 className="home-text18 Section-Heading">Our story</h1>
            <span className="home-text19 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="home-cards-container3">
            <div className="home-left-section">
              <div className="home-video-container">
                <video className="home-video"></video>
                <div className="home-play-container">
                  <svg viewBox="0 0 1024 1024" className="home-icon32">
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-content-container1">
                <span className="home-heading07 Card-Heading">
                  This text is the name of the article. Lorem ipsum dolor sit
                  metsed do eiusm od tempor.
                </span>
                <span className="home-text20 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </span>
                <span className="home-text21 Card-Text">
                  {' '}
                  Fusce nec tellus sed augue semper porta. Mauris massa.
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
                </span>
                <span className="Anchor">Read more</span>
              </div>
              <div className="home-info-container">
                <span className="Card-Text">12 Apr 2021</span>
                <div className="home-stats-container">
                  <div className="home-messages-container">
                    <svg viewBox="0 0 1024 1024" className="home-icon34">
                      <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                    </svg>
                    <span className="Card-Text">123</span>
                  </div>
                  <div className="home-views-container">
                    <svg viewBox="0 0 1024 1024" className="home-icon36">
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className="Card-Text">4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-right-section">
              <div className="home-card">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image2"
                />
                <div className="home-content-container2">
                  <span className="home-text24 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="Anchor">Read more</span>
                </div>
                <div className="home-info-container1">
                  <span className="Card-Text">12 Apr 2021</span>
                  <div className="home-stats-container1">
                    <div className="home-messages-container1">
                      <svg viewBox="0 0 1024 1024" className="home-icon38">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="Card-Text">123</span>
                    </div>
                    <div className="home-views-container1">
                      <svg viewBox="0 0 1024 1024" className="home-icon40">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="Card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image3"
                />
                <div className="home-content-container3">
                  <span className="home-text27 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="Anchor">Read more</span>
                </div>
                <div className="home-info-container2">
                  <span className="Card-Text">12 Apr 2021</span>
                  <div className="home-stats-container2">
                    <div className="home-messages-container2">
                      <svg viewBox="0 0 1024 1024" className="home-icon42">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="Card-Text">123</span>
                    </div>
                    <div className="home-views-container2">
                      <svg viewBox="0 0 1024 1024" className="home-icon44">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="Card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image4"
                />
                <div className="home-content-container4">
                  <span className="home-text30 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="Anchor">Read more</span>
                </div>
                <div className="home-info-container3">
                  <span className="Card-Text">12 Apr 2021</span>
                  <div className="home-stats-container3">
                    <div className="home-messages-container3">
                      <svg viewBox="0 0 1024 1024" className="home-icon46">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="Card-Text">123</span>
                    </div>
                    <div className="home-views-container3">
                      <svg viewBox="0 0 1024 1024" className="home-icon48">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="Card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-card3">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image5"
                />
                <div className="home-content-container5">
                  <span className="home-text33 SmallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="Anchor">Read more</span>
                </div>
                <div className="home-info-container4">
                  <span className="Card-Text">12 Apr 2021</span>
                  <div className="home-stats-container4">
                    <div className="home-messages-container4">
                      <svg viewBox="0 0 1024 1024" className="home-icon50">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="Card-Text">123</span>
                    </div>
                    <div className="home-views-container4">
                      <svg viewBox="0 0 1024 1024" className="home-icon52">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="Card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-get-in-touch">
          <h2 className="home-text36 Section-Heading">Get in touch</h2>
          <div className="home-content-container6">
            <div className="home-form-container">
              <span className="home-heading08 BigCard-Heading">
                Send us a message
              </span>
              <input
                type="text"
                required="true"
                placeholder="Name"
                className="home-name5 input"
              />
              <input
                type="text"
                required="true"
                placeholder="E-mail"
                className="home-email input"
              />
              <textarea
                placeholder="Your Message"
                className="home-message textarea"
              ></textarea>
              <button className="home-cta-btn2 Anchor button">SEND</button>
            </div>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading09">London, UK</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon54">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">Address</span>
                </div>
                <div className="home-email1">
                  <svg viewBox="0 0 1024 1024" className="home-icon56">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="Section-Text">E-mail Address</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon58"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="Section-Text">Phone Number</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon60">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon62">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon64">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon66">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link01 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link02 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-content-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .home-hero-text {
            width: 65%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-text {
            color: var(--dl-color-gray-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: 30px;
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .home-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-features-card {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon04 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading01 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text02 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card1 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon07 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading02 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text03 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card2 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon10 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading03 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text04 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card3 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon13 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading04 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text05 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card4 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon16 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading05 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text06 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-features-card5 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container5 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon19 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading06 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text07 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-services {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text08 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text09 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-cards-container1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-service-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-text10 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text11 {
            color: var(--dl-color-gray-700);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-service-card1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-text12 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text13 {
            color: var(--dl-color-gray-700);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-service-card2 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .home-text14 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text15 {
            color: var(--dl-color-gray-700);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-team {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text16 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text17 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-cards-container2 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-team-card {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .home-avatar-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon22 {
            width: 48px;
            height: 48px;
          }
          .home-name {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-position {
            color: var(--dl-color-gray-700);
          }
          .home-team-card1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .home-avatar-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon24 {
            width: 48px;
            height: 48px;
          }
          .home-name1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-position1 {
            color: var(--dl-color-gray-700);
          }
          .home-team-card2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .home-avatar-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon26 {
            width: 48px;
            height: 48px;
          }
          .home-name2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-position2 {
            color: var(--dl-color-gray-700);
          }
          .home-team-card3 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .home-avatar-container3 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon28 {
            width: 48px;
            height: 48px;
          }
          .home-name3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-position3 {
            color: var(--dl-color-gray-700);
          }
          .home-team-card4 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .home-avatar-container4 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon30 {
            width: 48px;
            height: 48px;
          }
          .home-name4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-position4 {
            color: var(--dl-color-gray-700);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-our-story {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container3 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text18 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text19 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-cards-container3 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left-section {
            width: 50%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            margin-right: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-video-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-video {
            width: 100%;
            height: 350px;
            position: relative;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-play-container {
            top: calc(50% - 25px);
            left: calc(50% - 25px);
            right: auto;
            width: 50px;
            bottom: auto;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .home-icon32 {
            fill: var(--dl-color-gray-500);
            width: 48px;
            height: 48px;
          }
          .home-content-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: flex-start;
          }
          .home-heading07 {
            text-align: left;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text20 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text21 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-info-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-stats-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-messages-container {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-icon34 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-views-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon36 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-right-section {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image2 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-content-container2 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-text24 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-info-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-stats-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-messages-container1 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-icon38 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-views-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon40 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-card1 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image3 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-content-container3 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-text27 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-info-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-stats-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-messages-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-icon42 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-views-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon44 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-card2 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image4 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-content-container4 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-text30 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-info-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-stats-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-messages-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-icon46 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-views-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon48 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-card3 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image5 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-content-container5 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-text33 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-info-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-stats-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-messages-container4 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-icon50 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-views-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon52 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-get-in-touch {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text36 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container6 {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-form-container {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
          }
          .home-heading08 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-name5 {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-email {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-message {
            width: 100%;
            border: none;
            height: 140px;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-cta-btn2 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-locations-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-location-1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-heading09 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon54 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon56 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon58 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon60 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon62 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon64 {
            width: 24px;
            height: 24px;
          }
          .home-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-icon66 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column-reverse;
            }
            .home-content-container {
              flex-direction: column-reverse;
            }
            .home-hero-text {
              width: 80%;
            }
            .home-cards-container2 {
              justify-content: center;
            }
            .home-cards-container3 {
              flex-direction: column;
            }
            .home-left-section {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-right-section {
              width: 100%;
            }
            .home-form-container {
              width: 60%;
            }
            .home-locations-container {
              flex-wrap: wrap;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-links-container {
              display: none;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card3 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card4 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card5 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-cards-container1 {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .home-service-card {
              width: 65%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card1 {
              width: 65%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-service-card2 {
              width: 65%;
            }
            .home-heading-container2 {
              width: 100%;
            }
            .home-heading-container3 {
              width: 100%;
            }
            .home-cards-container3 {
              align-items: center;
              flex-direction: column;
            }
            .home-content-container6 {
              width: 100%;
              flex-direction: column;
            }
            .home-form-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-locations-container {
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .home-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-hero {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content-container {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-hero-text {
              width: 100%;
            }
            .home-features {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features-card {
              width: 100%;
            }
            .home-features-card1 {
              width: 100%;
            }
            .home-features-card2 {
              width: 100%;
            }
            .home-features-card3 {
              width: 100%;
            }
            .home-features-card4 {
              width: 100%;
            }
            .home-features-card5 {
              width: 100%;
            }
            .home-services {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-service-card {
              width: 100%;
            }
            .home-service-card1 {
              width: 100%;
            }
            .home-service-card2 {
              width: 100%;
            }
            .home-team {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text16 {
              text-align: center;
            }
            .home-our-story {
              padding-top: var(--dl-space-space-fiveunits);
            }
            .home-text18 {
              text-align: center;
            }
            .home-video {
              height: 200px;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
            .home-card3 {
              width: 100%;
            }
            .home-content-container6 {
              padding-left: 0px;
            }
            .home-form-container {
              padding: var(--dl-space-space-tripleunit);
              margin-right: 0px;
            }
            .home-heading08 {
              text-align: center;
            }
            .home-location-1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
