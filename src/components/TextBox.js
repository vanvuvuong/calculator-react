import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function TextBox(props) {
    return (
        <TextField fullWidth
            variant='filled'
            defaultValue={"0"}
            color='primary'
            InputProps={{
                readOnly: true,
            }} value={props.value} {...props} />
    )
};
TextBox.propTypes = {
    value: PropTypes.string
}
export default TextBox;
