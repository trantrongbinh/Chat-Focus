import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ToDoList from '../components/ToDoList';
import { loadToDoList } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(loadToDoList, dispatch)
    };
}

const mapStateToProps = state => {
    return {
        toDoList: state.todosReducers.toDoList
    };
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default ToDoListContainer;
