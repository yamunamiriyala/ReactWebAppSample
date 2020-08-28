import React, { Component } from 'react'

class ClassComponent extends Component {
    //Initialization phase starts
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: ''
        }
        console.log('inside initialization phase')
    }
    //Initialization phase ends

    //Mounting phase starts
    componentWillMount(){
        console.log('inside component will mount')
    }
    componentDidMount(){
        //to make api calls this is the recommended method
        console.log('inside component did mount')
    }
    //Mounting phase ends
    //Updating phase starts
    componentWillUpdate(){
        console.log('inside component will update')
    }
    componentDidUpdate(){
        //to make updated api calls this is the recommended method
        console.log('inside component did update')
    }
    //Updating phase ends
    //unmounting phase starts
    componentWillUnmount(){
        console.log('inside component will unmount')
    }
    //unmounting phase ends
    render() {
        console.log('inside render')

        return (
            <div>
                
            </div>
        )
    }
}

export default ClassComponent;
