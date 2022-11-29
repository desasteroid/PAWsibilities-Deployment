import React from 'react';
import Card from 'react-bootstrap/Card';
import './Review.css';
const Reviews = ()=>{
    return(
        <div className="Review-Container">
        <h1 id="title-text">What Customer's Say About Us ?</h1>
        <div class="cards-flex">
        <Card style={{ width: '25rem' }} className="card">
        <Card.Img variant="top" src="/animal1.jpg" />
        <Card.Body>
            <Card.Title>Stephen Andrew</Card.Title>
            <Card.Text>
            It was such a hassle-free experience to find my new favorite Hero, Jack. He is a very good companion, and we play together throughout the day. Great work PAWsibilties, Adoption is a Loving Option.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }} className="card">
        <Card.Img variant="top" src= "/animal2.jpg" />
        <Card.Body>
            <Card.Title>Scott Harris</Card.Title>
            <Card.Text>
            It's so easy to find your new partner on this website, just with few clicks of a button and such an interactive customer experience. I found my cat Lucy who now is my everything. Thank you PAWsibilties.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }} className="card">
        <Card.Img variant="top" src="animal3.jpg" />
        <Card.Body>
            <Card.Title>Frank Mitropolous</Card.Title>
            <Card.Text>
            Ever since I adopted Zack, my life has become so joyous, I play with him all day and a bond has developed between us. Thank you PAWsibilities for establishing this unconditional bond. I recommend PAWsibilties to everyone.
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </div>

    );
}
export default Reviews;