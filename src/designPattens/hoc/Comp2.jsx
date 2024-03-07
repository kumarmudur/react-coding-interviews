import { forwardRef } from 'react';

import withDimensions from './WithDimensions';

const Comp2 = ({ width, height }, forwardRef) => {
    return (
        <div ref={forwardRef} className="comp2">
            I am comp2 and width is {width} and height is {height}
        </div>
    );
};

export default withDimensions(forwardRef(Comp2));