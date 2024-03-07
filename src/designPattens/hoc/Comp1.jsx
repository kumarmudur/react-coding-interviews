import { forwardRef } from 'react';

import withDimensions from './WithDimensions';

const Comp1 = ({ height, width }, forwardRef) => {
    return (
        <div ref={forwardRef} className="comp1">
            I am comp1 and width is: { width } and height is: { height }
        </div>
    );
};

export default withDimensions(forwardRef(Comp1));