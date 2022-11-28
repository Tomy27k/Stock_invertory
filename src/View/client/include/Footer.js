import React from 'react';
import bgimage from '../../../assets/images/home-4.jpg'
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone, AiFillClockCircle } from "react-icons/ai";
import { MapContainer, TileLayer, useMap ,Popup,Marker} from 'react-leaflet'
const Footer = () => {
  const phone = "+90534234434";

  return (
    <footer className='d-flex flex-wrap justify-content-center' style={{backgroundImage:`url(${bgimage})`}}>
    <div className="container row">
      <div className="footer-contact-info d-flex flex-column justify-content-center col-lg-6 p-4 ">
      <h3>Contact Us</h3>
          <div className="icon my-3">
            <h3>
              <AiFillPhone className="me-3" />
              Call Us
            </h3>
            <a className="text-white " href={`tel:${phone}`}>{phone}</a>
          </div>
          <div className="icon my-3">
            <h3>
              <MdLocationOn className="me-3" />
              Location
            </h3>
            <span> 121 rocket Street,21 Avenue, New York NY 92103-3232</span>
          </div>
          <div className="icon my-3">
            <h3>
              <AiFillClockCircle className="me-3" />
              Business Hours
            </h3>
            <span> Mon-fri.. 10 a.m - 8 p.m,Sun... Closed</span>
          </div>

      </div>
      <div className="footer-map   col-lg-6 rounded-5 ">
      <MapContainer center={[37, 37]} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[37,37]}>
    <Popup>
      StockThom
    </Popup>
  </Marker>
</MapContainer>
      </div>
      </div>
    </footer>
  )
}

export default Footer