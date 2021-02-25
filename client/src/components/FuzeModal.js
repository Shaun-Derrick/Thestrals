import React from "react"
import "../stylesheets/FuzeList.css"

const FuzeModal = (props) => {
  return (
    <div
      className={"ui page modals dimmer transition fuzeModal " + props.modal}
    >
      <div className={"ui modal transition " + props.modal}>
        <i className="close icon" onClick={props.closeModal}></i>
        <div className="centered ui image content fuzeIcon">
          {props.chooseIcon(props.fuzeItem.tags)}
        </div>
        <div className="header modalColor">
          <h2>{props.fuzeItem.Title}</h2>
          <p>{props.date}</p>
          <p>
            {props.fuzeItem.startTime} - {props.fuzeItem.endTime}
          </p>
        </div>
        <div className="content">
          <div className="modalInfo">
            <div>
              <div className="ui header">Description</div>
              <p>{props.fuzeItem.description}</p>
            </div>
            <div className="modalContent">
              <p>
                <a
                  className="modalLink"
                  href={props.fuzeItem.venue}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="ui button">Check it out!</button>
                </a>
              </p>
            </div>
            <div className="modalTags">
              <p className="modalTagItem">#{props.fuzeItem.tags}</p>
            </div>
          </div>
          {/*     <div className='Location'>
                        <img className='ui small middle aligned image' alt="Random pic- don't expect the best things in the world" src='https://s2.qwant.com/thumbr/0x380/d/5/edc623b484dfe71f16269638ec033424a016e6097506cbc5cb7122e15bc6e8/wordpress-google-maps-performance.png?u=https%3A%2F%2Fkinsta.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fwordpress-google-maps-performance.png&q=0&b=1&p=0&a=1'></img>
                        <h3>Venue</h3>
                        <p>{props.fuzeItem.venue}</p>
                        <h3>Organiser</h3>
                        <p>{props.fuzeItem.organiser}</p>
                    </div> */}
        </div>
      </div>
    </div>
  )
}

export default FuzeModal
