import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ProductFiles from '../ProductFiles/ProductFiles'
import axios from 'axios'
import Form from '../Form/Form'

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            shelfies: []
        }
        }
    componentDidMount(){
        axios.get('/api/shelfies').then(shelfies => {
            this.setState({
                shelfies: shelfies.data
            })
        })
    }

    render(){
        console.log(this.state.shelfies)
        const newShelfie = this.state.shelfie.map((e, i) => {
            <Dashboard key={i} data={e} />
        })
        return(
            <div className="dashboard">
                {newShelfie}
                {/* <ProductFiles/> */}
            </div>
        )
    }
}

export default Dashboard