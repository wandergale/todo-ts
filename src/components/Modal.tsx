import styles from "./Modal.module.css";

interface IProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IProps) => {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
