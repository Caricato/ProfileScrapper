import { Dialog } from "@blueprintjs/core";
import { graphql } from "babel-plugin-relay/macro";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import Search from "../search/search";
import "./modal-search.scss";

export interface IModalSearch {
  isOpen: boolean;
  onClose: any;
}

const ModalSearch = ({ isOpen, onClose }: IModalSearch) => {
  const navigate = useNavigate();
  //  Mutation
  const [commit, isLoading] = useMutation(graphql`
    mutation modalSearchLinkedInProfileGetMutation($url: String!) {
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
        }
      }
    }
  `);

  const onSearch = (url: string) => {
    commit({
      variables: { url: url },
      onCompleted(data: any) {
        if (data.getLinkedin) {
          navigate(`/result/${btoa(url)}`);
          onClose();
        } else alert("Error cargando");
      },
      onError(data: any) {
        alert("Error");
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Dialog
      isOpen={isOpen}
      isCloseButtonShown={true}
      title="Nueva búsqueda"
      onClose={onClose}
    >
      <div className="modal-search">
        <Search onSearch={onSearch} />
      </div>
    </Dialog>
  );
};

export default ModalSearch;
