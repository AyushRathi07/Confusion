import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './Header';
import Footer from './Footer';
import Contact from './ContactComponent';
import DishDetails from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment} from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
        comments: state.comments
    }
}

class Main extends Component { 

    constructor(props){
        super(props);
    }

 
    render(){        
        
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured === true)[0]}
                      promotion={this.props.promotions.filter((promo) => promo.featured === true)[0]}
                      leader={this.props.leaders.filter((lead) => lead.featured === true)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            addComment={this.props.addComment}
                />
            );
        }
        
        return (
            <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
                <Route path='/menu/:dishId' component={DishWithId}/>
                <Route exact path='/contactus' component={Contact}/>
                <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}/>}/>
                <Redirect to='home'/>
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
