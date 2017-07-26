/**
 * Created by Lzzzzzq on 2017/7/26.
 */

import 'babel-polyfill';
import React, {Component} from 'react';
import {render} from 'react-dom';

// 引入样式文件
import './index.scss';

// 引入main组件
import Main from './main';

class App extends Component {
	render() {
		return (
			<div className="appWrap">
				<div className="appTitle">app build success</div>
				<div className="appContent">
					<Main/>
				</div>
			</div>
		);
	}
}

render(
	<App/>,
	document.getElementById("app")
);
