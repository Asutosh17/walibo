import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="w-[80px] fixed h-full top-[65px] pt-[65px] bg-white flex flex-col items-center gap-[49px]">
        <a href="">
        <img src="/images/dashboard.svg" alt="home" />
        </a>
        <a href="">
        <img src="/images/trophy.svg" alt="victory" />
        </a>
        <a href="">
        <img src="/images/flower.svg" alt="achievement" />
        </a>
        <a href="" className="bg-[#9C9C9C1A] w-10 h-10 flex items-center justify-center rounded-sm shadow-md">
        <img src="/images/social_color.svg" alt="events" />
        <p className="absolute -right-[70px] bg-[#002F47] text-white px-4 py-1 rounded-sm flex items-center shadow-md">
          <span className="absolute border-t-[5px] border-t-transparent border-r-[10px] border-r-[#002F47] -left-2 border-b-[5px] border-b-transparent"></span>
          Events
          </p>
        </a>
      </div>
    );
  }
}
