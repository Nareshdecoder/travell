import React, { useEffect, useState } from "react";
import Header from "../../header/Hearder";
import fall from "../../../Assets/Images/fall.png";
import nature from "../../../Assets/Images/nature.png";
import traveller from "../../../Assets/Images/traveller.png";
import passport1 from "../../../Assets/Images/passport1.svg";
import passport2 from "../../../Assets/Images/passport2.svg";
import passport4 from "../../../Assets/Images/passport4.svg";
import passport3 from "../../../Assets/Images/passport3.svg";
import Footer from "../../Footer/Footer";
import Button from "../../Core/S4-button/Button";
import { isTemplateSpan } from "typescript";
import { getCountryAction, getTripAction } from "../../Redux/Action/tripAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  let navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [customerReview, setCustomerReview] = useState(false);
  let reviewData = useSelector((state: any) => state.TripReducer?.tripResponse);
  let countryData = useSelector(
    (state: any) => state.TripReducer?.countryResponse
  );

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
  const country = [
    {
      id: "1",
      name: "Roma,italia",
      Place: "vince",
      Why: "Both for its history as the capital of much of ancient Europe and for its present day role as one of Europe's most vibrant cities, for most tourists traveling to Italy, Rome heads the list of places to visit",
    },
    {
      id: "2",
      name: "Austerlia",
      img: "../../../Assets/Images/aus.png",
      Place: "Sydney",
      Why: "The showcase of the Italian Renaissance, Florence can at times seem like one giant art museum. The Duomo, the Cathedral of Santa Maria del Fiore, is a landmark of world architecture, topped by its gravity-defying massive dome",
    },
    {
      id: "3",
      name: "United Kindom",
      Place: "Windsor Great Park ",
      Why: "Who could fail to love a city whose streets are made of water, whose buses are boats, and where the songs of gondoliers linger in the air? It is a magic city, and its major attraction to tourists is the city itself",
    },
  ];
  useEffect(() => {
    dispatch(getTripAction());
    dispatch(getCountryAction());
  }, []);
  useEffect(() => {}, [countryData]);

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
            <div className="col-lg-6"></div>
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
              The website’s interface is also easy to use. On the home page,
              search for a hotel by entering your chosen destination and dates.
              Then, use the extensive list of filters—such as price range and
              distance from the city center—to narrow the results down and find
              the best fit.
              <br /> nostrud exercitation ullamco laboris nisi ut aliquip.
            </div>
            <p className="mt-4 text-brandcolor3">
              You can also search for a specific hotel, or seek inspiration by
              clicking through options grouped by destination or property type
              or by topic such as the country’s best Michelin-starred hotel
              restaurants or the top cities for vegan travelers. The flights,
              car rental, and other tabs are just as intuitive.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <div className=" d-flex flex-wrap gap-4 justify-content-between">
              <div className=" crd-img ">
                <img src={passport1} alt="side1" className="ps-1" />
                <div className="mt-2 ps-0">Full Guide</div>
                <p className="mt-1">Get a full about your memories</p>
              </div>
              <div className=" crd-img">
                <img src={passport2} alt="side1" className="" />
                <div className="mt-2">Transport</div>
                <p className="mt-1">Know your dream trip expenses</p>
              </div>
              <div className=" crd-img">
                <img src={passport3} alt="side1" className="" />
                <div className="mt-2">Easy Book</div>
                <p className="mt-1">Get you own guide in your pocket</p>
              </div>
              <div className=" crd-img">
                <img src={passport4} alt="side1" className="" />
                <div className="mt-2">Camp Fire</div>
                <p className="mt-1">
                  We give you memorable night with campfire as a complementry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <div className="d-flex flex-wrap w-100 justify-content-between ">
              <div className="d-flex flex-wrap justify-content-between w-100  ">
                {countryData?.map((data: any) => (
                  <div
                    className=" w-33 trp-img mt-4"
                    onClick={() => navigate("/tour/" + data.id)}
                  >
                    <div className=" text-white h2 mt-2 ">{data?.name}</div>
                    {/* <div >{data.img}</div> */}
                    <p className="text-white h4 mt-2">{data?.Place}</p>
                    <p className="text-white h6 mt-2">{data?.Why}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="col-lg-6 d-flex justify-content-center review-btn flex-column  w-100">
              <div className="text-primary p-2 ">What they say</div>
              <div className="text-dark h4 p-2">Customer Review</div>
              {!customerReview && (
                <div>
                  <div className=" text-primary">
                    {reviewData?.data[0].name}
                  </div>
                  <div className="h5 text-dark">
                    {reviewData?.data[0].email}
                  </div>
                  <div className="h5 text-dark">
                    {reviewData?.data[0].descrption}
                  </div>
                </div>
              )}

              {customerReview &&
                reviewData?.data.map((items: any) => (
                  <div className="customPadding  mt-3 TestimonialBorder position-relative">
                    <p className="testimonialTitle text-white">{items.name}</p>
                    <h5>{items.email}</h5>
                    <p>{items.descrption}</p>
                  </div>
                ))}

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
          <div className="col-lg-6 d-flex justify-content-center txt-left flex-column ps-5">
            <div className="d-flex align-items-center img-overlay">
              <img src={traveller} alt="side1" className="bck-img-three" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt-4">
        <div className="text-white mt-4">About Us</div>
        <div className="text-white h4 mt-2">Explore world with us</div>
        <div className="text-white mt-2">
          MakeMyTrip.com, India's leading online travel company, has a profound
          understanding of Indian consumers travel needs and preferences. It
          offers a wide range of holiday packages in India and across the world,
          catering to various segments of travellers. While the dynamic or
          customized tour and travel packages give consumers an option to create
          and design their own holiday, the fixed departure holiday packages
          have a pre-designed itinerary; thus ensuring there is something to
          meet the holiday needs of every kind of travelle
        </div>
        <div className="mt-2"></div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
