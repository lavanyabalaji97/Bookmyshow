import React from 'react'

function Signin() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="modal-body">
                        <h2 className="fs-5">Popover in a modal</h2>
                        <p>This <button className="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</button> triggers a popover on click.</p>
                        <hr/>
                            <h2 className="fs-5">Tooltips in a modal</h2>
                            <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin