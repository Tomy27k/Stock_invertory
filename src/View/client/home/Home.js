import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import home_1 from "../../../assets/images/home-1.jpg";
import home_2 from "../../../assets/images/home-2.jpg";
import home_3 from "../../../assets/images/home-3.jpg";
import home_4 from "../../../assets/images/home-4.jpg";
import home_5 from "../../../assets/images/home-5.jpg";
import logo from "../../../assets/images/Logo-stock.png";

import "@splidejs/react-splide/css";
import Card from "../../../components/Home_card/Card";

const Home = () => {
  return (
    <>
      <section className="home-slider">
        <Splide hasTrack={false} aria-label="My Favorite Images">
          <SplideTrack>
            <SplideSlide>
              <img src={home_1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={home_2} alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
              <img src={home_3} alt="Image 3" />
            </SplideSlide>
            <SplideSlide>
              <img src={home_4} alt="Image 4" />
            </SplideSlide>
            <SplideSlide>
              <img src={home_5} alt="Image 5" />
            </SplideSlide>
            <SplideSlide>
              <img src={logo} alt="Image 5" />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </section>
      <section>
        <div className="container d-flex flex-wrap gap-4 justify-content-center py-5">
          <Card title="halil" content="toma" img={logo} />
          <Card title="halil" content="toma" img={logo} />
          <Card title="halil" content="toma" img={logo} />
          <Card title="halil" content="toma" img={logo} />
          <Card title="halil" content="toma" img={logo} />
          <Card title="halil" content="toma" img={logo} />
        </div>
      </section>
      <section className="card-photo">
        <div className="container d-flex flex-wrap py-5">
          <div className="card-photo-item d-flex justify-content-center align-content-center overflow-hidden col-lg-4 col-sm-12 col-md-6">
            <img src={home_1} alt="" />
          </div>
          <div className="card-photo-item d-flex justify-content-center align-content-center overflow-hidden col-lg-4 col-sm-12 col-md-6">
            <img src={home_2} alt="" />
          </div>
          <div className="card-photo-item d-flex justify-content-center align-content-center overflow-hidden col-lg-4 col-sm-12 col-md-6">
            <img src={home_3} alt="" />
          </div>
          <div className="card-photo-item d-flex justify-content-center align-content-center overflow-hidden col-lg-4 col-sm-12 col-md-6">
            <img src={home_4} alt="" />
          </div>
          <div className="card-photo-item d-flex justify-content-center align-content-center overflow-hidden col-lg-4 col-sm-12 col-md-6">
            <img src={home_5} alt="" />
          </div>
          <div className="card-photo-item d-flex justify-content-center align-content-center overflow-hidden col-lg-4 col-sm-12 col-md-6">
            <img src={logo} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container d-flex flex-wrap">
          <div  className="content col-lg-6 p-3 mb-sm-4 col-sm-12 d-flex justify-content-center flex-column ">
            <h1 className='mb-4'>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic! Illo aut deserunt sint, vero ipsam fugiat illum similique. Nesciunt ex aut quo porro reiciendis corporis explicabo architecto odio a repellendus aperiam cumque nam, excepturi rerum eos, id voluptates illo minus magnam! Neque inventore dolorem omnis labore ipsam iure aut.</p>
          </div>
          <div style={{height:'500px'}} className="photo col-lg-6 col-sm-12 overflow-hidden d-flex justify-content-center align-items-center">
            <img src={home_3} alt="" />
          </div>
        </div>
      </section>
      <section className="customers-opinion d-flex align-items-center" style={{backgroundImage:`url(${home_1})`}}>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <div className="customer-item col-lg-3 col-sm-12 d-flex flex-column align-items-center justify-content-evenly ">
          <div className=" circle d-flex justify-content-center align-items-center bg-warning rounded-circle">288</div>
          <span>Happy Customers</span>
        </div>
        <div className="customer-item col-lg-3 col-sm-12 d-flex flex-column align-items-center justify-content-evenly ">
          <div className="circle d-flex justify-content-center align-items-center bg-warning rounded-circle">158</div>
          <span>Project Compeled</span>
        </div>
        <div className="customer-item col-lg-3 col-sm-12 d-flex flex-column align-items-center justify-content-evenly ">
          <div className="circle d-flex justify-content-center align-items-center bg-warning rounded-circle">98</div>
          <span>Cups of Coffee</span>
        </div>
        <div className="customer-item col-lg-3 col-sm-12 d-flex flex-column align-items-center justify-content-evenly ">
          <div className="circle d-flex justify-content-center align-items-center bg-warning rounded-circle">34</div>
          <span>Awards</span>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
