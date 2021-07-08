import React from "react";
import { getSitesFromApi } from "../../../services/api";
import Link from "next/link";

const Sites = (props) => {
  return (
    <>
      <div>Sites</div>
      {props.sites.map((site) => {
        return (
          <Link key={site} href={`./sites/${site.id}`}>
            <a>
              <div>Go to Site Number: {site.id}</div>
            </a>
          </Link>
        );
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const sites = await getSitesFromApi();

  console.log(sites);
  return {
    props: {
      sites,
    },
  };
};

export default Sites;
