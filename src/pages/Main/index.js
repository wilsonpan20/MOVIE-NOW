import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import {
  StyledContainer,
  Title,
  StyledRow,
  StyledButton,
  StyledCard,
  StyledCardImg,
  StyledCardBody,
  StyledCardText,
} from './styles';

function Main(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const db = firebase.firestore();

      db.collection('movie2')
        .get()
        .then((querySnapshot) => {
          const arrMovies = [];
          querySnapshot.forEach((doc) => {
            arrMovies.push(doc.data());
          });
          setMovies(arrMovies);
        });
    }

    loadMovies();
  }, []);

  const goListEpisodes = (id, name) => {
    props.history.push('/list-episodes', { id, name });
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <Title>Moview Now</Title>
        <StyledRow>
          {movies.map((movie) => (
            <StyledCard key={movie?.id}>
              <StyledCardImg
                variant="top"
                src={movie.url_picture}
                onClick={() => goListEpisodes(movie?.id, movie?.name)}
              />
              <StyledCardBody>
                <StyledCard.Title>{movie?.name}</StyledCard.Title>
                <StyledCardText>{movie.description}</StyledCardText>
                <StyledButton
                  variant="outline-dark"
                  onClick={() => goListEpisodes(movie?.id, movie?.name)}
                >
                  Watch now
                </StyledButton>
              </StyledCardBody>
            </StyledCard>
          ))}
        </StyledRow>
      </StyledContainer>
    </>
  );
}

export default Main;
