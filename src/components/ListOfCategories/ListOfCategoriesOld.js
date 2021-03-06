import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { Loading } from "../Loading";

import { ContainerList, List, Item } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    window
      .fetch("https://bidgram-backend.vercel.app/categories")
      /*  window
      .fetch("https://petgram-server-hksev77it.now.sh/categories") */
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  // muesta la barra de la cabecera si el usuario hace scroll
  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);
      // se remoeve el eventListener del scroll
      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );
  if (loading) {
    return <Loading />;
  }

  const renderList = (fixed) => (
    <ContainerList fixed={fixed}>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    </ContainerList>
  );
  /* if (loading) return "Cargando..."; */
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

// Le pasamos el elemento que queremos memorizar para que lo vuelva a renderizar
export const ListOfCategories = React.memo(ListOfCategoriesComponent);
