import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
	 defaultProps = {
		title: 'Header Title'
	};

	
		return (
			<View style={[styles.container,]}>
				<View style={styles.backAndTitleContainer}>
					{this.props.leftAction}
					<Text style={styles.headerTitleStyle}>{this.props.title}</Text>
				</View>
				{this.props.rightAction}
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		alignItems: 'center'
	},
	backAndTitleContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	headerTitleStyle: {
		fontSize: 20,
		paddingHorizontal: 10,
		fontFamily:'Medium'
	}
});
