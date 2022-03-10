import React from 'react'
import {Image,View,Text,StyleSheet} from 'react-native'

const ResultsDetail = ({result})=> {
    return(
        <View style={styles.container}>
            <Image style={styles.image
            } source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        marginLeft:15,
    },
    image :{
        width : 270,
        height:140,
        borderRadius:5,
        marginBottom:5,
    },
    name:{
        fontWeight:'bold',
        fontSize:13,
    }
})

export default ResultsDetail