import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class WebView extends Component {
	render() {
		console.log(this.props)
		const { uri, docType, html, onLinkClick } = this.props
		const propsBuilder = {}
		if (docType === 'html' || uri.includes("adalo.com") || uri =="" || uri.charAt(0) =="/" || uri == false) {
		
			propsBuilder['srcdoc'] = decodeURIComponent(html)
			console.log("html uri: ",uri)
		
		// } else {
		
		// 	if (uri.includes("adalo.com") || uri =="" || uri.charAt(0) =="/" || uri == false){
		
		// 		console.log("adalo detected, uri: ",uri)

		// 		// let noAdalo = "We're Hiding the window Preview To Avoid Adalo Editor Inception. This Happens when the webview component is pointed to *.adalo.com or to magic text"
		// 		propsBuilder['srcdoc'] = decodeURIComponent("https://pragmaflow.com")
				
			
		} else {
	
			console.log("regular uri: ",uri)
			propsBuilder['src'] = uri  
	
	}
	

    let frameStyles = {
      borderStyle: 'none',
      borderWidth: 0,
      flex: 1,
      height: '100%',
    }
		return (
			<View style={{ height: this.props._height, width: this.props._width, backgroundColor: 'rgba(0, 0, 0, 0)'}}>
				<iframe 
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
