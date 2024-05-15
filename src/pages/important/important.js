import React from "react";

export const Important = () => {
    const branch = 135;
    const accountNumber = 2918749;
    return(
        <div>
            <img
            src="https://newsimg.sedaily.com/2016/11/02/1L3TBMLD1Q_2.jpg"
            alt="은행"
            style={{ width: "500px", height: "500px", borderRadius: "15px", display: "flex", alignItems: "center" }}
            />
            <div style={{textAlign: "center"}}><h4>지점: {branch}</h4></div>
            <div style={{textAlign: "center"}}><h4>계좌번호: {accountNumber}</h4></div>
        </div>
        
        
    )

}