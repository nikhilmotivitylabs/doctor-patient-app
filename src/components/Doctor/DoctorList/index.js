import React from 'react'

const index = () => {
    const arr=[
        {
            "doctorname":"nikhil",
            "about":"Some quick example text to build on the card title and make up the bulk of the card's content.",
            
        }
    ,]


  return (
    <>
    <header>
    <div className="container-fulid d-flex flex-row  flex-wrap justify-content-start bg-light w-99 h-100 ">
        <div className="card m-4" style="width: 28rem; height: auto;">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
    </div>
    
    </header>
    </>
  )
}

export default index