import React from 'react';
import ErrorWrapperUI from 'uxi/Input/utils/ErrorWrapperUI';

const withValidation = (Input) => (props) => {
    const error = (
        props &&
        props.meta &&
        props.meta.touched &&
        props.meta.error
    );

    return (
        <div>
            <div style={error ? { paddingBottom: '6px' } : {}}>
                <Input {...props} />
            </div>
            {
                error && (
                    <ErrorWrapperUI>
                        {error}
                    </ErrorWrapperUI>
                )
            }
        </div>
    )
};

export default withValidation;
