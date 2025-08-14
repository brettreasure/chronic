"use client";

import { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface HorizontalBarChartProps {
  title: string;
  data: DataPoint[];
  isVisible: boolean;
}

export function HorizontalBarChart({ title, data, isVisible }: HorizontalBarChartProps) {
  const chartRef = useRef<ChartJS<'bar'>>(null);

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color || '#004146'),
        borderColor: data.map(item => item.color || '#004146'),
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      delay: (context: { datasetIndex: number; dataIndex: number }) => {
        return context.dataIndex * 200 + 300;
      },
      easing: 'easeOutQuart' as const,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        color: '#004146',
        font: {
          size: 20,
          weight: 'bold',
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: { parsed: { x: number } }) {
            return `${context.parsed.x}%`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: number | string) {
            return value + '%';
          },
          color: '#666',
          font: {
            size: 12,
          },
        },
        grid: {
          color: '#e0e0e0',
        },
      },
      y: {
        ticks: {
          color: '#333',
          font: {
            size: 13,
            weight: 500,
          },
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
      },
    },
  } as const;

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="h-80 mb-6">
        <Bar 
          key={isVisible ? 'visible' : 'hidden'} 
          ref={chartRef} 
          data={chartData} 
          options={options} 
        />
      </div>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {item.label}
            </span>
            <span className="text-lg font-bold text-primary dark:text-primary-dark">
              {item.value}%
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}