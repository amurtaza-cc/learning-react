import React from 'react';
import ReactDOM from 'react-dom';


class Heading extends React.Component{
	render(){	
		return(
			<h1>helloworld!!</h1>
		);
	}
}

ReactDOM.render(<Heading />, document.getElementById('root'));
