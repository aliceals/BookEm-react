import React from 'react'
import { Redirect } from 'react-router-dom'
import { addBooking, getServiceList, getContractors } from '../api'
import { Modal, Button } from 'react-bootstrap'

class BookPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            status: "pending",
            bookingDate: this.props.day,
            userId: 1,
            form: {},
            redirectToBookings: false,
            services: [],
            contractors: [],
            inputType: "date",
            showModal: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.dateChange = this.dateChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.getServices = this.getServices.bind(this)
        this.changeModal = this.changeModal.bind(this)
        this.getContractors = this.getContractors.bind(this)
    }




    componentDidMount() {
        this.getServices()
        this.getContractors()
    }




    handleChange(e) {
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({
            form: form
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        addBooking(this.state)
        this.setState({
            redirectToBookings: true
        })

    }

    handleDateChange(e) {
        let date = e.target.value
        this.setState({
            bookingDate: date
        })
    }

    changePendingBooking(event) {
        let day = event.target.value
        this.setState({
            currentPendingBooking: day
        })
    }

    dateChange(e) {
        e.target.value = ""
        this.setState({
            inputType: "date"
        })
    }

    getServices() {
        getServiceList()
            .then(services => {
                this.setState({
                    services: services
                })
            })
    }

    changeModal() {
        this.setState({
            showModal: false
        })
    }

    getContractors() {
        getContractors()
            .then(contractors => {
                this.setState({
                    contractors: contractors
                })
            })
    }

    render() {
        let servicesArray = this.state.services
        let contractorsArray = this.state.contractors


        return (
            <React.Fragment className="main">

                <Modal show={this.state.showModal} onHide={this.changeModal} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>

                    <Modal.Header closeButton>
                        <Modal.Title>Fill in booking details below</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <label>Date:
                        <input type={this.state.inputType}
                                    name="day" value={this.state.bookingDate}
                                    onClick={this.dateChange} onChange={this.handleDateChange} required />
                            </label>

                            <br />
                            <label>Time:
                        <input type="time" name="bookingTime" onChange={this.handleChange} required />
                            </label>
                            <br />
                            <label>Book: <select name="job_id" id="jobId" className="jobType" onChange={this.handleChange}>
                                <option value="default"> -- select an option -- </option>
                                {servicesArray.map((service) => {
                                    return <option value={service.servicesId}>{service.servicesDescription} {service.servicesFee}</option>
                                })}
                            </select>
                            </label>
                            <br />
                            <label>Book from: <select name="contractorId" id="contractorId" className="company" onChange={this.handleChange}>
                                <option value="default"> -- select an option -- </option>
                                <option value="2221"> Greater Gardens </option>
                                <option value="2221"> Mikes Mowing </option>
                                <option value="2221"> Greater Gardens </option>
                            </select>
                            </label>

                            <br />

                            <button type="submit" value={this.state} onClick={this.handleSubmit} >Book!!</button>
                        </form>
                        {this.state.redirectToBookings ? <Redirect to="/bookings" /> : null}

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.changeModal}>Close</Button>

                    </Modal.Footer>
                </Modal>

            </React.Fragment >
        )
    }
}

export default BookPage


