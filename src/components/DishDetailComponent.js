import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';
import '../App.css';
class DishDetails extends Component{
    renderComments(comments){
        const cmnts = comments.map((cmnt)=>{
            return (
                <ul className="list-unstyled">
                    <li>{cmnt.comment}</li>
                    <li>-- {cmnt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</li><br />
                </ul>
            );
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {cmnts}
            </div>            
        );
    }

    renderSelectedDish(){
        if(this.props.selectedDish==null)
            return <div></div>;
        else{
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
                    {this.renderComments(this.props.selectedDish.comments)};
                </div>
            );
        }
    }

    render(){
        
        return (
            
            <div className="container">
            {this.renderSelectedDish()};
            </div>
        );
    }
}
export default DishDetails;