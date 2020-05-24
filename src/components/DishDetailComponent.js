import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../App.css';
import { LocalForm, Control, Errors } from 'react-redux-form';

const minLength = (len) => (val) => val && val.length>=len;
const maxLength = (len) => (val) => !val || val.length<=len;

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
            <CommentForm />
        </div>            
    );
}

function RenderSelectedDish({ dish, comments}){
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
                <RenderComments comments={comments}/>
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
            <RenderSelectedDish dish={props.dish} comments={props.comments} />
            
        </div>
    );
}

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
        console.log(this.state.isModalOpen);
    }

    handleSubmit(values){
        this.toggleModal();
        alert("Current state is "+JSON.stringify(values));
        console.log("Current state is "+JSON.stringify(values));
    }

    render(){
        return (
            <React.Fragment>
            <Button onClick={this.toggleModal} className="btn btn-outline-dark"><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Label for="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" id="rating" className="form-control">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label for="author">Your Name</Label>
                                <Control.text model=".author" name=".author" id="author" className="form-control"
                                              validators={{
                                                minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                />
                                <Errors
                                    show="touched"
                                    model=".author"
                                    className="text-danger"
                                    messages = {
                                        {
                                            minLength: 'Must be more than 2 characters',
                                            maxLength: 'Must be 15 or less characters'
                                        }
                                    }
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label for="comment">Comment</Label>
                                <Control.textarea model=".comment" name=".comment" id="comment" className="form-control" rows="6"/>
                            </Col>
                        </Row>
                        <Button className="bg-primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </React.Fragment>
        )
    }
}

export default DishDetails;