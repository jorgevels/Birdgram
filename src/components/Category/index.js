import React, { useContext } from "react";
import { Link, Image, LoaderCategory } from "./styles";
import { Context } from "../../Context";
import { Loading } from "../Loading";

export const Category = ({
  cover = "",
  path = "#",
  emoji = "?",
  isLoading = false
}) => {
  const { isLoadingCategories } = useContext(Context);

  return (
    <Link to={path}>
      {isLoadingCategories ? <Loading /> : <Image src={cover} />}
    </Link>
  );
};
