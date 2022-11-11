import { ButtonGroup, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import CalculatorButton from './Button';

const Item = props => <Grid item {...props} />;
function CalculatorPanel(props) {
    const handleClick = buttonName => {
        props.clickHandler(buttonName);
    };

    return (
        <div className='Panel' >
            <Item xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <ButtonGroup fullWidth orientation='vertical' border >
                    < ButtonGroup >
                        <CalculatorButton clickHandler={handleClick} label={'AC'} />
                        <CalculatorButton clickHandler={handleClick} label={'+/-'} />
                        <CalculatorButton clickHandler={handleClick} label={'%'} />
                        <CalculatorButton clickHandler={handleClick} label={'÷'} />
                    </ButtonGroup>
                    < ButtonGroup >
                        <CalculatorButton clickHandler={handleClick} label={'7'} />
                        <CalculatorButton clickHandler={handleClick} label={'8'} />
                        <CalculatorButton clickHandler={handleClick} label={'9'} />
                        <CalculatorButton clickHandler={handleClick} label={'×'} />
                    </ButtonGroup>
                    < ButtonGroup >
                        <CalculatorButton clickHandler={handleClick} label={'4'} />
                        <CalculatorButton clickHandler={handleClick} label={'5'} />
                        <CalculatorButton clickHandler={handleClick} label={'6'} />
                        <CalculatorButton clickHandler={handleClick} label={'-'} />
                    </ButtonGroup>
                    < ButtonGroup >
                        <CalculatorButton clickHandler={handleClick} label={'1'} />
                        <CalculatorButton clickHandler={handleClick} label={'2'} />
                        <CalculatorButton clickHandler={handleClick} label={'3'} />
                        <CalculatorButton clickHandler={handleClick} label={'+'} />
                    </ButtonGroup>
                    < ButtonGroup >
                        <CalculatorButton clickHandler={handleClick} label={'0'} />
                        <CalculatorButton clickHandler={handleClick} label={'.'} />
                        <CalculatorButton clickHandler={handleClick} label={'='} />
                    </ButtonGroup>
                </ButtonGroup>
            </Item>
        </div >
    )
};
CalculatorPanel.propTypes = {
    handleClick: PropTypes.func
}
export default CalculatorPanel;