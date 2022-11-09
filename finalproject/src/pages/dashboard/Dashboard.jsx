import React from 'react';
import { SetDashboardChart } from '../../utils/dashboardChart';
import Cards from './Cards';
import ProductTable from './productTable';



const Dashboard = () => {

    SetDashboardChart();

    return (
        <div id="dashboard_section" className="dashboard_section main_section">

            <div className="row">
                <Cards
                    currentValue={7}
                    title="سبد خرید امروز"
                    desc="سبد های خرید مانده امروز"
                    icon="fas fa-shopping-basket"
                    inLastWeek={13}
                    inLastMonth={18}
                />
                <Cards
                    currentValue={5}
                    title="سفارشات مانده امروز"
                    desc="سفارشات معلق و فاقد پرداختی "
                    icon="fas fa-dolly"
                    inLastWeek={9}
                    inLastMonth={16}
                />
                <Cards
                    currentValue={45}
                    title="سفارشات امروز"
                    desc="سفارشات کامل و دارای پرداختی "
                    icon="fas fa-luggage-cart"
                    inLastWeek={263}
                    inLastMonth={1038}
                />
                <Cards
                    currentValue={1500000}
                    title="درآمد امروز"
                    desc="جمع مبالغ پرداختی (تومان)"
                    icon="fas fa-money-check-alt"
                    inLastWeek={6380000}
                    inLastMonth={22480000}
                />
            </div>

            <div className="row">

                <div className="col-12 col-lg-6">
                    <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>
                    <ProductTable />
                </div>

                <div className="col-12 col-lg-6">
                    <canvas id="myChart" height="195"></canvas>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
