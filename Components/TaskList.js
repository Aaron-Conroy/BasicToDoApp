import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, ListView, TouchableHighlight
} from 'react-native'

import TaskRow from './TaskRow'

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#f7f7f7',
        flex: 1,
        justifyContent: 'flex-start'
    },
    button: {
        height: 60,
        borderColor: '#05a5d1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fafafa',
        fontSize: 20,
        fontWeight: '600'
    }
})


export default class TaskList extends Component{   
constructor(props, context){
    super(props, context);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };   
}

componentWillReceiveProps(nextProps){
    const dataSource = this
    .state
    .dataSource
    .cloneWithRows(nextProps.todos);

    this.setState({dataSource});
}

renderRow(todo){
    return(
        <TaskRow onDone={this.props.onDone} todo={todo} />
        );
}

render(){
        return (
            <View style={styles.container}>
                <ListView 
                key={this.props.todos}
                dataSource = {this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>

                <TouchableHighlight onPress={this.props.onAddStarted} style={styles.button}>
                    <Text style={styles.buttonText}>Add One Task</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

AppRegistry.registerComponent('TaskList', () => TaskList);
