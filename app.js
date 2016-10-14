import React from 'react'
import ReactDOM from 'react-dom'

import { compose } from 'redux'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Router, browserHistory } from 'react-router'
import routes from './routes/index'

import configureStore from './store/configureStore'

const store = configureStore()

const app = (
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={browserHistory} routes={routes} />
	  	</MuiThemeProvider>
  	</Provider>
)

ReactDOM.render(app,document.getElementById('app'));