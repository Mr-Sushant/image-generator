import React, {useState} from 'react'
import { Box, styled, TextField, Button } from '@mui/material';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const apiUrl = 'https://api.deepai.org/api/stable-diffusion';
const apiKey = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K';

const Container = styled(Box)`
    margin-top: 10vh;
    margin-left: 20vw;
    display: flex; /* Use flexbox layout */
  flex-direction: column; /* Stack child elements vertically */
  align-items: center; /* Center child elements horizontally */
  gap: 16px; /* Add some vertical spacing between child elements */
`;



const Content = () => {
    const [prompt, setPrompt] = useState('');
    const [error, setError] = useState(null);
    const [state, setState] = useState(null);
    const [url, setUrl] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setState('fetching');

        const data = new URLSearchParams({
            text: 'a white bengal tiger',
            grid_size: '1',
            width: '700',
            height: '700',
          });
          axios
            .post(apiUrl, data, {
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'api-key': apiKey,
                },
            })
            .then((response) => {
                setState('fetched');
                //setUrl(response.data['output_url']);
            })
            .catch((error) => {
                console.error(error);
                setState('error');
            });
    }
  return (
    <Container>
        <h3>Enter your Prompt</h3>
        <TextField style={{minWidth:'80%'}} value={prompt} onChange={(e) => setPrompt(e.target.value)} label="Prompt" variant="outlined" placeholder='Example: A tiger sitting on a tree branch'/>
        <Button variant="contained" onClick={(e) => handleSubmit(e)}>Contained</Button>
        {state === 'fetching' && <CircularProgress />}
        {state === 'fetching' && <img src={url} />}
    </Container>
  )
}

export default Content
