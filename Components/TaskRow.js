import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20.
    },
    label: {
        fontSize: 20,
        fontWeight: '300',
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        padding: 5
    }
})



export default class TaskRow extends Component{   

getStyleColor(importance){
     if(importance === 'Low') {
        return {
            backgroundColor: '#99ccff'
        }
    }   else if (importance === 'Medium') {
        return {
            backgroundColor: '#ff9933'
        }
    }   else if (importance === 'High') {
        return {
            backgroundColor: '#ff3300'
        } 
    }   else {
        return {
            backgroundColor: 'white'
        }
    }
}

onDonePressed(){
    this.props.onDone(this.props.todo);
}

render(){
    return(
        <View style={[styles.container, this.getStyleColor(this.props.todo.importance)]}>
            <Text style={styles.label}>{this.props.todo.task}</Text>  
       
            <TouchableHighlight
            onPress={this.onDonePressed.bind(this)}
             style={styles.doneButton}>
                <Text>Done</Text>
            </TouchableHighlight>
        </View>
    );
} 

}

AppRegistry.registerComponent('TaskRow', () => TaskRow);
