import axios from 'axios';
import React,{Component} from 'react';
import RecordsList from './RecordsList';

export default class View extends Component {
    constructor(props){
        super(props);
        this.state={user:[]};
    }
    componentDidMount(){
        axios.get('http://localhost/Trainee-Associate-Assignment-master/bizlogic/view.php')
        .then(respose=>{
            this.setState({user:respose.data});

        })
        .catch(function(error){
            console.log(error);
        })
    }
    userList(){
        return this.state.user.map(function(object,i){
            return<RecordsList obj={object} key={i}/>;
        });
    }
    render(){
        return(
            <div>
                <h3 align="center">Users List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        );
    }
}