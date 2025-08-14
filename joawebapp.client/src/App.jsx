import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [cvdata, setCVData] = useState();

    useEffect(() => {
        populateCVInfo();
    }, []);

    const contents = cvdata === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {cvdata.map(cvdata =>
                    <tr key={cvdata.date}>
                        <td>{cvdata.date}</td>
                        <td>{cvdata.temperatureC}</td>
                        <td>{cvdata.temperatureF}</td>
                        <td>{cvdata.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateCVInfo() {
        const response = await fetch('JoaCVInfo');
        if (response.ok) {
            const data = await response.json();
            setCVData(data);
        }
    }
}

export default App;