import React, { Component } from 'react';
import Alert from './../../components/errorAlert';
import defaultUrl from './../../url'

class CreateClass extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, classes: [], alert: false, alertMessage: '' }

        this.submitForm = this.submitForm.bind(this)
        this.closeAlert = this.closeAlert.bind(this)
    }


    closeAlert() {
        this.setState({ alert: false, alertMessage: '' })
    }

    submitForm(e) {
        e.preventDefault()
        let data = new FormData(e.target);

        fetch(defaultUrl + "create-class", {
            method: 'post',
            body: data,
            headers: new Headers({
                'Authorization': localStorage.getItem('token'),
            }),
        }).then((response) => { return response.json() })
            .then((data) => {

                if (data.status === 'auth') {
                    this.props.history.push('/login');
                    return;
                }
                if (data.status === 'success') {
                    this.setState({ alert: 'success', alertMessage: data.message })
                } else {
                    this.setState({ alert: 'error', alertMessage: data.body[0].msg })
                }
            }).catch((e) => {

            });

    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="container">
                        {/* <div className="card"> */}
                        <div className="card-header">Create Class</div>
                        <div className="card-body">

                            <Alert status={this.state.alert} message={this.state.alertMessage} close={this.closeAlert} />

                            <form action="/login" onSubmit={(event) => this.submitForm(event)} >
                                <div className="form-group">
                                    <label > Class Title:</label>
                                    <input type="text" className="form-control" id="title" name="title" />
                                </div>

                                <div className="form-group">
                                    <label > Description:</label>
                                    <textarea className="form-control" id="description" name="description" ></textarea>
                                </div>

                                <div className="form-group">
                                    <label >Link to Prep Kit:</label>
                                    <input type="url" className="form-control" id="prepkit" name="prepkit" />
                                </div>

                                <div className="form-group">
                                    <label >Date:</label>
                                    <input type="date" className="form-control" id="classDate" name="classDate" />
                                </div>


                                <button type="submit" className="btn btn-primary" >Submit</button>
                            </form>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateClass;