import { useState } from "react";
import { getSitesFromApi } from "../../../services/api";

const Sites = (props) => {
  const [text, setText] = useState("");
  console.log(props.site);
  return (
    <>
      <div>
        Site {props.site.id} Title: {props.site.siteTitle}
      </div>
      <input
        type="text"
        onChange={(evt) => {
          setText(evt.target.value);
        }}
      />
      <div>{text}</div>
    </>
  );
};

export async function getStaticPaths() {
  const sites = await getSitesFromApi();

  console.log(sites);

  const paths = sites.map((site) => {
    return { params: { siteId: site.id.toString() } };
  }); // map sites id's to make paths

  console.log("paths:", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const sites = await getSitesFromApi();

  console.log("params", props.params);

  let renderSite = { name: "no site" };

  sites.forEach((site) => {
    if (site.id == props.params.siteId) {
      renderSite = site;
    }
  });

  return {
    props: {
      site: renderSite,
    },
  };
}

export default Sites;
