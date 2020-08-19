import React, {Component} from 'react'
import axios from 'axios'
import Item from '../Item/Item'

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            shelfies: []
        }
        }
    componentDidMount(){
        axios.get('/api/shelfie').then(shelfies => {
            this.setState({
                shelfies: shelfies.data
            })
        })
    }

    deleteShelfie = (id) => {
        axios.delete(`/api/shelfie/${id}`).then((shelfies) => {
            this.setState({shelfies: shelfies.data})
        })
    }

    render(){
        console.log(this.state.shelfies)
        const newShelfie = this.state.shelfies.map((e, i) => {
            return <Item deleteShelfie={this.deleteShelfie} key={i} data={e} />
        })
        return(
            <div className="dashboard">
                {newShelfie}
                
            </div>
        )
    }
}

export default Dashboard