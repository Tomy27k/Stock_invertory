import React from 'react'
import { MapContainer, TileLayer, useMap ,Popup,Marker} from 'react-leaflet'
const Footer = () => {
  return (
    <footer className='d-flex flex-wrap'>
      <div className="footer-contact-info col-lg-6">
        sadasdasdasd
      </div>
      <div className="footer-map col-lg-6">
      <MapContainer center={[33, 33]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[37,37]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </div>fmkjfkfkkfj
    </footer>
  )
}

export default Footer