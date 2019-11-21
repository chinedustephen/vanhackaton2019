import React, { Component } from 'react';
import ClassCard from './../../components/classCard';
import ErrorMessage from './../../components/errorMessage';
import defaultUrl from './../../url'

class ViewClass extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, classes: [] }

        this.attendClass = this.attendClass.bind(this);
    }

    attendClass(id) {
        let formData = new FormData();
        formData.append('class_id', id)

        console.log(formData)

        fetch(defaultUrl + "attend-class", {
            method: 'post',
            body: formData,
            headers: new Headers({
                'Authorization': localStorage.getItem('token'),
            }),
        }).then((response) => { return response.json() })
            .then((data) => {
                console.log(data)
                if (data.status === 'auth') {
                    this.props.history.push('/login');
                    return;
                }
                if (data.status === 'success') {
                    window.location.href = data.body.redirectLink
                }
            });


    }

    componentDidMount() {

        fetch(defaultUrl + "classes", {
            method: 'get',
            headers: new Headers({
                'Authorization': localStorage.getItem('token'),
            }),
        }).then((response) => { return response.json() })
            .then((data) => {
                if (data.status === 'auth') {
                    this.props.history.push('/login');
                    return;
                }
                if (data.status === 'success') { this.setState({ classes: data.body }) }
            });

    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="container">

                        {this.state.classes.length > 0 ? this.state.classes.map(item =>
                            <ClassCard key={item.id} data={item} attendClassHandle={this.attendClass} />
                        ) : <ErrorMessage message="No class found" />}



                    </div>
                </div>
            </div>
        );
    }
}


export default ViewClass;