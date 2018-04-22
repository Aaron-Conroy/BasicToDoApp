import React, {Component} from 'react'
import {AppRegistry, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    StyleSheet,
Picker} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 40,
        backgroundColor: '#f7f7f7'
    },
    input: {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fafafa'
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButton: {
        backgroundColor: '#666'
    },
    dropdown: {
        borderWidth: 1, 
        width: 100,
        borderColor: '#d7d7d7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    }
})

const options =["Low","Medium","High"];


export default class TaskForm extends Component{   
    constructor(props, context){
    super(props, context);  
    this.state ={
        importance: 'Low'
    }
}

onChange(text){
    this.task = text;
}

onAddPressed(){
    this.props.onAdd(this.task, this.state.importance);
}

updateImportance(selection){
 this.setState({importance: selection});
}

render(){ 
    return(
        <View style={styles.container}>

            <TextInput onChangeText={this.onChange.bind(this)} style={styles.input}/>

            <TouchableHighlight onPress={this.onAddPressed.bind(this)}  style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this.props.onCancel} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableHighlight>

        <View style={styles.dropdown}>
            <Picker
                selectedValue={this.state.importance}
                onValueChange = {this.updateImportance.bind(this)}>
                {options.map((item, index) => {
                        return (<Picker.Item label={item} value={item} key={item}/>) 
                })}
            </Picker>
        </View>

        </View>
    );
} 

}

AppRegistry.registerComponent('TaskForm', () => TaskForm);
