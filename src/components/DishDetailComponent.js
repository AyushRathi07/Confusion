import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';
import '../App.css';
class DishDetails extends Component{
    render(){
        const comments = this.props.selectedDish.comments.map((cmnt)=>{
            return (
                <CardText>
                    <br />
                    {cmnt.comment}
                    <p>--{cmnt.author} {cmnt.date}</p>
                </CardText>
            );
        });
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <Card className="noborder">
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            {comments}
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}
export default DishDetails;