// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Search from "../../components/search/search";
import "./seeker.scss";
import { graphql } from "babel-plugin-relay/macro";
import Loading from "../../components/loading/loading";
const { commitMutation, useMutation } = require("react-relay");

const Seeker = () => {
  const navigate = useNavigate();
  //  Mutation
  const [commit, isLoading] = useMutation(graphql`
    mutation seekerLinkedInProfileGetMutation($url: String!) {
      getLinkedin(input: { url: $url }) {
        profile {
          name
          imgSrc
          currentLocation
          email
        }
        skills {
          name
        }
        education {
          degree
          major
          fromYear
          toYear
          university
          universityUrl
          universityImageUrl
        }
        jobs {
          designation
          company
          companyUrl
          companyImageUrl
          fromMonth
          fromYear
          toMonth
          toYear
        }
      }
    }
  `);

  const onClickSearch = (url: string) => {
    commit({
      variables: { url: url },
      onCompleted(data: any) {
        if (data.getLinkedin) navigate(`result/${btoa(url)}`);
        else alert("Error cargando");
      },
      onError(data: any) {
        alert("Error");
      },
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="seeker">
      <main>
        <h3>Identifica perfiles de las personas con un solo link</h3>
        <h1>FullScrap</h1>
        <Search onSearch={onClickSearch}></Search>
        <p className="divider">o</p>
        <Button buttonType="secondary">Buscar y comparar</Button>
      </main>
      <footer>
        <p>
          Hecho con ❤️ por <strong>FullStackOverflow</strong>
        </p>
      </footer>
    </div>
  );
};

export default Seeker;
