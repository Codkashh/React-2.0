import React from 'react'

const Weather = () => {
    let temperature = 13;
    if(temperature < 15) {
        return <h1>It's cold outside</h1>;
    } else if(temperature>14 && temperature<26) {
        return <h1>It's nice outside</h1>;
    } else {
        return <h1>It's hot outside!</h1>
    }
}

export default Weather
