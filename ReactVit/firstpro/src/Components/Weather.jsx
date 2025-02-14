/*Create a Weather component that displays weather information such as temperature, humidity, and weather condition. Show weather details of three different city in it*/ 

export default function Weather({city, temp, hum, wc}){
    return(
        <div>
            <span>
                <h1 style={{color:"blueviolet"}}><u>{city} Weather </u></h1>
                <table style={{marginLeft:"100px"}}>
                    <tbody>
                        <tr>
                            <th style={{padding:"0px 80px 0px 80px"}}><h3><em>Temperature</em></h3></th>
                            <th><h3>-</h3></th>
                            <th style={{padding:"0px 80px 0px 80px"}}><h3>{temp}</h3></th>
                        </tr>
                        <tr>
                            <th><h3><em>Humidity</em></h3></th>
                            <th><h3>-</h3></th>
                            <th><h3>{hum}</h3></th>
                        </tr>
                        <tr>
                            <th><h3><em>Weather Condition</em></h3></th>
                            <th><h3>-</h3></th>
                            <th><h3>{wc}</h3></th>
                        </tr>
                    </tbody>
                </table>
            </span>
        </div>
    )
}