import React, { useState } from "react";
import Header from "../../header/Hearder";
import Button from "../../Core/S4-button/Button";
import fall from "../../../Assets/Images/fall.png";
import nature from "../../../Assets/Images/nature.png";
import hotel from "../../../Assets/Images/hotel.svg";
import traveller from "../../../Assets/Images/traveller.png";
import { Accordion } from "react-bootstrap";
import Footer from "../../Footer/Footer";
function About() {
  const [customerReview, setCustomerReview] = useState(false);
  const benfits = [
    {
      title: "Foods and Drinks",
      offer: "we provide you a traditional foods",
    },
    {
      title: "Transportation",
      offer: "We provide Good trasport facilities",
    },
    {
      title: "Accomadation",
      offer: "We offers a city best hotel",
    },
    {
      title: "Medical",
      offer: "We also provide medial insurance",
    },
    {
      title: "Tour guide",
      offer: "We provide Guide in your pocket",
    },
    {
      title: "Camp Fire",
      offer: "We make ur night as memories with fire",
    },
  ];
  const reviews = [
    {
      name: "Naresh",
      email: "naresh@gmail.com",
      description:
        "It was a wonderful experience for us. All your arrangements were up to the mark All hotels and transportation arrangements were excellent. Though we had faced some problems with hotel at Kedarnath you handled it swiftly and efficiently. Thanks for your support and prompt response.",
    },
    {
      name: "vignesh",
      email: "vignesh@gmail.com",
      description:
        "It was a wonderful experience for us. All your arrangements were up to the mark All hotels and transportation arrangements were excellent. Though we had faced some problems with hotel at Kedarnath you handled it swiftly and efficiently. Thanks for your support and prompt response.",
    },
    {
      name: "suresh",
      email: "sures@gmail.com",
      description:
        "It was a wonderful experience for us. All your arrangements were up to the mark All hotels and transportation arrangements were excellent. Though we had faced some problems with hotel at Kedarnath you handled it swiftly and efficiently. Thanks for your support and prompt response.",
    },
    {
      name: "ganesh",
      email: "ganesh@gmail.com",
      description:
        "It was a wonderful experience for us. All your arrangements were up to the mark All hotels and transportation arrangements were excellent. Though we had faced some problems with hotel at Kedarnath you handled it swiftly and efficiently. Thanks for your support and prompt response.",
    },
  ];

  return (
    <>
      <Header />
      <div className="container-fluid banner">
        <div className="container">
          <div className="row align-items-center txt-left">
            <div className="col-lg-6">
              <div>
                <div className="h1 text-white ">
                  Understand your <br />
                  customers better
                </div>
                <div className="h5 text-white mt-5 ">
                  Voyaging was founded in 1996 and has grown into an industry
                  leader that stands out for being one of the most comprehensive
                  trip planning platforms out there.
                  <br />
                  flights (including one-way and multi-city flights), tour
                  activities, and
                  <br /> even airport taxis.
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center txt-left flex-column ps-5">
                <div className="text-primary p-5">
                  What does voyaging offer?
                </div>
                <div className="text-dark h4">Explore world with us</div>
                <div className="text-brandcolor3 mt-2">
                  The user-friendly MakeMyTrip App and website make it easy for
                  enthusiastic travellers to plan and book a holiday simply at
                  the click of a button. Just use the filters and select the
                  city you want to visit along with your travel dates, travel
                  duration, specific preferences, if any, on hotels, kind of
                  holiday, etc. and MakeMyTrip offers you an extensive list of
                  holiday packages to choose from. Pick any package that meets
                  your needs.
                </div>
                <p className="mt-4 text-brandcolor3">
                  Else, you could also choose hotels of your choice, add
                  sightseeing and activities to your list and have a package
                  ready that best suits your requirement. You can choose to book
                  your tour packages offline by dropping a query or chatting
                  with our travel experts for immediate support. With
                  MakeMyTrip, planning and buying your ideal holiday has never
                  been easier
                </p>
              </div>
              <div className="col-lg-6 p-5">
                <div className="position-relative img-overlay">
                  <img src={fall} alt="side1" className="bck-img" />
                  <img src={nature} alt="side1" className="bck-img-two" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-5">
                <div className="position-relative img-overlay">
                  <img src={fall} alt="side1" className="bck-img" />
                  <img src={nature} alt="side1" className="bck-img-two" />
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center txt-left flex-column ps-5">
                <div className="text-primary p-5">About Us</div>
                <div className="text-dark h4">Explore world with us</div>
                <div className="text-brandcolor3 mt-2">
                  India's leading online travel company, has a profound
                  understanding of Indian consumers travel needs and
                  preferences. It offers a wide range of holiday packages in
                  India and across the world, catering to various segments of
                  travellers. While the dynamic or customized tour and travel
                  packages give consumers an option to create and design their
                  own holiday,
                </div>
                <p className="mt-4 text-brandcolor3">
                  The fixed departure holiday packages have a pre-designed
                  itinerary; thus ensuring there is something to meet the
                  holiday needs of every kind of travelle
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 align-items-center ms-4 ">
                <div className="text-primary p-2">Benifits</div>
                <div className="text-dark h2 ">Benifits of voyaging</div>
              </div>
              <div>
                <div className="d-flex flex-wrap justify-content-between w-100">
                  {benfits.map((data) => (
                    <>
                      <div className="d-flex mt-3 ">
                        <div>
                          <img src={hotel} className="img-fluid image-width" />
                        </div>
                        <div className="  mt-3 ms-3">{data.title}</div>
                        <div className="  mt-5  ">{data.offer}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="container ">
              <div className="row mt-5">
                <div className="col-lg-6 ">
                  <div className="col-lg-6 d-flex justify-content-center  flex-column  w-100">
                    <div className="text-primary p-2 ">What they say</div>
                    <div className="text-dark h4 p-2">Customer Review</div>
                    {!customerReview && (
                      <div>
                        <div className=" text-primary">{reviews[0].name}</div>
                        <div className="h5 text-dark">{reviews[0].email}</div>
                        <div className="h5 text-dark">
                          {reviews[0].description}
                        </div>
                      </div>
                    )}

                    {customerReview &&
                      reviews.map((items) => (
                        <div className="customPadding  mt-3 TestimonialBorder position-relative">
                          <p className="testimonialTitle text-white">
                            {items.name}
                          </p>
                          <h5>{items.email}</h5>
                          <p>-{items.description}</p>
                        </div>
                      ))}
                    <div>
                      {!customerReview && (
                        <div>
                          <Button
                            title="See more "
                            className="rounded-0  mt-3"
                            onClick={() => setCustomerReview(!customerReview)}
                          />
                        </div>
                      )}
                      {customerReview && (
                        <div>
                          <Button
                            title="Colapse"
                            className="rounded-0  mt-3"
                            onClick={() => setCustomerReview(!customerReview)}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center  flex-column ps-5 mt-5">
                  <div className="d-flex align-items-center img-overlay">
                    <img
                      src={traveller}
                      alt="side1"
                      className="bck-img-three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`container-fluid `}>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-6 d-flex justify-content-center  flex-column position-relative">
                  <div className="text-dark h4">We are here to help you</div>
                  <div className="text-primary ">
                    Frequently Asked Questionss
                  </div>

                  <div className="text-brandcolor3 mt-2">
                    voyaging India's leading online travel company, has a
                    profound understanding of Indian consumers travel needs and
                    preferences. <br />
                    It offers a wide range of holiday packages in India and
                    across the world, <br /> catering to various segments of
                    travellers
                    <br /> While the dynamic or customized tour and travel
                    packages give consumers an option to create and design their
                    own holiday.
                  </div>
                </div>
                <div className="col-lg-6 p-5 mt-3">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How to book trip</Accordion.Header>
                      <Accordion.Body>
                        Please check www.voyaging.com and go to trip and book
                        your fav place.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How to get touch in with you
                      </Accordion.Header>
                      <Accordion.Body>
                        Login your email for the better experience. we let you
                        know when ever we bring new feature
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>How to Cancel trip</Accordion.Header>
                      <Accordion.Body>
                        You can visit the out application and cancel the trip or
                        contact our customer care.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
