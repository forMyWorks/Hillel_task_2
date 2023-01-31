import { useEffect, useRef } from "react";

function ModalWindow(props) {
  const ref = useRef();

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  useOnClickOutside(ref, () => props.closeModalWindow());

  return (
    <div>
      {!props.hidden ? (
        <div className="popup-black">
          <div className="popup" ref={ref}>
            <input
              className="popup-info"
              value={props.title}
              onChange={(event) => {
                props.changeInputTitle(event);
              }}
            />
            <button
              className="wrap-article_btn popup-close"
              onClick={() => {
                props.changeTitleJsonplaceholder(props.id);
                props.closeModalWindow();
              }}
            >
              Save
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default ModalWindow;
