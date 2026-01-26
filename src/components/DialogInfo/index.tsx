import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  onDialogClose: () => void;
};

export function DialogInfo({ message, onDialogClose }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
      //! prevenir de fechar na área branca
      <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}> 
        <h2>{message}</h2>
        <div onClick={() => onDialogClose()} className="dsc-dialog-btn-container">
          <ButtonPrimary text="Ok" />
        </div>
      </div>
    </div>
  );
}
