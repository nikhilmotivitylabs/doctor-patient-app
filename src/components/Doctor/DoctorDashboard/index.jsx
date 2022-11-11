import React from "react"
import "./dashboard.css"

const DoctorDashboard = () => {
  return (
    <>
      <div className='doc-dashboard mt-4'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className='card-body text-center'>
                <div className='profile-img'>
                  <img
                    src='https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg='
                    className='img-fluid rounded-circle'
                    alt='.'
                    style={{ width: "180px" }}
                  />
                </div>
                <div>
                  <h4 className='mt-4'>
                    <strong>Dr MS Reddy</strong>
                  </h4>
                  <span className='text-muted'>Orthopedic</span>
                  <p className='mt-1'>Apollo Hospital, Hyderabad</p>
                </div>
                <div className='socialmedia_icons'>
                  <span className='link' style={{ cursor: "pointer" }}>
                    <i
                      className='socialicons bi bi-facebook '
                      style={{
                        padding: "5px",
                        fontSize: "20px",
                        color: "#ff6600",
                      }}
                    ></i>
                  </span>
                  <span className='link' style={{ cursor: "pointer" }}>
                    <i
                      className='socialicons bi bi-linkedin '
                      style={{
                        padding: "5px",
                        fontSize: "20px",
                        color: "#ff6600",
                      }}
                    ></i>
                  </span>
                  <span
                    className='link'
                    style={{ cursor: "pointer", color: "#ff6600" }}
                  >
                    <i
                      className='socialicons bi bi-twitter '
                      style={{
                        padding: "5px",
                        fontSize: "20px",
                        color: "#ff6600",
                      }}
                    ></i>
                  </span>
                  <span className='link' style={{ cursor: "pointer" }}>
                    <i
                      className='socialicons bi bi-instagram '
                      style={{
                        padding: "5px",
                        fontSize: "20px",
                        color: "#ff6600",
                      }}
                    ></i>
                  </span>
                </div>
              </div>
            </div>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='workingtime'>
                  <h6>Working Time</h6>
                  <small className='text-muted'>Tuesday</small>
                  <p>06:00 AM - 07:00 AM</p>
                  <hr />
                  <small className='text-muted'>Thursday</small>
                  <p>06:00 AM - 07:00 AM</p>
                  <hr />
                </div>
                <div className='reviews'>
                  <h6>Reviews</h6>
                  <p>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star'></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='card'>
              <div className='card-header'>
                <h6 className='mb-0 '>About</h6>
              </div>
              <div className='card-body'>
                <p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus quaerat fuga, nisi in harum delectus
                    praesentium ratione enim id tempore laborum explicabo earum
                    obcaecati labore pariatur distinctio rem ea corporis.
                  </span>
                  <br />
                  <br />
                  <span>
                    Odio eligendi necessitatibus doloribus porro. Dolorem
                    molestiae accusantium porro assumenda atque dignissimos?
                    Corporis vitae error dolorem quod distinctio quaerat veniam
                    harum delectus, vel maiores doloribus ab debitis nesciunt
                    neque dicta.
                  </span>
                </p>
                <h6>Qualifications</h6>
                <hr />
                <ul className='list-unstyled'>
                  <li>
                    <p>
                      <strong>Experience:</strong> 18 Years
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Hospital Affiliations:</strong> Gandhi Hospital,
                      Hyderabad
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Medical School:</strong> Palmer College of
                      Chiropractic 1978
                    </p>
                  </li>

                  <li>
                    <p>
                      <strong>Certifications:</strong> Certified Chiropractic
                      Sports Physician 1982
                    </p>
                  </li>
                </ul>
                <h6>Specialities</h6>
                <hr />
                <ul className='list-unstyled specialties'>
                  <li>
                    <i className='bi bi-arrow-right me-2'></i>
                    Spine Disease
                  </li>
                  <li>
                    <i className='bi bi-arrow-right me-2'></i>Sports Injuries
                  </li>
                  <li>
                    <i className='bi bi-arrow-right me-2'></i>Degenerative
                    Diseases
                  </li>
                  <li>
                    <i className='bi bi-arrow-right me-2'></i>Tumors Surgery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorDashboard
