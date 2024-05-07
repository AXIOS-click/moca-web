import React from "react";
import services1Data from '../../data/services1.json'
import Link from 'next/link'

const Services1 = () => {
  return (
    <section className="services bg-gray" style={{
      padding: "40px 0 40px 0" 
    }}>
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Services
              </h4>
            </div>
          </div>
        </div>
        <div
          className="row bord-box bg-img wow fadeInUp"
          data-wow-delay=".3s"
        >
          {services1Data.services.map((item) => (
            <div className="col-lg-4 col-md-6 item-bx" key={item.id}>
              <h2 className="numb">{item.id}</h2>
              <h6 className="mb-20">{item.title}</h6>
              <p>{item.content}</p>
              <Link href="/about">
                <a className="more mt-30">Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services1;
