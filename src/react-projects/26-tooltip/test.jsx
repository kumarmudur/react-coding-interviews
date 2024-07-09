import Tooltip from '.';
import './tooltip.css';

const TooltipTest = () => {
    return (
        <div>
            <h1>Tooltip</h1>
            <Tooltip 
                content={'Tooltip Content'} 
                data={<p>Hover Me</p>} 
                delay={1000}
            />
        </div>
    )
};

export default TooltipTest;