const styles = ({
  defaultText: {color: 'black'},
  selectedText: {color: 'blue'},
});

//StateLess Component
class SubDuyLe extends React.Component {  
  render() {
    return (
      <div>
        <h1>Practice 1</h1>
        <label>User Name: {this.props.username}</label>
        <br/>
        <label>Created Date: {this.props.date.toDateString()}</label>
      </div>
    );
  }
}

SubDuyLe.propTypes = {
  username: React.PropTypes.string.isRequired,
  date: React.PropTypes.object.isRequired
}

SubDuyLe.defaultProps = {
  username: 'Anonymous'
};

//StateFull Component
class DuyLe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
  }
  
  render() {
    return (
      <div>
        <SubDuyLe username="duyle" date={new Date()} />
        {this.showButtonOrNot()}
      </div>
    );
  }
  
  showButtonOrNot() {
    if (this.props.isStateFull) {
    return <button style={this.state.isToggleOn ?  styles.selectedText : styles.defaultText} onClick={this.handleChange.bind(this)}>{this.state.isToggleOn ? 'You like this. Click to toggle.' : "You haven't liked this. Click to toggle."}  </button>
    }
    return null
  }
  
  handleChange() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
}

const element =<div>
  <DuyLe isStateFull={true} />
  </div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);