import React,{Component} from 'react';
import './App.css';

import { Switch,Route,Redirect } from 'react-router-dom';

import HomePage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/ShopPage'
import Header from './components/Header/Header';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp';
import CheckoutPage from './Pages/Checkout/Checkout';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { setCurrentUser } from './redux/user/user-actions';

import { selectCurrentUser } from './redux/user/user-selector';
import { createSelector, createStructuredSelector } from 'reselect';
//for redux
import { connect } from 'react-redux';

class App extends Component {
  // constructor(props){
  //   super(props)

  //   this.state={
  //     currentUser:null
  //   }
  // } => bcz of dispatch function in redux

unSubscribeFromAuth = null

componentDidMount(){
const {setCurrentUser} = this.props

  this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // createUserProfileDocument(user)
    // console.log(user)
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
        //console.log(snapShot.data());
        //to get createdAt,email,displayName 
      //   console.log(this.state);
      // })
    }
    // this.setState({
    //   currentUser:userAuth
    // })
    setCurrentUser(userAuth)
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth()
}

  render(){
    return (
      <div>
        <Header />
        <Switch>
       <Route exact path="/" component={HomePage} />
       <Route path="/shop" component={ShopPage}/>
       <Route exact path="/checkout" component={CheckoutPage} />
       <Route path="/signin" 
       render={()=>this.props.currentUser ? 
      <Redirect to="/"/> : <SignInAndSignUp />} />
       </Switch>
      </div>
    );
  }
  
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
//currnetuser because action of currentuser happens here

