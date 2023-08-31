/*import React, {Component} from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import '../App.css';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        const axios = require('axios');

        const options = {
          method: 'GET',
          url: 'https://amazon-product-price-data.p.rapidapi.com/product',
          params: {
            asins: 'B005YQZ1KE,B074R8RQQ2',
            locale: 'US'
          },
          headers: {
            'X-RapidAPI-Key': '7fda4018dfmshe4349e74a2d49b3p12672fjsn0e8ccf54d8a4',
            'X-RapidAPI-Host': 'amazon-product-price-data.p.rapidapi.com'
          }
        };
        
        try {
            const response =  axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 offset-md-8">
                            <form>
                                <label>Search : </label>
                                <input type="text" placeholder="Search"></input>
                            </form>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Year</td>
                                <td>Make</td>
                                <td>Model</td>
                                <td>Type</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
                <br></br>
            </div>
        )
    }

}