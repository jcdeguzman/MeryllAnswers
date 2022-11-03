import React, {useState, useEffect} from 'react';
import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@mui/material';
import MeryllAnswers from '../src/assets/meryllanswers.jpg'
import './App.css';

const App = () => {
    const [petition, setPetition] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [magicWord, setMagicWord] = useState('');
    const [submitButtonState, setSubmitButtonState] = useState(true);
    const [message, setMessage] = useState(null);
    const [isMagic, setIsMagic] = useState(false);
    const [currentState, setCurrentState] = useState('');

    const TemplateMagic = 'Meryll please answer'

    useEffect(() => {
      if (petition === '' || question === '') {
        setSubmitButtonState(true);
        setMessage('Say please muna')
      } else {
        setSubmitButtonState(false);
      }
    }, [petition, question, submitButtonState]);

    const PetitionMagic = (e) => {
      if (e.target.value[e.target.value.length - 1] === '.'){
        const sliced = e.target.value.slice(0, -1)
        setCurrentState(sliced)
        setIsMagic(!isMagic)
      } else {
        setCurrentState(e.target.value);
      }
    }

    const MakeMagic = () => {
      if (isMagic === true){
        const index = currentState.length - TemplateMagic.length;
        const test = TemplateMagic.substr(index)[0];
        setMagicWord(`${magicWord}${currentState[currentState.length - 1]}`);
        setPetition(`${petition}${test}`)
        console.log(test)
        console.log(index)
        console.log(`${petition}${test}`)
      } else {
        setPetition(`${currentState}${currentState[currentState.length - 1]}`)
      }
    }

    useEffect(() => {
      console.log(magicWord)
    },[magicWord])

    useEffect(() => {
      MakeMagic()
    },[currentState, setCurrentState])

  return (
    <div className="App">
      <Grid style={{backgroundColor: 'red', minHeight: 200, padding: 30}}>
      <img
              src={MeryllAnswers}
              alt="dost-seal-png"
              style={{
                objectFit: 'contain',
                height: 120,
                width: 120,
               
              }}
            />
          <Typography variant="h1" color='white'>Meryll Answers</Typography>
          <Typography variant='subtitle1' color='white'>Wassap, mga f*ckingb*b*</Typography>
          <Typography variant='subtitle1' color='white'>May tanong ka bang gustong itanong? Sagot na gustong makuha?</Typography>
          <Typography variant='subtitle1' color='white'>Nasa tamang website ka! Dito sa Meryll Answers, sasagutin nya lahat ng tanong mo</Typography>
          <Typography variant='subtitle1' color='white'>Pero bago ka magtanong, magmakaawa ka munang slapsoil ka</Typography>
          <Typography variant='subtitle1' color='white'>Kapag di mo nakuha ung gusto mong sagot, ayusin mo tanong mo baka naman pangb*bo yan</Typography>
      </Grid>
      <Grid container columnSpacing={2} style={{minHeight: 450}}>
        <Grid item xs={7} style={{padding: 50, marginTop: 100}}>
          <Grid item xs={12}>
            <TextField id="standard-basic" 
                label="Magmakaawa ka" 
                variant="standard" 
                fullWidth
                onChange={PetitionMagic}/>
          </Grid>
          <Grid item xs={12} style={{marginTop: 20}}>
            <TextField id="standard-basic" 
                label="Ano tanong mo?" 
                variant="standard" 
                fullWidth
                onChange={e => setQuestion(e.target.value)}/>
          </Grid>
          <Grid item xs={12} style={{marginTop: 40}}>
              <Button variant='contained' disabled={submitButtonState}>Send</Button>
          </Grid>
          {submitButtonState && (
                <Grid item xs={12} sm={12} md={12} style={{margin: 10}}>
                  <Typography color={'red'}>{message}</Typography>
                </Grid>
              )}
      </Grid>
      <Divider orientation='vertical' variant='middle' flexItem/>
      <Grid item xs={4} justifyContent='center' alignItems='center'>
          <Card style={{marginTop: 200}}>
            <CardContent>
              <Typography variant='h3'>Meryll Answers: {magicWord} </Typography>
              <Typography>
                {answer}
              </Typography>
            </CardContent>
          </Card>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
