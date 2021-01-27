import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="container-filter">
      <div class="ui dropdown">
        <i class="filter icon big"></i>
        <span class="text-filter">Filter Fuzes</span>
        <div class="menu">
          <div class="ui icon search input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search tags..."></input>
          </div>
          <div class="divider"></div>
          <div class="header">
            <i class="tags icon"></i>
            Tag Label
          </div>
          <div class="scrolling menu">
            <div class="item">
              <div class="ui red empty circular label"></div>
              Software Development
            </div>
            <div class="item">
              <div class="ui blue empty circular label"></div>
              Web Development
            </div>
            <div class="item">
              <div class="ui black empty circular label"></div>
              Game Development
            </div>
            <div class="item">
              <div class="ui purple empty circular label"></div>
              Hardware
            </div>
            <div class="item">
              <div class="ui orange empty circular label"></div>
              Design
            </div>
            <div class="item">
              <div class="ui empty circular label"></div>
              UI and UX
            </div>
            <div class="item">
              <div class="ui yellow empty circular label"></div>
              Product Management
            </div>
            <div class="item">
              <div class="ui pink empty circular label"></div>
              Project Management
            </div>
            <div class="item">
              <div class="ui green empty circular label"></div>
              Start Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
