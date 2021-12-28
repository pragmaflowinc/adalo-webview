import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class WebView extends Component {
	render() {
		const { uri, docType, html, onLinkClick } = this.props
		const propsBuilder = {}
		if (docType === 'html') {
			propsBuilder['srcdoc'] = decodeURIComponent(html)
		} else {
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
