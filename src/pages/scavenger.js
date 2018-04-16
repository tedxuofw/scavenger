import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Boxes from '../components/boxes';
import Congratulations from '../components/congratulations';
import Question from '../components/question';
import TEDMenu from '../components/ted-menu.js';

const questions = 	[ 	{title:"Test1", description:"answer:1234", keyword:"1234", },
						{title:"Test2", description:"answer:2345", keyword:"2345", },
						{title:"Test3", description:"answer:3456", keyword:"3456", },
						{title:"Test4", description:"answer:4567", keyword:"4567", },
						{title:"Test5", description:"answer:5678", keyword:"5678", },
						{title:"Test6", description:"answer:6789", keyword:"6789", }
					];

class Scavenger extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
			index: 0,
        };
        
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
		this.increment = this.increment.bind(this);
    }
    
	openMenu() {
		this.setState({ open: true });
	};

	closeMenu() {
		this.setState({ open: false });
	};
	
	increment() {
		this.setState({ index: this.state.index+1 });
	};
    
	render() {
		
		var content = null;
		
		if (this.state.index < questions.length) {
			var question = questions[this.state.index];
			content = (
				<div>
					<Question title={question.title} description={question.description} keyword={question.keyword} next = {this.increment}/>
					<Boxes total={questions.length} index={this.state.index} />
				</div>);
		} else {
			content = (
				<div>
					<Congratulations />
					<Boxes total={questions.length} index={this.state.index} />
				</div>);
		}
		
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    
                    <AppBar 
                        title="TEDxUofW 2018"
                        titleStyle={{
                            fontSize: '16px',
                            fontWeight:'bold',
                            textAlign: 'center'
                        }} 
                        iconClassNameRight="muidocs-icon-navigation-expand-more" 
                        onLeftIconButtonClick={this.openMenu}
                    />
					{content}
					
                    <TEDMenu open={this.state.open} close={this.closeMenu} />
                </div>
			</MuiThemeProvider>

		);
	}
}


const muiTheme = getMuiTheme({
    palette: {
        textColor: '#000'
    },
    appBar: {
        color: 'rgba(230, 43, 37, 1)',
    },
});

export default Scavenger;