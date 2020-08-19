import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()

        this.state = {
            shelfie_image: '',
            description: '',
            price: 0,
            edit: false
        }
    }

    addShelfie = (shelfie_image, description, price) => {
        axios.post('/api/Shelfie', {shelfie_image, description, price}).then((res) => {
            this.setState = ({shelfie_image: res.data, description: res.data, price: res.data}) 
            this.props.history.push('/')   
        }).catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      componentDidMount(){
          if(this.props.match.params.id){
              this.setState({edit: true})
          }

      }

      editShelfie = (shelfie_image, description, price, id) => {
        axios.put(`/api/shelfie/${id}`, {shelfie_image, description, price}).then(() => {
            this.props.history.push('/')
        })
      }

    render(){
        const {shelfie_image, description, price, edit} = this.state
        console.log(this.props)
    
        return(
            <div className="form">
                <div className="input">
                    <input onChange={(e) => this.handleChange(e)} placeholder="image" value={shelfie_image} name='shelfie_image' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="description" value={description} name='description' />
                    <input onChange={(e) => this.handleChange(e)} placeholder="price" value={price} name='price' />
                </div>

                <div className="buttons">
                    <button onClick={() => {this.addShelfie(shelfie_image, description, price)}}> Cancel</button>
                    {edit?(
                        <button onClick={() => this.editShelfie(shelfie_image, description, price, this.props.match.params.id)}>edit</button>
                    ):<button onClick={() => {this.addShelfie(shelfie_image, description, price )}} >Add to inventory</button>}
                </div>
            </div>
        )
    }
}

export default Form