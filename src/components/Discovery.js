import CalculatorButton from './Button';
import CalculatorPanel from './ButtonPanel';
import TextBox from './TextBox';

function Discovery() {
    return (
        <>
            < div className='row' >
                <h1>CalculatorButton</h1>
                <CalculatorButton label="test" color="primary" />
            </div >
            <div className='row'>
                <h1>TextBox</h1>
                <TextBox />
            </div>
            <div className='row'>
                <h1>CalculatorPanel</h1>
                <CalculatorPanel />
            </div>
        </>
    )
};
export default Discovery;