import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";

/* export const Detail = ({ detailId }) => { */
export const Detail = ({ especieId, especie }) => {
  return (
    <Layout title={`Especie: ${especie}`}>
      <PhotoCardWithQuery id={especieId} />
    </Layout>
  );
};
