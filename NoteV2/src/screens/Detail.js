import React, {Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Detail</Text>
                <TouchableOpacity
                onPress={()=>this.props.navigation.goBack()}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Detail;