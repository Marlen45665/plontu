import "../modal/modal.css"

export function Modal (props) {

    return(
        <div className="modal-dilog" onClick={() => props.setActive(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}