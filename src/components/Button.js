import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)({
    fontSize: 24,
    '&:hover': {
        backgroundColor: 'red',
        borderColor: '#0062cc',
    },
});
function CalculatorButton(props) {
    const handleClick = () => {
        props.clickHandler(props.label);
    }
    return (
        <StyledButton fullWidth variant='contained' color={props.color} onClick={handleClick} name={props.label} {...props} >{props.label}</StyledButton>
    )
};
CalculatorButton.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary']),
    clickHandler: PropTypes.func
};
export default CalculatorButton;