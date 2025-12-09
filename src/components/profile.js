
import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        setInterval(() => {this.setState({ count: this.state.count + 1 })}, 1000);
    }

    
    render() {
        return (
            <div>
                <h1>count: {this.state.count }</h1>
                <h1> My Profile</h1>
                <h2>Full Name: {this.props.persone.Fullname}</h2>
                <h2>Bio: {this.props.persone.Bio}</h2>
                <h2>Profession: {this.props.persone.Profession}</h2>
                <img src={this.props.persone.imagesrc} alt="Profile" />
            </div>
        );
    }
}
export default Profile;