import React, { Component } from 'react'
import { Fragment } from 'react';
import "./EditMovie.css"

export default class EditMovie extends Component {

    state = {
        movie: {},
        isLoaded: false,
        error: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            movie: {
                id: 0,
                title: "",
                release_date: "",
                runtime: "",
                mpaa_rating: "",
                rating: "",
                description: "",
            },
            isLoaded: false,
            error: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (e) => {
        console.log("Form was submitted!");
        e.preventDefault();
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState((prevState) => ({
            movie: {
                ...prevState.movie,
                [name]: value,
            }
        }))
    }

    componentDidMount() {

    }


    render() {
        let { movie, isLoaded, error } = this.state;
        return (
            <Fragment>
                <h2>Add/Edit Movie</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={movie.id}
                        onChange={this.handleChange} />

                    <div className="mb-3">
                        <label htmlFor="title" class="form-label">
                            Title:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={movie.title}
                            onChange={this.handleChange} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="release_date" class="form-label">
                            Release Date:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="release_date"
                            name="release_date"
                            value={movie.release_date}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="runtime" class="form-label">
                            Runtime:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="runtime" name="runtime"
                            value={movie.runtime}
                            onChange={this.handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mpaa_rating" class="form-label">
                            MPAA Rating:
                        </label>
                        <select name="mpaa_rating" className='form-select' value={movie.mpaa_rating} onChange={this.handleChange}>
                            <option className='form-select'>Choose...</option>
                            <option className='form-select' value="G">G</option>
                            <option className='form-select' value="PG">PG</option>
                            <option className='form-select' value="PG13">PG13</option>
                            <option className='form-select' value="R">R</option>
                            <option className='form-select' value="NC17">NC17</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" class="form-label">
                            Rating:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="rating"
                            name="rating"
                            value={movie.rating}
                            onChange={this.handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" class="form-label">
                            Description:
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            onChange={this.handleChange}
                            value={movie.value}
                        />
                    </div>

                    <hr />

                    <button className="btn btn-primary">Save</button>
                </form>

                <div className='mt-3'>
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>
                </div>
            </Fragment>
        );
    }
}