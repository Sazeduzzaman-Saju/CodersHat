import React from "react";
import Link from "next/link";
import Layout from "../layout/Layout";
import FallbackProfileImages from "@/util/FallBackImage/FallBackProfileImage";

const AllTeams = ({ teamData }) => {
  return (
    <div>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team">
        <div>
          <div className="team-2 section-padding2 inner-font-1">
            <div className="container">
              <div className="row">
                {teamData && teamData.length > 0 ? (
                  teamData.map((member, index) => (
                    <div className="col-lg-3 col-md-6">
                      <div className="single-team">
                        <div className="team-sides team-font-side">
                          <div className="team-img">
                            <FallbackProfileImages
                              className="img-fluid"
                              src={`https://backoffice.codershatbd.com/storage/${member.image}`}
                              alt={member.name}
                              title="Advertisement expired"
                            />
                          </div>
                          <div className="team-content bg-18">
                            <Link className="weight-700" href="#">
                              {member.name}
                            </Link>
                            <p>{member.designation}</p>
                          </div>
                        </div>
                        <div className="team-sides team-back-side">
                          <div className="team-content bg-18">
                            <Link className="weight-700" href="#">
                              {member.name}
                            </Link>
                            <p>{member.designation}</p>
                            <div className="space10" />
                            <div className="team-socials">
                              <ul>
                                <li className="pe-2">
                                  <Link
                                    data-bs-toggle="tooltip"
                                    title="Linked in"
                                    href={member.linked_in || "Linked"}
                                  >
                                    <i className="fa-brands fa-linkedin-in" />
                                  </Link>
                                </li>
                                <li className="pe-2">
                                  <Link
                                    data-bs-toggle="tooltip"
                                    title="Facebook"
                                    href={member.linked_in || "Facebook"}
                                  >
                                    <i className="fa-brands fa-facebook-f" />
                                  </Link>
                                </li>
                                <li className="pe-2">
                                  <Link
                                    data-bs-toggle="tooltip"
                                    title="Instagram"
                                    href={member.linked_in || "Instagram"}
                                  >
                                    <i className="fa-brands fa-instagram" />
                                  </Link>
                                </li>
                                <li className="pe-2">
                                  <Link
                                    data-bs-toggle="tooltip"
                                    title="Github"
                                    href={member.linked_in || "github"}
                                  >
                                    <i className="fa-brands fa-github" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No blogs category available.</p>
                )}
              </div>
            </div>
          </div>
          {/*=====Team end=======*/}
          {/*=====About start=======*/}
          <div className="about-inner bg-13 section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="mr50">
                    <div className="heading2 no-margin-heading">
                      <small className="heading-top inner-heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />
                        Marketing Advertising
                      </small>
                      <h2>
                        our experts business strategists create a feasible route
                        for your startup
                      </h2>
                      <p>
                        Attend is more than a platform. It's a movement to lift
                        the stigma surrounding money and relieve the financial
                        stress that can lead to burnout. Interested in joining
                        our team?
                      </p>
                      <div className="space30" />
                      <Link className="theme-btn-11" href="/contacts">
                        Book Now
                        <img
                          src="/assets/img/icons/arrow-up-right.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mobile-hidden">
                  <div className="about-bg-main-img position-relative ml50">
                    <img
                      className="border-radius"
                      src="/assets/img/service/service-inner.png"
                      alt=""
                    />
                    <div className="corner-right-bottom-shape2 position-absolute">
                      <img
                        src="/assets/img/shapes/shape-right-bottom2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====About end=======*/}
          {/*=====Subscribe start=======*/}
          <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading4 white-heading inner-heading no-margin-heading">
                    <h2>Want to join our team?</h2>
                    <p>
                      We are always looking for talented people, We here to help
                      you to open your bright future.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 offset-lg-1">
                  <div className="sunscribe-form">
                    <div className="subscribe-from-wrap">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" name="button">
                          Subscribe Now
                          <img
                            src="/assets/img/icons/arrow-up-right.svg"
                            alt=""
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AllTeams;
