import React from 'react';

function Header(){
    return (
        <header style = {headerStyle}>
            <h1>Application</h1>

        </header>
    )
}


const headerStyle = {
  //  background : '#333',
    color: '#fff',
    textAlign:' center',
    padding: '5px',
    borderBottom: "5px #ccc dotted",
    borderRadius: '5px'
     
}
export default Header;