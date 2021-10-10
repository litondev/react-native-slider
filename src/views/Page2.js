import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";
import DefaultLayout from "../layouts/Default";
import DefaultStyle from "../styles/Default";

export default class Home extends React.Component {
	render(){
		return (
			<DefaultLayout {...this.props}>
				<Image source={require("../../assets/img/2.png")}
					style={DefaultStyle.defaultImage}/>

				<View style={{marginTop : 10,marginBottom : 10}}>
					<Text style={DefaultStyle.defaultColor}>
						Wearing Mask
					</Text>
				</View>
			</DefaultLayout>
		)
	}
}