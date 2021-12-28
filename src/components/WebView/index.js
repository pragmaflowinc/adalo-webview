import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { WebView as RNWebView } from 'react-native-webview';

class WebView extends Component {
	render() {
		const { uri, docType, html, onLinkClick } = this.props
		const propsBuilder = {}
		if (docType === 'uri') {
			propsBuilder['source'] = { uri } 
		} else {

			propsBuilder['source'] = { html: decodeURIComponent(html) }
		}
		return (
			<RNWebView 
				style={{ height: this.props._height, width: this.props._width, backgroundColor: 'rgba(0,0,0,0)' }}
				originWhitelist={["*"]}
				allowsFullscreenVideo={true}
				allowsInlineMediaPlayback={true}
				mediaPlaybackRequiresUserAction={false}
				onShouldStartLoadWithRequest={request => {
					if (onLinkClick) {
						onLinkClick(request.url)
					}
					return true
				}}
				{...propsBuilder}
			 />
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
