'use client'

import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface SchoolRadarChartProps {
  academicPerformance: number
  facilities: number
  extracurricular: number
  teachingQuality: number
  darkMode?: boolean
}

export default function SchoolRadarChart({
  academicPerformance,
  facilities,
  extracurricular,
  teachingQuality,
  darkMode = false
}: SchoolRadarChartProps) {
  const data = {
    labels: ['Academic', 'Facilities', 'Extracurricular', 'Teaching'],
    datasets: [
      {
        label: 'Performance',
        data: [academicPerformance, facilities, extracurricular, teachingQuality],
        backgroundColor: darkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)',
        borderColor: darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(59, 130, 246, 1)',
      }
    ]
  }

  const options = {
    scales: {
      r: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          color: darkMode ? '#9ca3af' : '#6b7280',
          font: {
            size: 10
          }
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: darkMode ? '#d1d5db' : '#374151',
          font: {
            size: 11,
            weight: 'bold' as const
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: darkMode ? '#fff' : '#000',
        bodyColor: darkMode ? '#d1d5db' : '#374151',
        borderColor: darkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1
      }
    },
    maintainAspectRatio: true,
    responsive: true
  }

  return (
    <div className="w-full h-48">
      <Radar data={data} options={options} />
    </div>
  )
}
