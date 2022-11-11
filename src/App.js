import { Grid } from '@mui/material';
import { useState } from 'react';
import Discovery from './components/Discovery';
import './css/App.css';
import ButtonPanel from './components/ButtonPanel';
import TextBox from './components/TextBox';
import calculate from './utils/calculate';

const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery';
const Container = props => <Grid container {...props} />;

function App() {
    const [result, setResult] = useState({
        total: '',
        next: '',
        operation: '',
    })
    const handleClick = buttonName => {
        setResult(calculate(result, buttonName));
    }
    if (isDiscovery) {
        return <div>
            <Discovery />
        </div>
    }
    return (
        <div className='App'>
            <Container>
                <TextBox value={result.next || result.total || "0"} />
            </Container>
            <ButtonPanel clickHandler={handleClick} />
        </div>
    );
}

export default App;
