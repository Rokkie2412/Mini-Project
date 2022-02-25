import React, {Component} from "react";
import {View, StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';
import { useState } from "react/cjs/react.development";

class AddNotes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            note:'',
         };
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Add Notes</Text>
                <View style={styles.inputBar}>
                    <TextInput style={styles.inputTitle}
                    placeholder="Note's Title"
                    value={this.state.title}
                    onChangeText={(value)=>this.setState({title:value})}
                    />
                </View>
                <View style={styles.bodyInput}>
                    <TextInput style={styles.Notes}
                    placeholder="Start writing your note here"
                    multiline={true}
                    numberOfLines={10}
                    value={this.state.note}
                    onChangeText={(value)=>this.setState({note:value})}
                    />
                </View>
                <TouchableOpacity style={styles.FAB} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={{color:'#fff',fontSize:20}}>Add Note</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        padding:30,
        backgroundColor: '#fff',
        flex:1
    },
    title:{
        fontSize:26,
        color:'#333',
        fontWeight:'bold',
        alignContent:'center'
    },
    inputTitle:{
        fontSize:18,
        borderWidth:1,
        borderRadius:20,
        padding:15,
        paddingHorizontal:15,
    },
    inputBar:{
        marginVertical:25,
    },
    bodyInput:{
        flex:1,
        marginVertical:30
    },
    Notes:{
        fontSize:16,
        borderWidth:1,
        padding:15,
        paddingVertical:16,
        borderRadius:15,
        height:400,
        textAlignVertical:'top'
    },
    FAB:{
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#333',
        fontSize:20,
        color:'#fff',
        padding:10, 
        borderRadius:50,
    }

})

export default AddNotes;