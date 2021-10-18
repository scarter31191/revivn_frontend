import React, { Component } from 'react'
import PickupInput from './components/pickupInput'
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/pickups/')
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
    }

    render() {

      const {isLoaded, items } = this.state;

      if(!isLoaded) {
        return <div>Loading...</div>
      }else {
        return (
          <div className="App">
                <div className="list-group">
                  {items.map(item => (
                    <div key={item.id} className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">Product: {item.product}</h5>
                      <small>Status: {item.status}</small>
                      <p className="mb-1">Location: {item.location}</p>
                      <small>Employee: {item.employee}</small>
                      {/* <button onClick={}>edit</button> */}
                    </div>
                    ))
                  }
                </div>
                <PickupInput/>
          </div>
        )
      }  
    }
}

export default App;
