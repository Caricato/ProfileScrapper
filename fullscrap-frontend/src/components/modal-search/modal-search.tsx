import { Dialog } from "@blueprintjs/core";
import Search from "../search/search";
import "./modal-search.scss";

export interface IModalSearch {
  isOpen: boolean;
  onClose: any;
}

const ModalSearch = ({ isOpen, onClose }: IModalSearch) => {
  const onSearch = () => {
    console.log("Modal jaaa");
  };
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
