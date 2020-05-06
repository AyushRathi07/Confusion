import React, {Component} from 'react';
//import {Media} from 'reactstrap';

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

    renderDish(dish){
        if(dish!=null){
            return (
                <div>
                    {dish.name}<br/>
                    {dish.description}
                </div>
            );
        }
        else {
            return;
        }
    }

    checkAndShow(dish){
        if(this.state.selectedDish === dish){
            return (
                <div>
                    {dish.description}
                </div>
            )
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
            <div key={dish.id} className="col-12 mt-5" onClick={() => this.onDishSelect(dish) }>
                <li className="media">
                    <img class="mr-3" src={dish.image} alt={dish.name} />
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">{dish.name}</h5>
                        {this.checkAndShow(dish)}
                    </div>
                </li>
            </div>
            );
        });
        return (
            <div className="container ">
                <div className="row">
                    <div className="list-unstyled">
                        {menu}
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;