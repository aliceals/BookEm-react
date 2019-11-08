import React from 'react'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.props.day
        }

        console.log(this.state.date)
    }

    render() {
        return (
            <React.Fragment >
                <form>
                    <label>Date:
                        <input type="text" name="day" value={this.state.date} />
                    </label>
                </form>

            </React.Fragment >
        )
    }
}

export default BookPage