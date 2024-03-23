import React from 'react'
import BooksNavbar from './BooksNavbar'

const ViewAllBooks = () => {
    return (
        <div>
            <BooksNavbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <ul class="list-group list-group-horizontal">
                                    <li class="list-group-item">To Kill a Mockingbird</li>
                                    <li class="list-group-item">Harper Lee</li>
                                    <li class="list-group-item">Thriller</li>
                                </ul>
                                <br />
                                <ul class="list-group list-group-horizontal-sm">
                                    <li class="list-group-item">Pride and Prejudice</li>
                                    <li class="list-group-item">Jane Austen</li>
                                    <li class="list-group-item">Romantic</li>
                                </ul>
                                <br />
                                <ul class="list-group list-group-horizontal-md">
                                    <li class="list-group-item">One Hundred Years of Solitude</li>
                                    <li class="list-group-item">Gabriel García</li>
                                    <li class="list-group-item">fiction</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllBooks