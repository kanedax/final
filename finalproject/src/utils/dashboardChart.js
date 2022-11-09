import Chart from "chart.js/auto";
import { useEffect } from "react";


export const SetDashboardChart = () => {

    useEffect(() => {
        const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        
        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'فروش ماه',
                    data: datapoints,
                    borderColor: "#0062ff",
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }
            ]
        };
    
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'نمودار فروش یک سال گذشته'
                    },
                },
                interaction: {
                    intersect: false,
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: ' میلیون تومان'
                        },
                    }
                }
            },
        };
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
        return () => {
            myChart.destroy();
        }
    }, []);

}
