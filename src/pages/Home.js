import React from 'react';
import useFetch from '../hooks/useFetch';
import { Row, Col } from 'antd';

import { URL_API, API_KEY} from '../utils/constants';
import SliderMovie from '../components/SliderMovie';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

export default function Home() {
    const newMovies = useFetch(
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )

    const popularMovies = useFetch(
        `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )

    const ratedMovies = useFetch(
        `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )

    return (
        <>
            <SliderMovie  movies={newMovies} />
            <Row>
                <Col span={12}>
                    <MovieList title="Popular Movies" movies={popularMovies} />
                </Col>
                <Col span={12}>
                    <MovieList title="Top Rated Movies" movies={ratedMovies} />
                </Col>
            </Row>
            <Footer />
        </>
    );
}