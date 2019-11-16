import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';


class Container1 extends Component {

  state = {
    users: [],
    isLoading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://jsonplaceholder.typicode.com/users')
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
    })
    .catch(error => this.setState({ error, isLoading: false }));
    }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    const MyLoader = () => (
      <ContentLoader
      height={140}
      speed={1}
      primaryColor={'#333'}
      secondaryColor={'#999'}
    >         
      <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          
      <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          
      <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    );

    if (isLoading) {
      return <><MyLoader /></>;
    }

    return (
        <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark"><a className="navbar-brand" href="null">Quadrant 1</a></nav> <br />
        <div className="container">
        <h2>Guests :</h2>
        {this.state.users.map((user) => (
          <div key={user.id} className="row">
             { (user.address.geo.lat > 0) && (user.address.geo.lng > 0) ? 
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
export default Container1;