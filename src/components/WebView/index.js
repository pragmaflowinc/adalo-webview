import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { WebView as RNWebView } from 'react-native-webview';

class WebView extends Component {
	render() {
		const { 
			uri, 
			docType, 
			html, 
			onLinkClick, 
			useBlockList = false, 
			useAllowList = false, 
			blockList = [], 
			allowList = [],
			onBlockedLinkClick = () => {}
		} = this.props
		const propsBuilder = {}
		

		if (docType === 'uri') {
			// if (uri.includes("adalo.com") || uri =="" || uri =="/"){
				
				
			// 	propsBuilder['source'] = { 
			// 		html: decodeURIComponent("<p>We're Hiding the window Preview To Avoid Adalo Editor Inception</p><p>This Happens when the webview component is pointed to *.adalo.com or to magic text</p>")
			// 	} 
			
			// } else {
				
				propsBuilder['source'] = { uri } 
			// }

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
				onLoadProgress = {({nativeEvent}) => {
					if (onLinkClick){
						onLinkClick(nativeEvent.url)
					}
						
				}}
				onShouldStartLoadWithRequest={request => {
					// if (onLinkClick) {
					// 	onLinkClick(request.url)
					// }
					if (useBlockList) {
						if (blockList.some(url => request.url.contains(url.allowListUrl))) {
							if (onBlockedLinkClick) {
								onBlockedLinkClick(request.url)
							}
							return false
						} else {
							return true
						}
					}
					if (useAllowList) {
						if (allowList.some(url => request.url.contains(url.allowListUrl))) {
							return true
						} else {
							onBlockedLinkClick(request.url)
							return false
						}
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
