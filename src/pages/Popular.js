import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { URL_API, API_KEY } from '../utils/constants';
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import MovieCatalog from '../components/MovieCatalog';
import Paginator from '../components/Paginator';

export default function Popular() {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        (async () => {
            const response = await fetch(
                `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
            );
            const movies = await response.json();
            setMovieList(movies);
        })()
    }, [page]);

    const onChangePage = page => {
        setPage(page);
    }

    return (
        <Row>
            <Col span="24" style={{
                textAlign: "center",
                marginTop: "bold"
            }}>
                <h1 style={{
                    fontSize: 35,
                    fontWeight: "bold"
                }}>
                    New Movies
                </h1>
            </Col>
            {movieList.results ? (
                <Col span="24">
                    <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
                        <MovieCatalog movies={movieList} />
                    </Row>
                    <Row style={{ display: "flex", justifyContent: "center"}}>
                        <Paginator 
                            currentPage={movieList.page}
                            totalItems={movieList.total_results}
                            onChangePage={onChangePage}
                        />
                    </Row>
                </Col>
            ) : (
                <Col span="24">
                    <Loading />
                </Col>)}
           
            <Col span="24">
                <Footer />
            </Col>
        </Row>
    );
}