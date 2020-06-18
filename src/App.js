import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super();
    this.state={
      result: ""
    }
}

onClick = button => {
    if(button === "=")
        this.calculate()
    else 
        this.setState({result: this.state.result + button})
    
};

calculate = () => {
    var checkResult = '';
    if(this.state.result.includes('--')){
        checkResult = this.state.result.replace('--','+')
   }
    else {
        checkResult = this.state.result
    }

    try {
        this.setState({ result: (eval(checkResult) || "" ) + "" })
    } catch (e) {
        this.setState({result: "error"})
    }
};


  render(){
    return(
      <div className="d-flex justify-content-center align-items-center bg-success" style={{height:"98vh"}}>
      <div className="h-50 col-md-3 shadow-lg p-3 rounded px-md-4 bg-primary">
       <input type="text" name="vals" value={this.state.result} className="w-100 p-3 shadow p-3 mb-3 bg-white rounded" onKeyPress={()=>{"if(isNaN(String.fromCharCode(event.keyCode))) return false;"}} readOnly/>
       <div className="btn-group-vertical w-100 p-3 h-75 d-inline-block">
       <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('1')}>1</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('2')}>2</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('3')}>3</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('*')}>*</button>
        </div>
        <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('4')}>4</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('5')}>5</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('6')}>6</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('/')}>/</button>
        </div>
        <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('7')}>7</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('8')}>8</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('9')}>9</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('-')}>-</button>
        </div>
        <div className="btn-group h-25">
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('.')}><h1>.</h1></button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('0')}>0</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('=')}>=</button>
          <button type="button" className="btn btn-info m-1 shadow rounded" onClick={()=>this.onClick('+')}>+</button>
        </div>
      </div>
     </div>
    </div>
    )
  }

}

export default App;