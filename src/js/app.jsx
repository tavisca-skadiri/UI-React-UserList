import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

class App extends React.Component {
	constructor(){
		super();
		this.state = {
            users : ["Saqlain Kadiri", "Shivam Raj", "Vikas Mandal", "Vijay Reddy"],
            selectedUserIndex : 0
        }
	}
	updateSelectedUser(index){
        this.setState({
            selectedUserIndex : index
        })
    }
    updateArrayValue(changedValue){
        let updated = this.state.users;
        updated[this.state.selectedUserIndex] = changedValue;
        console.log(updated);
        this.setState({
            users: updated
        })
    }
 	render() {
        return (
            <div> 
                <UserList users={this.state.users} funcupdateSelected={this.updateSelectedUser.bind(this)}/>
	            <UserDetails users={this.state.users[this.state.selectedUserIndex]} funcUpdateArray={this.updateArrayValue.bind(this)}/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('content'));  