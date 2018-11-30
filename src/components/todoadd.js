import React from 'react'

class TodoAdd extends React.Component {

    constructor(props) {
        super(props)
        this.initState = { value: '' }
        this.state = this.initState

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state.value)
        this.props.add(this.state.value)
        this.setState(this.initState)
    }

    render() {
        return (
            <div>
                <h2>Total:{this.props.todos.length}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text"
                            value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default TodoAdd