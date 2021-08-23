import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function BarChart({ label, score }) {
    const newScore = score.map(item=>item[1])

    const data = {
        labels: label,
        datasets: [
            {
                label: '득표',
                data: newScore,
                backgroundColor: [
                    'rgba(250,128,114,0.2)'
                ],
                borderColor: [
                    'rgba(250, 128, 144, 0.6)'
                ],
                borderWidth: 1,
                borderRadius: 10
            }
        ]
    }
    const options = {
        scales: {
            y: {
                    beginAtZero: true,
                    min: 0,
                    suggestedMax: 8,
                    ticks: {
                        stepSize:1
                    }
                }
        }
    }
    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}
