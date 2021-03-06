import './userForm.scss';

class UserForm extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            age: null
        };
    }

    render() {
        const {
            userFormMode,
            onAdd
        } = this.props;

        // in case component is hidden
        if (userFormMode === 'hidden') {
            return null;
        }

        return (
            <form className="user-form">
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder="Name" />
                <input type="text" onChange={(e) => this.setState({family_name: e.target.value})} placeholder="Family Name" />
                <input type="number" onChange={(e) => this.setState({age: e.target.value})} placeholder="Age" />
                <input type="button" onClick={() => onAdd(this.state.name, this.state.family_name, this.state.age)} value="Add " />
            </form>
        );
    }
}

export default UserForm;