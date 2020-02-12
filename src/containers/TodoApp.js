import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';

function mapStateToProps({ tasks }) {
  console.log(tasks);
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

