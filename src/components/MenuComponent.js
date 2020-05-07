import React, {Component} from 'react';
//import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetails from './DishDetailComponent';
class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }

    check(){
        if(this.state.selectedDish!=null)
            return(
                <DishDetails selectedDish={this.state.selectedDish} />
            );
        else
            return; 
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
            <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id} onClick={() => this.onDishSelect(dish) }>
                    <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
            );
        });
        return (
            <div className="container ">
                <div className="row">
                        {menu}
                </div>
                {this.check()}
            </div>
        );
    }
}

export default Menu;