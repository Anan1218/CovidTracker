import React from "react";
import logo from "./logo.svg";

import styles from "./App.module.css";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";

export default class App extends React.Component {
    state = {
        data: {},
        country: "",
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div>
                <h1>
                    <center>Covid-19 Tracker</center>
                </h1>
                <div className={styles.container}>
                    <Cards data={data} />
                    <CountryPicker
                        handleCountryChange={this.handleCountryChange}
                    />
                    <Chart data={data} country={country} />
                </div>
            </div>
        );
    }
}
