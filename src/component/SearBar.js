import React from "react";


class SearBar extends React.Component {
    state = {
        setText: ""
    }
    onformSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.setText);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onformSubmit} className="ui form">
                    <div className="field">
                        <label type="text">image search</label>
                        <input value={this.state.setText} onChange={(text) => { this.setState({ setText: text.target.value }) }} />
                    </div>
                </form>
            </div>

        );
    }
}
export default SearBar;
