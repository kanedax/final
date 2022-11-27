import { FastField } from 'formik';
import React from 'react';
import SpinerLoader from '../SpinerLoader';

const SubmitButton = () => {
    return (
        <FastField>
            {({ form }) => {
                return (
                    <button type="submit" className="btn btn-primary" disabled={form.isSubmitting}>
                        ذخیره

                        {form.isSubmitting ?
                            <SpinerLoader colorclass={"text-white"} isSmall={true} inline={true} /> : null}

                    </button>
                );
            }}
        </FastField>
    );
}

export default SubmitButton;
