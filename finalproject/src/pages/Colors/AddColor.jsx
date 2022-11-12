import React from 'react';
import ModalComponent from '../../components/ModalComponent';

const AddColor = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_color_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalComponent
                title="افزودن رنگ"
                id="add_color_modal"
                fullscreen={false}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="" />
                                <span className="input-group-text w_8rem justify-content-center">نام رنگ</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleColorInput" className="form-label">انتخاب رنگ</label>
                            <input
                                type="color"
                                className="form-control form-control-color"
                                id="exampleColorInput"
                                // value="#563d7c"
                                title="Choose your color" />
                        </div>
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button className="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </>
    );
}

export default AddColor;
