import { Cowork, CoworkCard } from "../../components/CoworkCard";
import "../App.css";
import { useQuery, gql } from "@apollo/client";
import { useCompanies } from "./hooks/use-companies";
import { useEffect, useState } from "react";

export const Locations = () => {
  const { data, loading, error } = useCompanies();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>Find your coworking space</h2>
        </header>
      </div>
      <div className="main">
        <h4>Available spaces:</h4>
        <div className="spaces">
          {data?.map((space: any, index: any) => (
            <CoworkCard key={index} cowork={space} />
          ))}
        </div>
      </div>
    </>
  );
};
