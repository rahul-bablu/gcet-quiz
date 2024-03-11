import React, { useState } from 'react';
import { ListItem, Typography, List } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../App.css'
function Quiz() {
    const [selected, setSelected] = useState('');
    const question = 'What is the output of the following Code ?';
    const code = `
        int main() {
            printf("Hello World !!");
            return 0;
        }
    `;    
    const options = ['Hello Friend !!', 'Hello India !!', 'Hello World !!', 'Hello !!'];
    return (
        <Container className='run-animation'>
            <Box
                sx={{
                    display: "block",
                    position: "relative",
                    boxSizing: "border-box",
                    marginTop: 10,
                }}
            >
                <Typography
                    component="pre" 
                    sx={{
                        display: "flex",
                        color: "white",
                        fontFamily: "Apple Chancery, cursive",
                        fontSize: 30,                 
                        justifyContent: "center"
                    }}
                >
                    {question}
                </Typography>
                
                <Typography
                    component="pre" 
                    sx={{
                        display: "flex",
                        color: "white",
                        fontFamily: "Courier New, monospace",
                        fontSize: 20,     
                        justifyContent: "center"
                    }}
                >
                    {code}
                </Typography>

                <List
                    sx={{
                        marginLeft: 30,
                        marginRight: 30
                    }}
                >
                    {options.map((option, index) => (
                        <ListItem
                            key={option}
                            Button
                            onClick={() => { setSelected(option) }}
                            onBlur={() => {setSelected('')}}
                            sx={{
                                paddingLeft: 3,
                                marginBottom: 2,
                                color: 'white',
                                fontFamily: "Apple Chancery, cursive",
                                borderRadius: 10,
                                transition: 'background-color 0.3s',
                                border: "1px solid #DB2BD6",
                                backgroundColor: (selected === option)? "orange": "#210140",
                                height: 50,
                                
                                '&:hover': {
                                    border: "1px solid orange",
                                    backgroundColor: 'orange',
                                },
                                
                            }}
                        >
                            {option}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
}

export default Quiz;
