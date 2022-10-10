import {useEffect, useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Logo from '../asset/logo.png'
import assets1 from '../asset/background-box-images/asset1.png'
import assets2 from '../asset/background-box-images/asset2.png'
import assets3 from '../asset/background-box-images/asset3.png'
import assets4 from '../asset/background-box-images/asset4.png'
import assets13 from '../asset/background/asset13.png'
import slider1 from '../asset/logo-slider/1.svg'
import slider2 from '../asset/logo-slider/2.svg'
import slider3 from '../asset/logo-slider/3.svg'
import slider4 from '../asset/logo-slider/4.svg'
import slider5 from '../asset/logo-slider/5.svg'
import Logo1 from '../asset/logo1.png'
import pen from '../asset/digital-need/pen-icon.png'
import emailjs from '@emailjs/browser'
import Product from './Product.js'
import Service from './service';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial.js'
import Magic from './Magic.js'
import logo1 from '../asset/portfolio/360 logos/1.jpg'
import logo2 from '../asset/portfolio/360 logos/2.jpg'
import logo3 from '../asset/portfolio/360 logos/3.jpg'
import logo4 from '../asset/portfolio/360 logos/4.jpg'
import logo5 from '../asset/portfolio/360 logos/5.jpg'
import logo6 from '../asset/portfolio/360 logos/6.jpg'
import logo7 from '../asset/portfolio/360 logos/7.jpg'
import logo8 from '../asset/portfolio/360 logos/8.jpg'
import logo9 from '../asset/portfolio/360 logos/9.jpg'
import logo10 from '../asset/portfolio/360 logos/10.jpg'
import logo11 from '../asset/portfolio/360 logos/11.jpg'
import logo12 from '../asset/portfolio/360 logos/12.jpg'
import logo13 from '../asset/portfolio/360 logos/13.jpg'
import logo14 from '../asset/portfolio/360 logos/14.jpg'
import logo15 from '../asset/portfolio/360 logos/15.jpg'
import bag1 from '../asset/portfolio/360 bag/1.jpg'
import bag2 from '../asset/portfolio/360 bag/2.jpg'
import bag3 from '../asset/portfolio/360 bag/3.jpg'
import bag4 from '../asset/portfolio/360 bag/4.jpg'
import bag5 from '../asset/portfolio/360 bag/5.jpg'
import bag6 from '../asset/portfolio/360 bag/6.jpg'
import book1 from '../asset/portfolio/360 book/1.jpg'
import book2 from '../asset/portfolio/360 book/2.jpg'
import book3 from '../asset/portfolio/360 book/3.jpg'
import book4 from '../asset/portfolio/360 book/4.jpg'
import book5 from '../asset/portfolio/360 book/5.jpg'
import book6 from '../asset/portfolio/360 book/6.jpg'
import book7 from '../asset/portfolio/360 book/7.jpg'
import brochure1 from '../asset/portfolio/360 broucher/1.jpg'
import brochure2 from '../asset/portfolio/360 broucher/2.jpg'
import brochure3 from '../asset/portfolio/360 broucher/3.jpg'
import brochure4 from '../asset/portfolio/360 broucher/4.jpg'
import brochure5 from '../asset/portfolio/360 broucher/5.jpg'
import brochure6 from '../asset/portfolio/360 broucher/6.jpg'
import brochure7 from '../asset/portfolio/360 broucher/7.jpg'
import busines1 from '../asset/portfolio/360 business/1.jpg'
import busines2 from '../asset/portfolio/360 business/2.jpg'
import busines3 from '../asset/portfolio/360 business/3.jpg'
import busines4 from '../asset/portfolio/360 business/4.jpg'
import busines5 from '../asset/portfolio/360 business/5.jpg'
import busines6 from '../asset/portfolio/360 business/6.jpg'
import busines7 from '../asset/portfolio/360 business/7.jpg'
import cars1 from '../asset/portfolio/360 cars/1.jpg'
import cars2 from '../asset/portfolio/360 cars/2.jpg'
import cars3 from '../asset/portfolio/360 cars/3.jpg'
import cars4 from '../asset/portfolio/360 cars/4.jpg'
import cars5 from '../asset/portfolio/360 cars/5.jpg'
import signage1 from '../asset/portfolio/360 signage/1.jpg'
import signage2 from '../asset/portfolio/360 signage/2.jpg'
import signage3 from '../asset/portfolio/360 signage/3.jpg'
import signage4 from '../asset/portfolio/360 signage/4.jpg'
import stationary1 from '../asset/portfolio/360 stationary/1.jpg'
import stationary2 from '../asset/portfolio/360 stationary/2.jpg'
import stationary3 from '../asset/portfolio/360 stationary/3.jpg'
import stationary4 from '../asset/portfolio/360 stationary/4.jpg'
import Tshirt1 from '../asset/portfolio/360 T-shirt/1.jpg'
import Tshirt2 from '../asset/portfolio/360 T-shirt/2.jpg'
import Tshirt3 from '../asset/portfolio/360 T-shirt/3.jpg'
import Tshirt4 from '../asset/portfolio/360 T-shirt/4.jpg'
import web1 from '../asset/portfolio/360 web/1.jpg'
import web2 from '../asset/portfolio/360 web/2.jpg'
import web3 from '../asset/portfolio/360 web/3.jpg'
import web4 from '../asset/portfolio/360 web/4.jpg'
import web5 from '../asset/portfolio/360 web/5.jpg'
import web6 from '../asset/portfolio/360 web/6.jpg'
import web7 from '../asset/portfolio/360 web/7.jpg'
import web8 from '../asset/portfolio/360 web/8.jpg'
import person1 from '../asset/person1.webp'
import person2 from '../asset/person2.webp'
import person3 from '../asset/person3.webp'


export default function Home() {

  // Mailing Function

  const form = useRef();
  
  function sendEmail(e) {
    e.preventDefault();
    var firstName = document.querySelector('#First_Name').value;
    var user_email = document.querySelector('#User_Email').value;
    var user_price = document.querySelector('#User_Price').value;
    var user_message = document.querySelector('#User_Message').value;
   if(firstName != "" && firstName != " " && user_email != "" && user_email != " " && user_price != "" && user_message != "" && user_message != " ")
   {
    emailjs.sendForm('service_p0op1zm', 'template_z05axmh', e.target, 'LTg0QPyuGiWeZ1LBU')
    .then((result) => {
    console.log(result.text);
      
    }, (error) => {
    console.log(error.text);
   
    });
    e.target.reset()
   }
   else {
    console.log('Fill Fields');
   }
  }

 

  return (  
    <>
      <Head>
   
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      <link rel = "icon" href ={Logo.src} type = "image/x-icon"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> 360 DIGITAL </title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha512-0S+nbAYis87iX26mmj/+fWt1MmaKCv80H+Mbo+Ne7ES4I6rxswpfnC6PxmLiw33Ywj2ghbtTw0FkLbMWqh4F7Q==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
         {/* import external javascript */}
         <script defer type="text/javascript" src="/static/jQuery.js"></script>
         {/* <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script> */}
   
      </Head>

    {/* modal start */}
    

      <header id="home">
     
   {/*----------------------- nav start -----------------------*/}
   <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3">
    <div className="container">
      {/* Logo */}
      <a className="navbar-brand" href="#">
        <Image src={Logo} />
      </a>
      {/* Navbar toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Collapse */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {/* Nav */}
        <div className="navbar-nav mx-lg-auto">
          <li className="nav-itemm">
            <a className="nav-link" href="#">
              <i className="fa fa-home" />
            </a>
          </li>
          <li className="nav-itemm">
            <a className="nav-link" href="#cus_logoslider">
              Logo
            </a>
          </li>
          <li className="nav-itemm">
            <a className="nav-link" href="#portfolio">
              Branding
            </a>
          </li>
         <li className="nav-itemm">
            <a className="nav-link" href="#tabs-content">
              Pricing
            </a>
          </li>
          <li className="nav-itemm">
            <a className="nav-link" href="#cus_about">
              About
            </a>
          </li>
          <li className="nav-itemm">
            <a className="nav-link" data-bs-toggle="modal" href="#myModal2">
              Contact
            </a>
          </li>
        </div>
        {/* Right navigation */}
        <div className="navbar-nav ">
          <li className="nav-itemm">
            <button
              type="button"
              data-bs-toggle="modal"
              href="#myModal2"
              className="btn btn-secondary"
            >
              Request a Project
            </button>
            {/* modal start */}
           
              <div id="myModal1" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <i
                        data-bs-dismiss="modal"
                        className="fa fa-close right-close-btnn"
                      />
                    </div>
                    <Image className="modal-img1" src={Logo} />
                    <div className="modal-body">
                      <div className="flexbox-container-modal">
                        <div className="flexbox-item fixeddd">
                          <div className="demo">
                            <h2>Our Graphic Design</h2>
                            <p contentEditable="true">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Architecto velit distinctio odio ab dolore
                              explicabo aspernatur quas minus dolorem. Culpa earum
                              aspernatur, doloribus porro expedita odit doloremque
                              molestias veniam voluptas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
            {/* modal end */}
          </li>
          <li className="nav-itemm">
            <a className="nav-link" href="#">
              <i className="fa fa-phone" /> 650-340-8951
            </a>
          </li>
        </div>
      </div>
    </div>
  </nav>
  {/*----------------------- nav end -----------------------*/}
  </header>


    <div id="myModal2" className="modal fade">
      <div className="modal-dialog mqw">
        <div className="modal-contentt">
          <div className="modal-header">
            <i
              data-bs-dismiss="modal"
              className="fa fa-close right-close-btnn"
            />
          </div>
         <div className='modal_logo'>
          <Image
              className="modal-img1"
              src={Logo1}
            />
         </div>
          <div className="modal-body">
            <div className="flexbox-container-modal">
              <div className="flexbox-item fixeddd">
                <div className="demo12">
                  <h1>Contact Us</h1>
                  <form className="row g-3" useref="form" onSubmit={sendEmail}>
                      <div className="col-md-12">
                        {/*    <label for="inputEmail4" class="form-label">Email</label>*/}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nature of your Business"
                          name='first_name'
                          id="First_Name"
                        />
                      </div>
                      <div className="col-md-12">
                        {/*    <label for="inputPassword4" class="form-label">Password</label>*/}
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name='user_email'
                          id="User_Email"
                        />
                      </div>
                      <div className="col-md-12">
                        {/*    <label for="inputPassword4" class="form-label">Password</label>*/}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Example +1 111 111 1111 "
                          name='user_price'
                          id="User_Price"
                          maxlength="12"
                          
                        />
                      </div>
                      <div className="form-outline">
                        <textarea
                          className="form-control"
                          placeholder="Additional Detials"
                          id="User_Message"
                          rows={3}
                          name="user_message"
                          defaultValue={""}
                        />
                        {/*  <label class="form-label" for="textAreaExample2">Message</label>*/}
                      </div>
                      {/* <p className="fa-regular fa-circle-exclamation">Unable to send your message</p> */}
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    {/* modal end */}


  {/*----------------------- nav end -----------------------*/}
        {/*----------------------- banner start -----------------------*/}
        <section className="home-banner">
  <div className="home-banner-bg position-absolute header-distance">
    {" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/banner-bg/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237738380"
      alt=""
      id="home-banner-bg-1"
    />{" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/banner-bg/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237738916"
      alt=""
      id="home-banner-bg-2"
    />{" "}
    <img
      src="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/home/banner-bg/3.png"
      alt=""
      id="home-banner-bg-3"
    />{" "}
    <img
      src="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/home/banner-bg/4.png"
      alt=""
      id="home-banner-bg-4"
    />{" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/banner-bg/5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237740632"
      alt=""
      id="home-banner-bg-5"
    />{" "}
  </div>
  <div className="container banner-center">
    <div className="row">
      <div className="col-md-5">
        <div className="banner-heading">
          <h1>
            Rise And Shine With <span>Our Graphic Design</span>
          </h1>
          {/*<p>We have mastered the art of design by keeping it minimal yet impactful. Our design philosophy is timeless and versatile.</p>*/}
        </div>
        <form
          className="home-banner-form"
        >
          {" "}
          <input
            type="text"
            name="cname"
            placeholder="Enter Your Business Name"
            className="home-banner-form-input"
          />{" "}
          <input
            type="submit"
            defaultValue="Let's Start"
            className="home-banner-form-submit"
          />{" "}
        </form>
        <div className="banner-small-text">
          <p>Fresh Designs, No Clip Arts, 15 Days 100% Money-back Guarantee!</p>
        </div>
        {/* <div class="link-area"> <a href="pricing.html" class="a-link purple-link">See Pricing</a> <a href="#portfolio" class="a-link scroll-to">Vist Portfolio</a> </div> */}
      </div>
    </div>
  </div>
  <div className="banner-right-area">
    {" "}
    <img
      src={assets1.src}
      alt=""
      className="banner-right-center-img"
    />{" "}
    <img
      src={assets2.src}
      alt=""
      className="banner-right-center-img"
    />{" "}
    <img
      src={assets3.src}
      alt=""
      className="banner-right-top-img"
    />{" "}
    <img
      src={assets4.src}
      alt=""
      className="banner-right-bottom-img"
    />
    <div className="half-height-box home-right-banner-logo">
      <div className="right-sec-heading">
        <h2>Logo Design</h2>
        <h3>Logo Design with Ravishing Pixels</h3>
        <p>
          Every brand craves to be symbolic; we fulfill that urge by designing
          logos that signifies brand values.
        </p>{" "}
        <a href="https://www.logofie.com/logo">
          Explore Now <i className="fas fa-long-arrow-alt-right" />
        </a>{" "}
      </div>
    </div>
    <div className="half-height-box d-flex pl-13-per">
      <div className="half-width-box home-right-banner-branding">
        <div className="right-sec-heading pl-0">
          <h2>Brand Design</h2>
          <h3>Perfect Branding Designs</h3>
          <p>Mark your digital territory with the power of branding.</p>{" "}
          <a href="https://www.logofie.com/branding">
            Explore Now <i className="fas fa-long-arrow-alt-right" />
          </a>{" "}
        </div>
      </div>
      <div className="half-width-box standard-box home-right-banner-web">
        <div className="right-sec-heading pl-0">
          <h2>Web Design</h2>
          <h3>Websites with Brilliance</h3>
          <p>Website designs straight from design heaven!</p>{" "}
          <a href="https://www.logofie.com/web">
            Explore Now <i className="fas fa-long-arrow-alt-right" />
          </a>{" "}
        </div>
      </div>
    </div>
  </div>
</section>

  {/*----------------------- banner end -----------------------*/}
  {/*----------------------- logo slider start -----------------------*/}
  
  <section id="cus_logoslider" className="white-section pb-0">
  
  <div className="container">
    <div className="section-small-heading">
      <h1>You Will Be In Creative Hands!</h1>
    </div>
    <div className="companies-carousel owl-carousel">
      <Product path={slider1.src} />
      <Product path={slider2.src} />
      <Product path={slider3.src} />
      <Product path={slider4.src} />
      <Product path={slider5.src} />
      </div>
  </div>
</section>

      {/*----------------------- logo slider end -----------------------*/}
      {/* START OF HOME FEATURE*/}
      <section className="fixed-scroll-sec">
      <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <div className="fixed-scroll-area">
            <div className="section-heading">
              <h1>
                The Ultimate Design Experience For All.{" "}
                <span>Priceless designs at less price!</span>
              </h1>
              <p>
                The only thing we have set high is the bar of creativity. Our
                services are meant to support your digital dreams, not to make
                you go bankrupt. With the wide range of packages, our offerings
                have everything for everyone.
              </p>
            </div>
            <div className="fixed-scroll-area-link">
              <ul>
                <li>
                  <a href="#first-fixed" className="active">
                    <span>01</span>Experience That Counts
                  </a>
                </li>
                <li>
                  <a href="#second-fixed">
                    <span>02</span>Multiple Revisions
                  </a>
                </li>
                <li>
                  <a href="#third-fixed">
                    <span>03</span>Fast Turnaround Times
                  </a>
                </li>
                <li>
                  <a href="#forth-fixed">
                    <span>04</span>Two-way Communication
                  </a>
                </li>
                <li>
                  <a href="#fifth-fixed">
                    <span>05</span>Customer Care Before Anything Else
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-5">
          <div className="fixed-right-item" id="first-fixed">
            {" "}
            <img
              src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/fixed-section/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237850642"
              alt=""
            />
            <h5>Experience That Counts</h5>
            <p>
              Logofie is a place that has completed thousands of projects and
              fulfilled every dream that was entrusted to us.
            </p>
          </div>
          <div className="fixed-right-item" id="second-fixed">
            {" "}
            <img
              src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/fixed-section/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237851070"
              alt=""
            />
            <h5>Multiple Revisions</h5>
            <p>
              We never run out of creative fuel and don&apos;t stop until we have
              satisfied our client. No worries if you didn&apos;t like the initial
              custom logo design; we offer unlimited revisions so that you can
              choose the best logo design for your brand.
            </p>
          </div>
          <div className="fixed-right-item" id="third-fixed">
            {" "}
            <img
              src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/fixed-section/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237851554"
              alt=""
            />
            <h5>Fast Turnaround Times</h5>
            <p>
              Our team is not only creative but also blazingly fast and
              efficient. Once you have confirmed your order, Just consider it
              done!
            </p>
          </div>
          <div className="fixed-right-item" id="forth-fixed">
            {" "}
            <img
              src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/fixed-section/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237851829"
              alt=""
            />
            <h5>Two-way Communication</h5>
            <p>
              Communication is key to the success of any project. Our team will
              stay connected to you at every phase of the designing process.
            </p>
          </div>
          <div className="fixed-right-item" id="fifth-fixed">
            {" "}
            <img
              src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/home/fixed-section/5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643237852464"
              alt=""
            />
            <h5>Customer Care Before Anything Else</h5>
            <p>
              We are here to serve you. All our services, be it branding, logo
              designing, or web development, have a single goal: To make your
              brand a success!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END OF HOME FEATURE*/}
  {/*START OF PORTFOLIO*/}
  <section className="purple-sec portfolio-before-sec" id="portfolio">
    {" "}
    <img
      src="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/shapes/triangle.png"
      alt=""
      className="position-absolute top-0 left-0 triangle-top-left max-width-190"
    />{" "}
    <img
      src="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/shapes/circle.png"
      alt=""
      className="position-absolute top-0 right-0 circle-top-right max-width-190"
    />
    <div className="container">
      <div className="section-heading">
        <h1>
          Our Offerings
          <br /> and <span>Portfolio</span>
        </h1>
      </div>
      <div className="services-carousel owl-carousel">
        <div className="item">
          <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236839315" 
          heading="Custom Logo Designs"
          text="Say no to cliparts and generic-looking logos."
          />
           <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236839796" 
          heading="Social Media Creatives"
          text="Stop compromising on your social media marketing, get assist by us!"
          />
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236842205" 
          heading="Custom Design Accessories"
          text="Take a step ahead and take your branding to the next level."
          />
          </div>
          <div className="item">
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236840319" 
          heading="Brand Identity Design"
          text="Brand development that you require to create a unique identity."
          />
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236840622" 
          heading="Car Wrap Design"
          text="Go creative and brand your company vehicles to make your presence."
          />
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236842807" 
          heading="Digital Illustrations"
          text="Get your custom illustrations and add creativity in it."
          />
          </div>
          <div className="item">
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236841145" 
          heading="Website Design Templates"
          text="In the digital world, you cannot afford to be mediocre."
          />
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236841693" 
          heading="Flyers"
          text=" Grab the attention of your potential customers the old school way."
          />
            <Service 
          path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/services/9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236843189" 
          heading="Signage Design"
          text="Our designs will get them hooked at first glance."
          />
       
        </div>
      </div>
      <div className="dashed-tabs scrollable-tabs mt-60">
        <ul className="nav nav-tabs" id="scrollable-tabs-ul">
          <li className="nav-item">
            {" "}
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#logo-design-portfolio"
            >
              Logo Design
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#web-design-portfolio"
            >
              Web Design
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#business-card-portfolio"
            >
              Business Card
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#stationary-portfolio"
            >
              Stationary
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" data-toggle="tab" href="#car-portfolio">
              Car Wraps
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#brochure-portfolio"
            >
              Brochure
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#t-shirts-portfolio"
            >
              T Shirts
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#book-covers-portfolio"
            >
              Book Covers
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a className="nav-link" data-toggle="tab" href="#signage-portfolio">
              Signage
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a
              className="nav-link"
              data-toggle="tab"
              href="#bag-design-portfolio"
            >
              Bag Design
            </a>{" "}
          </li>
        </ul>
        <div className="prev-portfolio">
          <i className="fas fa-chevron-left" />
        </div>
        <div className="next-portfolio">
          <i className="fas fa-chevron-right" />
        </div>
      </div>
    </div>
  </section>
  <section className="dark-grey-sec portfolio-sec pt-0 position-rel">
    {" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/shapes/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236794807"
      alt=""
      className="position-absolute"
      style={{
        width: "100%",
        left: "-10px",
        zIndex: 2,
        maxWidth: 85,
        top: "-53px"
      }}
    />
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/shapes/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236795269"
      alt=""
      className="position-absolute"
      style={{
        width: "100%",
        right: "-15px",
        top: "-90px",
        zIndex: 2,
        maxWidth: 85
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="portolio-up-sec">
            <div className="tab-content">
              <div id="logo-design-portfolio" className="tab-pane active">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={logo1} />
                    <Portfolio path ={logo2} />
                    <Portfolio path ={logo3} />
                    <Portfolio path ={logo4} />
                    <Portfolio path ={logo5} />
                   
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={logo6} />
                    <Portfolio path ={logo7} />
                    <Portfolio path ={logo8} />
                    <Portfolio path ={logo9} />
                    <Portfolio path ={logo10} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={logo11} />
                    <Portfolio path ={logo12} />
                    <Portfolio path ={logo13} />
                    <Portfolio path ={logo14} />
                    <Portfolio path ={logo15} />

                </div>
                </div>
              </div>
              <div id="web-design-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={web1} />
                    <Portfolio path ={web2} />
                    <Portfolio path ={web3} />
               
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={web4} />
                    <Portfolio path ={web5} />
                    <Portfolio path ={web6} />
                    
                    </div>
                  <div className="col-md-4">

                    <Portfolio path ={web7} />
                    <Portfolio path ={web8} />
                
                </div>
                </div>
              </div>
              <div id="business-card-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={busines1} />
                    <Portfolio path ={busines2} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={busines3} />
                    <Portfolio path ={busines4} />
                    <Portfolio path ={busines5} />
                    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={busines6} />
                    <Portfolio path ={busines7} />

                  </div>
                </div>
              </div>
              <div id="stationary-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                  <Portfolio path ={stationary1} />
                    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={stationary2} />
                    <Portfolio path ={stationary3} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={stationary4} />
                   
                  </div>
                </div>
              </div>
              <div id="car-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={cars1} />
                    <Portfolio path ={cars2} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={cars3} />
                    <Portfolio path ={cars4} />

                  </div>
                  <div className="col-md-4">

                  <Portfolio path ={cars5} />

                  </div>
                </div>
              </div>
              <div id="brochure-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={brochure1} />
                    <Portfolio path ={brochure2} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={brochure3} />
                    <Portfolio path ={brochure4} />
                    <Portfolio path ={brochure5} />
                    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={brochure6} />
                    <Portfolio path ={brochure7} />

                  </div>
                </div>
              </div>
              <div id="t-shirts-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={Tshirt1} />
                   
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={Tshirt2} />
                    <Portfolio path ={Tshirt3} />
    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={Tshirt4} />
                    
                  </div>
                </div>
              </div>
              <div id="book-covers-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={book1} />
                    <Portfolio path ={book2} />
                    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={book3} />
                    <Portfolio path ={book4} />
                    <Portfolio path ={book5} />
                    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={book6} />
                    <Portfolio path ={book7} />
                    
                  </div>
                </div>
              </div>
              <div id="signage-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={signage1} /> 
                    <Portfolio path ={signage2} />
                    
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={signage3} /> 
                    <Portfolio path ={signage4} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={signage4} />
                    
                  </div>
                </div>
              </div>
              <div id="bag-design-portfolio" className="tab-pane fade">
                <div className="row">
                  <div className="col-md-4">

                    <Portfolio path ={bag1} /> 
                    <Portfolio path ={bag2}/>

                  
                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={bag3} /> 
                    <Portfolio path ={bag4} />

                  </div>
                  <div className="col-md-4">

                    <Portfolio path ={bag5} /> 
                    <Portfolio path ={bag6} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*END OF PORTFOLIO*/}

  {/* START OF TESTIMONIALS*/}
  <section
    className="purple-sec case-study-sec position-rel"
    style={{ paddingBottom: 50 }}
  >
    <div className="case-study-bg position-absolute top-0 right-0 height-full">

      <Testimonial path="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/testimonials/bg/1.png" id="case-study-bg-1"/>
      <Testimonial path="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/testimonials/bg/2.png" id="case-study-bg-2"/>
      <Testimonial path="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/testimonials/bg/4.png" id="case-study-bg-3"/>
      <Testimonial path="https://ik.imagekit.io/17nbp7w38p/design_gigantic/New/testimonials/bg/4.png" id="case-study-bg-4"/>
    
    </div>
    <div className="container-fluid position-absolute height-full testcontentsec">
      <div className="row height-full">
        <div className="col-md-7">
          <div className="row height-full">
            <div className="col-md-6">
              <div className="testimonial-float-img height-full">


              <Testimonial path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/clients/1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236053974" id="" className="first-img"/>
              <Testimonial path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/clients/2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236054030" id="" className="second-img"/>
              <Testimonial path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/clients/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236054137" id="" className="third-img"/>
              <Testimonial path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/clients/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236055642" id="" className="forth-img"/>
              <Testimonial path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/clients/5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236055653" id="" className="fifth-img"/>
              <Testimonial path="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/clients/6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236055834" id="" className="sixth-img"/>

               
              </div>
            </div>
            <div className="col-md-5">
              <div className="testimonial-bubble-area">
                <div className="testimonial-bubble">
                  <div className="testimonial-bubble-img">
                    {" "}
                    <img
                      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/bubbles/1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643236286146"
                      alt=""
                    />{" "}
                  </div>
                  <div className="textimonial-bubble-detail">
                    <p className="textimonial-bubble-name">
                      Ellen Parker, <span>Hifived</span>
                    </p>
                    <p className="textimonial-bubble-say">
                      “Logofie knows how to hit the bull’s eye!
                    </p>
                    <div className="testimonial-bubble-stars">
                      {" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" />{" "}
                    </div>
                  </div>
                </div>
                <div className="testimonial-bubble">
                  <div className="testimonial-bubble-img">
                    {" "}
                    <img
                      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/bubbles/2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643236286952"
                      alt=""
                    />{" "}
                  </div>
                  <div className="textimonial-bubble-detail">
                    <p className="textimonial-bubble-name">
                      Bertha Miller, <span>Sudaen</span>
                    </p>
                    <p className="textimonial-bubble-say">
                      “I am so impressed with the communication...
                    </p>
                    <div className="testimonial-bubble-stars">
                      {" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" />{" "}
                    </div>
                  </div>
                </div>
                <div className="testimonial-bubble">
                  <div className="testimonial-bubble-img">
                    {" "}
                    <img
                      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/testimonials/bubbles/3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643236287176"
                      alt=""
                    />{" "}
                  </div>
                  <div className="textimonial-bubble-detail">
                    <p className="textimonial-bubble-name">
                      Amasu Brown, <span>Socktech</span>
                    </p>
                    <p className="textimonial-bubble-say">
                      “Electric appliance companies are difficult to...
                    </p>
                    <div className="testimonial-bubble-stars">
                      {" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                      <i className="fa fa-star" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 offset-md-7">
          <div
            className="section-heading"
            style={{ zIndex: 99, position: "relative" }}
          >
            <h1 className="default-heading">
              <span>Our satisfied clientele speaks</span> for our excellence
            </h1>
            <p>
              Logofie has helped hundreds of brands in fulfilling their digital
              dream projects. We measure our success through the contentment of
              our clients. Our reputation for providing quality work precedes us
              in the digital realm.Our customer favored policies are why brands
              enjoy working with us because it is a win-win situation for the
              client. We offer a money-back guarantee in case of client
              dissatisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END OF TESTIMONIALS*/}
  <section className="white-section four-pricing-sec">
    {" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/shapes/circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236796993"
      alt=""
      className="position-absolute top-0 left-0 circle-top-left-2 max-width-190"
    />{" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/shapes/lines.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236797362"
      alt=""
      className="position-absolute top-20 left-0 lines-top-left max-width-200"
    />
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="section-heading mb-60">
            <h1>
              We Are A One-stop Shop For All Your Digital Needs; <br />
              <span>We&apos;Ve Got Everything For Everyone!</span>
            </h1>
          </div>
        </div>
        <div className="col-12 mb-20">
          <ul className="nav nav-tabs serivces-tabs-new" role="tablist">
            <li className="nav-item">
              {" "}
              <a
                className="nav-link active price_tab"
                href="#"
                data-filter="logo"
              >
                Logo Design
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link price_tab" href="#" data-filter="Branding">
                Branding Design
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link price_tab" href="#" data-filter="Web">
                Web Design
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link price_tab" href="#" data-filter="Video">
                Video Animation
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-12">
          <div id="tabs-content">
            <div id="tab1" className="tab-content price__tab">
              {/* tab-1 start */}
              <div className="row" style={{ padding: "10% 0px 2% 0px" }}>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        {/*													<h5 class="card-title">ELITE LOGO <br>PACKAGE</h5>*/}
                        <p>Startup Logo Package</p>
                        <h2 className="card-title">
                          <b>$ 89</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 99{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">9 Custom Logo Design Concepts</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">3 Dedicated Designers</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Vector Files Format</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guaranteed</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Unique Design Guaranteed</b>
                            <br />
                          </i>
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee*</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a
                            href="#myModal2"
                            data-bs-toggle="modal"
                            className="btn btn-primary"
                          >
                            Start Project
                          </a>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Professional Logo Package</p>
                        <h2 className="card-title">
                          <b>$ 179</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 198{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">12 Logo Design Concepts</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">4 Dedicated Designers</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">FREE Business Card Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Letterhead Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Envelope Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Icon Design</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Elite Logo Package</p>
                        <h2 className="card-title">
                          <b>$ 289</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 448{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">UNLIMITED Logo Design Concepts</b>
                          </i>
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">6 Creative Designers</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">FREE Business Card Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Letterhead Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Envelope Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Icon Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Banner Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Email Signature</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Vector Formats (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Ownership Rights</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guaranteed</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Unique Design Guaranteed</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee*</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Business Logo Package</p>
                        <h2 className="card-title">
                          <b>$ 499</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 548{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">5 Pages Website (Wordpress)</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">UNLIMITED Logo Design Concepts</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Creative Design Team (8)</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Dedicated Development Team (2){" "}
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">FREE Business Card Design </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE MS Word Letterhead </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Icon Design </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Banner Design </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Email Signature </b>
                          </i>
                          <br />
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Vector Formats (AI, PSD, EPS, PNG, GIF, JPG, PDF){" "}
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Ownership Rights</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guaranteed</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Unique Design Guaranteed</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee* </b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab-1 end */}
            </div>
            <div id="tab2" className="tab-content price__tab">
              {/* tab-2 start */}
              <div className="row" style={{ padding: "10% 0px 10% 0px" }}>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Startup Collateral Package</p>
                        <h2 className="card-title">
                          <b>$ 99</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 198{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">2 Stationery Design Set</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">FREE Fax Template</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Print Ready Formats</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee *</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Collateral Classic Logo Package</p>
                        <h2 className="card-title">
                          <b>$ 199</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 788{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">2 Stationery Design Set</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Flyer Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Brochure Design (Bi-fold/Tri-fold)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee *</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Premium Collateral Package</p>
                        <h2 className="card-title">
                          <b>$ 399</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 1088{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">2 Stationery Design Set</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Packaging Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">T-Shirt Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">UNLIMITED Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee *</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Unlimited Collateral Package</p>
                        <h2 className="card-title">
                          <b>$ 499</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 1188{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">2 Stationery Design Set</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Menu Card Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">T-Shirt Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">1 Banner Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee *</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab-2 end */}
            </div>
            <div id="tab3" className="tab-content price__tab">
              {/* tab-3 start */}
              <div className="row" style={{ padding: "10% 0px 10% 0px" }}>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Basic Website Package</p>
                        <h2 className="card-title">
                          <b>$ 244</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 488{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">1 Page Website Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">HTML Based</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">1 Banner Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Contact/Query Form</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">3 Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Complete W3C Certified HTML</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Deployment</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Source Files</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Dedicated Project Manager</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Ownership Rights</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guaranteel</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">*NO MONTHLY OR ANY HIDDEN FEE*</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Vector Files Format</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guaranteed</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Startup Website Package</p>
                        <h2 className="card-title">
                          <b>$ 394</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 788{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">3 Page Website Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">HTML Based</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Hover Effects</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">2 Banner Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Sliding Banner</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              2 Stock Photos (You can provide us more)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Contact/Query For</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">3 Professional Email ID’s</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">6 Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Complete W3C Certified HTML</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Deployment</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Source Files</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Dedicated Project Manager</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Ownership Rights</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">*NO MONTHLY OR ANY HIDDEN FEE*</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Professional Website Package</p>
                        <h2 className="card-title">
                          <b>$ 819</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 1639{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Up to 5 Page Website Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              3 Stock Photos (You can provide us more)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">3 Banner Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Sliding Banner</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Hover Effects</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Content Management System (WordPress)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">5 Professional Email ID’s</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Search Engine Submission</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Unlimited Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Complete W3C Certified HTML</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Industry specified Team of Expert Designers and
                              Developers
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Deployment</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Source Files</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Dedicated Project Manager</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Ownership Rights</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">*NO MONTHLY OR ANY HIDDEN FEE*</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Elite Website Package</p>
                        <h2 className="card-title">
                          <b>$ 1399</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 2799{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Unique 5 Page Website Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Custom, Interactive, Dynamic &amp; High End Web
                              Design
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Custom WordPress Development</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">5 Stock Images</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">5 Banner Design</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Sliding Banner</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Unlimited Revisions</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Special Hover Effects</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Content Management System (WordPress)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Mobile Responsive Online</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Appointment/Booking/Scheduling/Online Ordering
                              Integration (If Required)
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Google Friendly Sitemap</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">5 Professional Email ID’s</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Search Engine Submission</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Complete W3C Certified HTML</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Industry specified Team of Expert Designers and
                              Developers
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Deployment</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Complete Source Files</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">Dedicated Project Manager</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Ownership Rights</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Satisfaction Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Money Back Guarantee</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">*NO MONTHLY OR ANY HIDDEN FEE*</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab-3 end */}
            </div>
            <div id="tab4" className="tab-content price__tab">
              {/*  tab-4 start */}
              <div className="row" style={{ padding: "10% 0px 10% 0px" }}>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Startup Video Package</p>
                        <h2 className="card-title">
                          <b>$ 499</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 999{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">30 Second Video</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Professional Script</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Storyboard</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Animation</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Voice - Over &amp; Sound Effects
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">4 weeks Delivery</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Unlimited Revisions</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Classic Video Package</p>
                        <h2 className="card-title">
                          <b>$ 999</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 2198{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">60 Second Video</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Professional Script</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Sample Theme</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Storyboard</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Animation</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Voice - Over &amp; Sound Effects
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">5 weeks Delivery</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Premium Video Package</p>
                        <h2 className="card-title">
                          <b>$ 1499</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 2488{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">90 Second Video</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Professional Script</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Sample Theme</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Storyboard</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Animation</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Voice - Over &amp; Sound Effects
                            </b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">6 weeks Delivery</b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 col-12">
                  <div className="kl">
                    <div className="card">
                      <img
                        className="price-head"
                        src={pen.src}
                      />
                      <div className="card-body a1">
                        <p>Elite Logo Package</p>
                        <h2 className="card-title">
                          <b>$ 2299</b>
                        </h2>
                        <p>
                          <b style={{ textDecoration: "line-through" }}>
                            $ 4598{" "}
                          </b>{" "}
                          Only
                        </p>
                      </div>
                    </div>
                    <div className="card" style={{ marginTop: "5%" }}>
                      <div className="card-body">
                        <h5 className="card-title a4">Features</h5>
                        <div className="a3">
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">120 Second Video</b>
                          </i>
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Professional Script</b>
                          </i>
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Sample Theme</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Storyboard</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;<b className="a6">Animation</b>
                          </i>
                          <br />
                          <i className="fa fa-check">
                            &nbsp;
                            <b className="a6">
                              Voice - Over &amp; Sound Effects
                            </b>
                          </i>
                        </div>
                        <div className="a2">
                          <a href="#myModal2" data-bs-toggle="modal" className="btn btn-primary">
                            Start Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab-4 end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="white-section position-rel" id="cus_about">
    <div className="container">
      <div className="section-heading text-center">
        <h1>
          How Does <span>The Magic Happen?</span>
        </h1>
      </div>{" "}
      <br />
      <div className="row">

        <Magic
         divcls="col-md-4 howitworkdiv text-center howitworkdiv1" 
         path={person1} 
         num="01" 
         heading="You Give Your Input On The Idea" 
         text="  Your input adds the individuality and the uniqueness a brand needs
         to create a distinct identity. Therefore, the first step is the most
         crucial one."
         />
          <Magic
         divcls="col-md-4 howitworkdiv text-center howitworkdiv2" 
         path={person2}
         num="02" 
         heading="We Deliver Our Best Creative Output" 
         text="Your idea is further incubated into perfection by our team of
         creative visionaries. The end result is a polished form of the idea
         you presented."
         />
          <Magic
         divcls="col-md-4 howitworkdiv text-center howitworkdiv3" 
         path={person3}
         num="03" 
         heading="Your Digital Dream Comes To Life" 
         text="Finally, your digital dream is a reality now. Our turnaround time is
         blazingly fast, and you will get your final design within a blink of
         an eye."
         />

      </div>
    </div>
  </section>
  {/* START OF MORE QUESTION CTA*/}
  <section className="light-grey-sec position-rel">
    {" "}
    <img
      src="https://ik.imagekit.io/ffhhlkumnsf/logofie/assets/images/shapes/triangle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643236801166"
      alt=""
      className="position-absolute top-0 left-0 triangle-top-left max-width-190"
    />
    <div className="container position-absolute top-0 height-full horizontal-center">
      <div className="row height-full">
        <div className="col-lg-6 col-md-6 offset-md-6" >
          {" "}
          <Image
            className="pic_360"
            src={assets13}
            height="400px"
            width="500px"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6" style={{zIndex: '2'}}>
          <div className="section-heading mb-40">
            <h1>
              Are you still confused?{" "}
              <span>Don&apos;t worry; we&apos;re here to guide You!</span>
            </h1>
          </div>
          <div className="link-area">
            {" "}
            <a
              href="#myModal2"
              data-bs-toggle="modal"
              onClick={e => e.preventDefault()}
              className="a-link more-padding-lr purple-link"
            >
              Send Email
            </a>{" "}
            
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END OF MORE QUESTION CTA*/}
  <footer>
    <div className="footergraydiv">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <Image src={Logo1} className="footerlogoimg" />
            <div className="footericon">
              {" "}
              <a href="https://www.facebook.com/" className="text-white" rel="noreferrer">
                <i className="fab fa-facebook-f" style={{ marginRight: 5 }} />
                360DIGITAL BAR
              </a>
              {/*<i class="fab fa-twitter"></i>&emsp; <i class="fab fa-linkedin-in"></i>&emsp; <i class="fab fa-instagram"></i>&emsp; <i class="fab fa-pinterest"></i>&emsp; <i class="fab fa-behance"></i>&emsp; <i class="fab fa-dribbble"></i>*/}
            </div>{" "}
            <img
              src="https://www.logofie.com/assets/images/footerpayment.png"
              className="footerpaymentimg"
            />{" "}
          </div>
          <div className="col-md-2 footer-content">
            <h6>PRODUCTS</h6>
            <a href="#cus_logoslider">Logos</a>
            <br /> <a href="#portfolio">Branding</a>
            <br /> <a href="#tabs-content">Pricing</a>
            <br /> <a href="#cus_about">About</a>
            <br /> <a href="#myModal2" data-bs-toggle="modal">Contact</a>
          </div>
          <div className="col-md-2 footer-content">
            <h6>Links</h6>{" "}
            <a href="https://www.logofie.com/contact">Contact Us</a>
            <br /> <a href="https://www.logofie.com/about">About Us</a>
            <br /> <a href="https://www.logofie.com/portfolio">Portfolio</a>
            <br /> <a href="https://www.logofie.com/pricing">Pricing</a>{" "}
          </div>
          {/*<div class="col-md-2 footer-content"> <h6>RESOURCES</h6> <a href="blogs-list.html">Blog</a><br> <a href="pricing.html">Pricing</a><br> <a href="signup.html">Sign Up</a><br> <a href="login.html">Log In</a> </div>*/}
          <div className="col-md-4 footer-content">
            <h6>Address</h6>
            <p>
              Mailing Address - 165 Broadway, 23rd Floor, New York City, New
              York 10006
            </p>
            <h6>Email</h6>
            <p>
              <a href="mailto:info@logofie.com">info@logofie.com</a>
            </p>
            <h6>Contact</h6>
            <p className="m-0">
              <a href="tel:212-461-4533">212-461-4533</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footerpurplediv">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 footerlinks">
            {" "}
            <a href="#">
              Privacy Policy
            </a>  <span>|</span> {" "}
            <a href="#">
              Terms &amp; Conditions
            </a>{" "}
          </div>
          <div className="col-lg-6 text-right copyrightdiv" style={{'text-align': 'right'}}>
            {/* <p>&#169; 360 Digital Bar 2022. All rights reserved.</p> */}
          
            <div className="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="6340794ccafefed08199b344" data-style-height="24px" data-style-width="100%" data-theme="light" data-min-review-count="10" data-without-reviews-preferred-string-id="1" data-style-alignment="center">
            <a href="https://www.trustpilot.com/review/360digitalbar.com?utm_medium=trustbox&utm_source=MicroReviewCount" className=''  rel="noopener">
            <i class="fas fa-star"></i>
              Trustpilot
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="popup-form">
    <div className="popup-form-container">
      <div className="close-popup">
        {" "}
        <i className="fas fa-times" />{" "}
      </div>
      <form>
        <div className="form-row">
          <div className="col-12 text-center">
            <div className="section-heading mb-40">
              <h1>
                Whatever You Need, <br />
                <span>We&apos;ve Got the Right Plan for You</span>
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <input
              type="text"
              className="popup-input"
              placeholder="Enter Your Name"
            />{" "}
          </div>
          <div className="col-md-6">
            {" "}
            <input
              type="email"
              className="popup-input"
              placeholder="Enter Email Here"
            />{" "}
          </div>
          <div className="col-md-6">
            {" "}
            <input
              type="text"
              className="popup-input"
              placeholder="Phone Number"
            />{" "}
          </div>
          <div className="col-md-6">
            {" "}
            <select className="popup-input">
              {" "}
              <option>Logo Design</option> <option>Branding Design</option>{" "}
              <option>Web Design</option>{" "}
            </select>{" "}
          </div>
          <div className="col-12">
            {" "}
            <textarea
              className="popup-input"
              placeholder="Enter Message Here"
              defaultValue={""}
            />{" "}
          </div>
          <div className="col-12 d-flex justify-content-center">
            {" "}
            <input
              type="submit"
              defaultValue="Submit"
              className="popup-submit"
            />{" "}
          </div>
        </div>
      </form>
    </div>
  </div>
  

	<Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
  <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/sticky-kit/1.1.3/sticky-kit.min.js"></Script>
  <Script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
  <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></Script>
  <Script defer type="text/javascript" src="/static/aps.js"></Script>

      </>
  )
}
