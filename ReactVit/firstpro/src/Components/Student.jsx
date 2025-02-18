export default function Student(){
    return(
        <div>
            <h1> Student Record</h1>
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th style={{border:"1px solid black",padding:"5px"}}>Name</th>
                    <th style={{border:"1px solid black",padding:"5px"}}>Roll No</th>
                    <th style={{border:"1px solid black",padding:"5px"}}>Class</th>
                    <th style={{border:"1px solid black",padding:"5px"}}>Class Teacher</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{border:"1px solid black",padding:"5px"}}>Abhay</td>
                    <td style={{border:"1px solid black",padding:"5px"}}>2</td>
                    <td style={{border:"1px solid black",padding:"5px"}}>10th</td>
                    <td style={{border:"1px solid black",padding:"5px"}}>Mansimran</td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black",padding:"5px"}}>Arohee</td>
                    <td style={{border:"1px solid black",padding:"5px"}}>4</td>
                    <td style={{border:"1px solid black",padding:"5px"}}>10th</td>
                    <td style={{border:"1px solid black",padding:"5px"}}>Ameesha</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}