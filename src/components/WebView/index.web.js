import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class WebView extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		//Lets see if we can stop the large amounts of re-renders.
		if (this.props.docType === nextProps.docType && this.props.uri === nextProps.uri) {
			return false;
		}
		return true;
	}

	render() {
		const { uri, docType, html, onLinkClick } = this.props
		const propsBuilder = {}
		if (docType === 'html') {
			propsBuilder['srcdoc'] = decodeURIComponent(html)
		} else {
			//check if the URL starts with a proper protocol, if not, return nothing
			const validUri = /^(http(s?)|ftp|mailto|data)(\:)/i.test(uri);
			propsBuilder['src'] = (validUri ? uri : "about:blank");

			//If you wanted to display a generic "blank" page for the component, you could do something like this:
			// if (propsBuilder['src'] == "about:blank") {
			// 	propsBuilder['srcdoc'] =
			// 		"<html>" +
			// 			"<body>" +
			// 				"<div>" +
			//	 				"<center>Hello World!</center>" +
			// 				"</div>" +
			// 			"</body>" +
			// 		"</html>";
			// }
		}
		let frameStyles = {
			borderStyle: 'none',
			borderWidth: 0,
			flex: 1,
			height: '100%',
		}

		console.log('Webview Loading', propsBuilder.src);

		return (
			<View style={{ height: this.props._height, width: this.props._width, backgroundColor: 'rgba(0, 0, 0, 0)' }}>
				<iframe
					ref={elem => this.iframeRef = elem}
					webkitAllowFullScreen
					mozallowfullscreen
					allowFullScreen
					allow="camera *; microphone *"
					{...propsBuilder}
					style={frameStyles}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default WebView
