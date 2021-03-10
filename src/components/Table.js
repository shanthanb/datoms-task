import React, { Component } from 'react'
import axios from 'axios'

export class Table extends Component {
    constructor(props) {
        super()
        this.state={
            data : []
        }
        }

        componentDidMount =() => {
            axios.get("https://reqres.in/api/users")
            .then(e =>{
                this.setState({
                    name:"",
                    data:e.data.data
                })
            })
            .catch(e => console.log(e))
        }

        onChange=(e)=>{
            e.preventDefault();
            this.setState({
                name:[e.target.value],
            })
 var temp = this.state.data.filter((name) => (name.first_name.toLowerCase().includes(e.target.value.toLowerCase())) 
  || name.first_name.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({data:temp})
        }
    
    render() {
        return (
            <div>
                <input type="text" className="form" placeholder="Search..." value={this.state.name} onChange={(e) => this.onChange(e)}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Avatar</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(e =>{
                            return(
                                <tr>
                                    <td>{e.id}</td>
                                 <td><img src={e.avatar} alt="avatar"/></td>
                                    <td>{e.first_name}</td>
                                    <td>{e.last_name}</td>
                                    <td>{e.email}</td>
                                </tr>
                            )
                        })}                
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
