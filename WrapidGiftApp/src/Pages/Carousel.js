import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './carousel.css'

//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Carousel extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        items: [
          'https://images.unsplash.com/photo-1554355793-707593c9f6f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
          'https://images.unsplash.com/photo-1608318446814-03d11cf7633b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
          'https://images.unsplash.com/photo-1482731910308-31e96e5d1d28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
          'https://images.unsplash.com/photo-1545622783-b3e021430fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80',
          'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80'
        ],

        current: 0,
        isNext: true
      };

      this.handlerPrev = this.handlerPrev.bind(this);
      this.handlerNext = this.handlerNext.bind(this);
      this.goToHistoryClick = this.goToHistoryClick.bind(this);
    }

    handlerPrev() {
      let index = this.state.current,
          length = this.state.items.length;

      if( index < 1 ) {
        index = length;
      }

      index = index - 1;

      this.setState({
        current: index,
        isNext: false
      });
    }

    handlerNext() {
      let index = this.state.current,
          length = this.state.items.length - 1;

      if( index == length ) {
        index = -1;
      }

      index = index + 1;

      this.setState({
        current: index,
        isNext: true
      });
    }

    goToHistoryClick( curIndex, index ) {
      let next = (curIndex < index);
      this.setState({
        current: index,
        isNext: next
      });
    }

    render(){
      let index = this.state.current,
          isnext = this.state.isNext,
          src = this.state.items[index];


      return (
        <div className="app">
          <div className="carousel">
           <ReactCSSTransitionGroup
              transitionName={{
              enter: isnext ? 'enter-next' : 'enter-prev',
              enterActive: 'enter-active',
              leave: 'leave',
              leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
            }}
             >
               <div className="carousel_slide" key={index}>
                 <img src={src}/>
               </div>
             </ReactCSSTransitionGroup>
             <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
             <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
            <div className="carousel_history">
              <History
                current={this.state.current}
                items={this.state.items}
                changeSilde={this.goToHistoryClick}
              />
            </div>
            </div>
        </div>
      )
    }
  }

  class History extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let current = this.props.current;
      let items = this.props.items.map( (el, index) => {
        let name = (index == current) ? 'active' : '';
        return (
          <li key={index}>
            <button
              className={name}
              onClick={ () => this.props.changeSilde(current, index) }
            ></button>
          </li>
        )
      });

      return (
        <ul>{items}</ul>
      )
    }
  }

//ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))

export default Carousel
