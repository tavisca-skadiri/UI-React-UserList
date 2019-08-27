import React from "react";
class UserDetails extends React.Component {
    constructor(props){
        super();
        this.state = {
            firstname: '',
            lastname: ''
        }
    }    
    UNSAFE_componentWillReceiveProps(newProps) {
        console.log(newProps)
        this.setState({
            firstname: newProps.users.split(" ")[0],
            lastname: newProps.users.split(" ")[1]
        })
    }
    render(){
        return (
            <div className="tab-content">
                <div>
                    <article>
                        <label>First Name : </label>
                        <input type="text" name="first-name" id="fname" value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})}/>
                        <br/>
                        <label>Last Name : </label>
                        <input type="text" name="last-name" id="lname" value={this.state.lastname} onChange={e => this.setState({lastname: e.target.value})}/>
                        <br/>
                        <button onClick={() => this.props.funcUpdateArray(this.state.firstname+" "+this.state.lastname)}>Update</button>
                    </article>
                </div>
            </div>
        );        
    }
} 
export default UserDetails;