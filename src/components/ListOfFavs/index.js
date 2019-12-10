import React from "react";
import { Grid, Image, Link, Loader } from "./style";
import { Status } from "../Status";
import { Loading } from "../Loading";

export const ListOfFavs = ({ favs = [], loading, error }) => {
  const showData = !loading && favs.length > 0 ? true : false;

  if (error) {
    return (
      <Grid>
        <Status state="error" />
      </Grid>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid widthBackground={showData}>
      {loading &&
        favs.length > 0 &&
        favs.map(fav => (
          <Link key={fav.id} to={`#`}>
            <Loader />
            <Image src={fav.src} />
          </Link>
        ))}
      {!loading && favs.length === 0 && (
        <Status state="empty" color="#a9a5a5" message="No tienes favoritos." />
      )}
      {showData &&
        favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}/${fav.especie}`}>
            <Image src={fav.src} />
          </Link>
        ))}
    </Grid>
  );
};
/* showData &&
  favs.map(fav => (
    <Link key={fav.id} to={`/detail/${fav.id}`} widthShadow={true}>
      <Image src={fav.src} />
    </Link>
  )); */
