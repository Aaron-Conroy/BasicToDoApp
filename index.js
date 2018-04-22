import React, {Component} from 'react'
import {AppRegistry, Text, View, Navigator} from 'react-native'
import TaskList from './Components/TaskList'

import TaskForm from './Components/TaskForm'

import NavigationExperimental from 'react-native-deprecated-custom-components';

export default class TodoApp extends Component{

constructor(props, context){
    super(props, context);
    this.state = {
        todos: [
            {
            task: 'Task 1',
            importance: 'Low'
        }, 
        {
            task: 'Task 2',
            importance: 'Low'
        },
        {
            task: 'Task 3',
            importance: 'High'
        },
        {
            task: 'Task 4',
            importance: 'Medium'
        },
        ],
    }
}

onAddStarted(){
    this.nav.push({name: 'taskform'});
}

onCancel(){
    this.nav.pop();
}
onAdd(task, importance){
    console.log('adding' , importance);
    this.state.todos.push({task: task, importance: importance});
    this.setState({
        todos: this.state.todos,
    });
    this.nav.pop();
}

onDone(todo){
    const filteredTodos = 
    this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
    });

    this.setState({
        todos: filteredTodos,
    });
}

renderScene(route, nav){
    switch(route.name){
        case 'taskform':
            return (<TaskForm 
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}/>);
        default:
            return (<TaskList 
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)} 
            todos={this.state.todos}/>);  
    }
}

render(){
        return (
            <NavigationExperimental.Navigator initialRoute={{name: 'tasklist', index: 0}}
            renderScene={this.renderScene.bind(this)}
            ref={((nav) => this.nav = nav)}
            configureScene={ () => { return NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom; }}/>
         );
    }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
