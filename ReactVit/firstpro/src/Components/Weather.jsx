/*Create a Weather component that displays weather information such as temperature, humidity, and weather condition. Show weather details of three different city in it*/ 

export default function Weather({weather}){
    return(
        <div>
        {weather.map((el,index)=>(
            <span key={index}>
                <h1 style={{color:"blueviolet"}}><u>{el.city} Weather </u></h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <th><h3><em>Temperature</em></h3></th>
                            <th><h3>-</h3></th>
                            <th><h3>{el.temp}</h3></th>
                        </tr>
                        <tr>
                            <th><h3><em>Humidity</em></h3></th>
                            <th><h3>-</h3></th>
                            <th><h3>{el.hum}</h3></th>
                        </tr>
                        <tr>
                            <th><h3><em>Weather Condition</em></h3></th>
                            <th><h3>-</h3></th>
                            <th><h3>{el.wc}</h3></th>
                        </tr>
                    </tbody>
                </table>
            </span>
            ))}
        </div>
    )
}