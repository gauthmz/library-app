import React from 'react'

const BooksNavbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Library</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Add books</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search book</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View all books</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/delete">Remove books</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default BooksNavbar