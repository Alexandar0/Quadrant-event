import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


class Container4 extends Component {

  state = {
    users: [],
    isLoading: false,
    error: null,
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      await fetch('https://jsonplaceholder.typicode.com/users')

    .then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        throw new Error('Something went wrong ...');
      }
    })
    .then((data) => {
      this.setState({ users: data, isLoading: false })
      console.log(this.state.users)
    });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }  
    }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <><Loader
      type="Oval"
      color="#1a1a1a"
      height={150}
      width={150}
      timeout={3000}

   /></>;
    }

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark"><a className="navbar-brand" href="null">Quadrant 4</a></nav> <br />
        <div className="container">
        <h2>Guests :</h2>
        {this.state.users.map((user) => (
          <div key={user.id} className="row">
             { (user.address.geo.lat > 0) && (user.address.geo.lng < 0) ? 
                   <div className="col-md-6">
                   <div className="card">
                   <h5 className="card-header">
                     {user.name}
                   </h5>
                   <div className="card-body">
                     <p className="card-text">
                       {user.address.city}
                     </p>
                   </div>
                   <div className="card-footer">
                     {user.email}
                   </div>
                 </div>
                 <br />
                 </div>
                  :
<span></span>
             }
          </div>
        ))}
        </div>
        </div>
  );
}
}
export default Container4;