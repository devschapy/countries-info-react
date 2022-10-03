// import React from "react";

export const ObjKeysFun = (myObj) => {
    const keyValues = [];
    // console.log(myObj);

    for (let key in myObj) {
        keyValues.push(myObj[key]);
    }   
    return keyValues;
    // let langEl = keyValues.map((val, index) => <p key={index}>{val}</p>);
    // { langObj }
    // return <>{langEl}</>;
}
