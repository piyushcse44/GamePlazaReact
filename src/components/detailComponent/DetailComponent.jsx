import React from 'react'
import Details1 from "../../assets/images/details-01.jpg";
import Details2 from "../../assets/images/details-02.jpg";
import Details3 from "../../assets/images/details-03.jpg";

const DetailComponent = ({gameSpec}) => {
  return (
    <div className="game-details">
  <div className="row">
    <div className="col-lg-12">
    <h2 style={{ color: 'white' }}>{gameSpec.gameName} Details</h2>
    </div>
    <div className="col-lg-12">
      <div className="content">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-info">
              <div className="left">
                <h4  style={{ color: 'white' }}>{gameSpec.gameName}</h4>
                <span>{gameSpec.companyName}</span>
              </div>
              <ul>
                <li>
                  <i className="fa fa-star" /> {gameSpec.gameRating}
                </li>
                <li>
                  <i className="fa fa-download" /> {gameSpec.totalDownloads}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-info">
              <ul>
                <li>
                  <i className="fa fa-star" /> {gameSpec.gameRating}
                </li>
                <li>
                  <i className="fa fa-download" /> {gameSpec.totalDownloads}
                </li>
                <li>
                  <i className="fa fa-server" /> {gameSpec.gameSizeInMb}MB
                </li>
                <li>
                  <i className="fa fa-gamepad" /> {gameSpec?.gameGenera?.[0] ?? 'Action'}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={gameSpec?.additionalImage?.[2] ?? Details1}
              alt=""
              style={{ borderRadius: 23, marginBottom: 30 }}
            />
          </div>
          <div className="col-lg-4">
            <img
              src={gameSpec?.additionalImage?.[3] ?? Details2}
              alt=""
              style={{ borderRadius: 23, marginBottom: 30 }}
            />
          </div>
          <div className="col-lg-4">
            <img
              src={gameSpec?.additionalImage?.[4] ?? Details3}
              alt=""
              style={{ borderRadius: 23, marginBottom: 30 }}
            />
          </div>
          <div className="col-lg-12">
            <p>
            {gameSpec?.gameDesc ?? 'this is default description.'}
            </p>
          </div>
          <div className="col-lg-12">
            <div className="main-border-button">
              <a href={gameSpec.gameDownloadLink}>Download {gameSpec.gameName} Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default DetailComponent
