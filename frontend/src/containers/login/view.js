import React, { Component } from 'react';
import Alert from './../../components/errorAlert';
import defaultUrl from './../../url'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, alert: false, alertMessage: '' }

        this.closeAlert = this.closeAlert.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    closeAlert() {
        this.setState({ alert: false, alertMessage: '' })
    }

    submitForm(e) {
        e.preventDefault();
        let data = new FormData(e.target);

        fetch(defaultUrl + "login", {
            method: 'post',
            body: data,
        }).then((response) => { return response.json() })
            .then((data) => {
                if (data.status === 'success') {
                    localStorage.setItem("token", data.body.token);
                    localStorage.setItem("role", data.body.userRole);
                    this.props.history.push('/view-class');
                } else {
                    this.setState({ alert: "error", alertMessage: data.body[0].msg })
                }
            });

    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="container">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <Alert status={this.state.alert} message={this.state.alertMessage} close={this.closeAlert} />

                                <form action="/login" onSubmit={(event) => this.submitForm(event)} >
                                    <div className="form-group">
                                        <label >Email address:</label>
                                        <input type="email" className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password:</label>
                                        <input type="password" className="form-control" id="pwd" name="password" />
                                    </div>
                                    <div className="form-group form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary" >Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;