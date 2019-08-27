import React from "react";
function UserList(props) {    
  const userList = props.users;
  return (
    <div className="tabs">
      <ul>
        {userList.map((data,index) => (
          <li key={index} onClick={()=>props.funcupdateSelected(index)}><a>{data}</a></li> 
        ))}
      </ul>
    </div>
  );
}
export default UserList;