import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';
import '../App.css';

    function RenderComments({comments}){
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

    function RenderSelectedDish({dish}){
        if(dish==null)
            return <div></div>;
        else{
            return (
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                    <RenderComments comments={dish.comments} />
                </div>
            );
        }
    }

    
    const DishDetails = (props) => {    
        return (
            <div className="container">
                <RenderSelectedDish dish={props.dish} />;
            </div>
        );
    }


export default DishDetails;