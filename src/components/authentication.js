import React from 'react'
import Login from '../components/login' 

const Authentication = ProtectedComponent => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                loggedIn: false
            }
        }
    
    /* Component displays only if localStorage contains a certain value */

    componentDidMount() {
        if (localStorage.getItem('key')) this.setState({
         loggedIn: true
       });
     }

     render() {
        return (this.state.loggedIn ? <ProtectedComponent {...this.props} /> : <Login />);
    }
    }
}

export default Authentication
