import React from "react";

export default function Language({ langObj }) {
    const langs = [];

    for (let key in langObj) {
        langs.push(langObj[key]);
    }

    let langEl = langs.map((val, index) => <p key={index}>{val}</p>);

    return <>{langEl}</>;
}
