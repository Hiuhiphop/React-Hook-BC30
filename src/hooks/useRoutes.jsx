import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function useRoutes() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  const params = useParams();

  return {
    navigate: navigate,
    searchParam: [searchParam, setSearchParam],
    params: params,
  };
}
