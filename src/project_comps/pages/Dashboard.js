import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card';
import chart from "../../assets/images/icons/chart.png";
import members from "../../assets/images/icons/people2.png";
import products from "../../assets/images/icons/piechart.png";
import percentage from "../../assets/images/icons/percentage.png";

const Dashboard = () => {
    return ( 
        <div className="Dashboard">
            <div className="section">
                <h2>Dashboard</h2>
            </div>
            <div className="section" id="dashboardlowersection">
                <Card title="CUSTOMER" number={1000} percentage={3.48} icon={chart} gap="month" direction="positive"/>
                <Card title="MEMBERS" number={3} percentage={3.48} icon={members} gap="week" direction="negative"/>
                <Card title="PRODUCTS" number={400} percentage={50} icon={products} gap="day" direction="positive"/>
                <Card title="OFFERS" number={5} percentage={10} icon={percentage} gap="day" direction="positive"/>
            </div>
        </div>
     );
}
 
export default Dashboard;