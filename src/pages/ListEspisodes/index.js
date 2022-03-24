import React, { useState, useEffect } from 'react';
import {
  StyledContainer,
  Title,
  List,
  StyledButton,
  Information,
} from './styles';
import Header from '../../components/Header';
import firebase from 'firebase';

function ListMovies(props) {
  const { id, name } = props.history.location.state;
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function loadEpisodes() {
      const db = firebase.firestore();

      db.collection(`movie2/${id}/episodes`)
        .orderBy('id')
        .get()
        .then((querySnapshot) => {
          const arrEpisodes = [];
          querySnapshot.forEach((doc) => {
            arrEpisodes.push(doc.data());
          });
          setEpisodes(arrEpisodes);
        });
    }

    loadEpisodes();
  }, []);

  const watchEpisode = (id, name, url_movie) => {
    props.history.push('/watch', { id, name, url_movie });
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <Title>{name}</Title>
        <List>
          {episodes.length > 0 ? (
            episodes.map((ep) => (
              <li key={ep?.id}>
                <p>{ep?.name}</p>{' '}
                <StyledButton
                  onClick={() => watchEpisode(ep?.id, ep?.name, ep?.url_movie)}
                >
                  Watch Now
                </StyledButton>
              </li>
            ))
          ) : (
            <Information>This serie is empty!</Information>
          )}
        </List>
      </StyledContainer>
    </>
  );
}

export default ListMovies;
