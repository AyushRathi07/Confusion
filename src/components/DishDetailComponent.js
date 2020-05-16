import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../App.css';

    function RenderComments({comments}){
        const cmnts = comments.map((cmnt)=>{
            return (
                <ul className="list-unstyled">
                    <li>{cmnt.comment}</li>
                    <li>-- {cmnt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</li><br />
                </ul>
            );
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {cmnts}
            </div>            
        );
    }

    function RenderSelectedDish({dish, comments}){
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
                    <RenderComments comments={comments} />
                </div>
            );
        }
    }

    
    const DishDetails = (props) => {    
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                    <hr/>
                </div>
                <RenderSelectedDish dish={props.dish} comments={props.comments}/>
            </div>
        );
    }


export default DishDetails;