import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';

import './MovieCatalog.scss';

export default function MovieCatalog(props) {
    const { 
        movies: { results } 
    } = props;
    return results.map(movie => (
        <Col key={movie.id} className="gutter-row movie-catalog" xs={24} sm={12} md={12} lg={8} xl={4}>
            <MovieCard movie={movie} />
        </Col>
    ))
}

function MovieCard(props) {
    const {
        movie: { id, title, poster_path}
    } = props;
    const { Meta } = Card;
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;


    return (
        <Link 
            to={`/movie/${id}`}
        >
            <Card
            hoverable
            style={{width: 240}}
            cover={<img alt={title} src={posterPath} />}
            actions={[<EyeOutlined />]}
            >
                <Meta title={title} />
            </Card>
        </Link>
    );
}