import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.persone.imagesrc} alt="Profile" />
                    <Card.Body>
                    <Card.Title>Full Name: {this.props.persone.Fullname}</Card.Title>
                    <Card.Text >Bio: {this.props.persone.Bio}</Card.Text>
                    <Card.Text>Profession: {this.props.persone.Profession}</Card.Text>
                </Card.Body>
                </Card>
                
            </div>
        );
    }
}
export default Profile;