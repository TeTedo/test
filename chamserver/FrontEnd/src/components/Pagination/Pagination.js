import React, { useState } from "react";
import "../../styles/Pagination/Pagination.css";
const Pagination = ({ component: Component, data }) => {
  // 컴포넌트랑 데이터 받아와서 해당 컴포넌트에 데이터 넘겨주기
  const [change, setChange] = useState(true);
  const [index, setIndex] = useState(0);
  const chageView = (value) => {
    setChange(value);
  };
  const cardClassName = change ? "pagination_card" : "pagination_card four";
  const templength = 20;
  const changedValue = change ? 9 : 4;
  const pageNum = Math.ceil(templength / changedValue);
  const pageStyle = {
    color: "green",
    fontSize: "30px",
    fontWeight: "bold",
  };
  const movePage = (e) => {
    setIndex(e.target.textContent - 1);
  };
  return (
    <div className="pagination">
      <div className="pagination_btns">
        <div onClick={() => chageView(false)}>
          <img src="/imgs/view_select_four.png" alt="four" />
        </div>
        <div onClick={() => chageView(true)}>
          <img src="/imgs/view_select_nine.png" alt="nine" />
        </div>
      </div>
      <div className="pagination_cardWrap">
        {/* 컴포넌트자리 */}
        {new Array(templength)
          .fill(0)
          .slice(index * changedValue, index * changedValue + changedValue)
          .map((v, idx) => (
            <div className={cardClassName} key={idx}>
              <Component data={data} change={change}></Component>
            </div>
          ))}
      </div>
      <div className="pagination_page">
        {new Array(pageNum).fill(0).map((v, idx) => (
          <span key={idx} style={index === idx ? pageStyle : {}} onClick={movePage}>
            {idx + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
