import './FuseList.css'
import React from 'react'

const FuseList = (props) => {
    return (
        <div className='fuseContainer'>
            <div className='fuseWeek'>
                <h1 className='weekDates'>Jan 10-Jan 16</h1>
            </div>
            <div className="ui link divided items">
                <div className="item">
                    <div className="image">
                        <i className="fuseItemDate huge calendar outline icon"></i>
                        <div className="date">
                            <p className="month">Jan</p>
                            <span className="day">10</span>
                        </div>
                    </div>
                    <div className="middle aligned content">
                    <h2 className="header">Access Alberta Speakers Series</h2>
                    </div>
                </div>
                <div className="item">
                <div className="image">
                        <i className="fuseItemDate huge calendar outline icon"></i>
                        <div className="date">
                            <p className="month">Jan</p>
                            <span className="day">10</span>
                        </div>
                    </div>
                    <div className="middle aligned content">
                    <h2 className="header">Access Alberta Speakers Series</h2>
                    </div>
                </div>
                <div className="item">
                <div className="image">
                        <i className="fuseItemDate huge calendar outline icon"></i>
                        <div className="date">
                            <p className="month">Jan</p>
                            <span className="day">10</span>
                        </div>
                    </div>
                    <div className="middle aligned content">
                        <h2 className="header">Access Alberta Speakers Series</h2>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default FuseList




/* <div className="ui items">
                <div className="item">
                    <div className="content">
                        <h2 className="header">Access Alberta Speakers Series</h2>
                        <div className="meta">
                            <span>Description</span>
                        </div>
                        <div className="description">
                            <div className="ui placeholder">
                                <div className="paragraph">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="extra">
                            <a>Additional Details</a>
                        </div>
                    </div>
                    <div className="image">
                        <i className="fuseItemDate huge calendar outline icon"></i>
                        <div className="date">
                            <p className="month">Jan</p>
                            <span className="day">10</span>
                        </div>
                    </div>
                </div>
            </div> */