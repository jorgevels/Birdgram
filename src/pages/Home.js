import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
// import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { PhotosWithQuery } from "../container/GetPhotos";
import { Layout } from "../components/Layout";

const HomePage = ({ id }) => {
  return (
    <Layout
      title="Instagram de hermosas aves"
      subtitle="Aquí encontraras una variedad de pajaros"
    >
      <ListOfCategories />
      <PhotosWithQuery categoryId={id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});
