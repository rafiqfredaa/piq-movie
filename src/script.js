import "regenerator-runtime";
import "./script/navbar.js";
import "./script/searchbar.js";
import "./script/modalcard.js";

const SearchMovie = () =>  {
    $('#movie-list').html('');

    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie',
        type: 'get',
        dataType: 'json',
        data: {
            'api_key' : '554454f810aa7f99957beec25ce714ca',
            'query' : $('#search-input').val()
        },
        success: (result) => {
            if (result.total_results != 0) {
                let movies = result.results;
                
                $.each(movies, (i, data) => {
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card m-3">
                                <img class="card-img-top" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${data.title}</h5>
                                    <p class="card-text">${data.release_date}</p>
                                    <a href="#" id="see-detail" class="btn btn-primary btn-dark see-detail" data-toggle="modal" data-target="#exampleModal" data-title="${data.title}">Details</a>
                                </div>
                            </div>
                        </div>  
                    `);
                });
                
            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">Movie Not Found!</h1>
                    </div>
                `)
            }
        }
    });
}

$('#search-button').on('click', () => {
    SearchMovie();
});

$('#search-input').on('keyup', (key) => {
    if (key.which === 13) {
        SearchMovie();
    }
});

$('#movie-list').on('click', '#see-detail', (see_detail) => {  
    
    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie',
        type: 'get',
        dataType: 'json',
        data: {
            'api_key' : '554454f810aa7f99957beec25ce714ca',
            'query' : $(see_detail.currentTarget).data("title")
        },
        success: (result) => {
            let movie = result.results[0];
            $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item"><h3>${movie.title}</h3></li>
                                <li class="list-group-item">${movie.overview}</li>
                                <li class="list-group-item">Release date : ${movie.release_date}</li>
                                <li class="list-group-item">Vote average : ${movie.vote_average}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `)
        }
    });
});