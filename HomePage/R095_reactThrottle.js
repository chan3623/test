import React from 'react';
import { throttle } from "lodash";
import '../css/new.css'

const R095_reactThrottle = () => {
const throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);
  
    return (
      <div className="custom-div">
        <div className="custom-search">
          <h2 className="custom-h2">검색어 입력</h2>
          <input type="text" className="custom-input" onChange={throttleFunc} />
        </div>
        <div className="custom-Box">
          <div className="custom-box1">
            <a href="#">나의 정보</a>
          </div>
          <div className="custom-box2">
            <a href="#">나의 민원</a>
          </div>
          <div className="custom-box3">
            <a href="#">민원 신청</a>
          </div>
          <div className="custom-box4">
            <a href="#">신고 센터</a>
          </div>
          <div className="custom-box5">
            <a href="#">자유 게시판</a>
          </div>
          <div className="custom-box6">
            <a href="#">고객 센터</a>
          </div>
        </div>
      </div>
    )
  
}

export default R095_reactThrottle;