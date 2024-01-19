import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useDataForBarChart = (month) => {

    const [barChart, setBarChart] = useState(null);

    async function fetchDataForPieChart() {
        try {

            const response = await axios.get(`http://localhost:5000/api/transactions/bar-chart?month=${month}`);
            setBarChart(response.data.data)
           
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchDataForPieChart()
    },[month])

    return {barChart}
}

export default useDataForBarChart