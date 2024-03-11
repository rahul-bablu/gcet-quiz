import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import '../App.css';

function InputField({labelName, inpType, name}) {
    return (
        <TextField
                margin="normal"
                required
                fullWidth
                label={labelName}
                name={name}
                type={inpType}
                inputProps={{
                    autoComplete: 'off',
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "white",
                        
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid #DB2BD6',
                        },
                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: '2px solid white',
                            },
                        },
                        "&:hover:not(.Mui-focused)": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: '1px solid #DB2BD6',
                                
                            },
                        },
                        
                
                    },
                    "& .MuiInputLabel-outlined": {
                        color: "white",
                        "&.Mui-focused": {
                            color: "white",
                        },
                    },
                    '& .MuiInputLabel-asterisk': {
                        display: 'none', // Hide the asterisk for required fields
                    },
                }}        
            />
        
    );
}

export default function Login() {
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
    };

    return (

        <Container component="main" maxWidth="xs" className='main'>
        {/* <CssBaseline /> */}
        <Box
                    
            p={4} 
            width={450}    
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
                border: '1px solid #DB2BD6',
                backgroundColor: '#210140',
                borderRadius: '20px',
                boxShadow: "0 1px 40px 0px #DB2BD6",
                
                
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: '#ff009d' }}>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{color:"white"}}>
            Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <InputField labelName='Email Address' inpType='text' name='email' />
            <InputField labelName='Password' inpType='password' name='password' />        
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                  
                sx={{
                    mt: 3, mb: 2, bgcolor: '#ff009d', 
                    "&:hover": {
                        backgroundColor: "#ff009d",
                    }
                         
                }}
            >
                Login
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2" sx={{color: 'white'}}>
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            </Box>
            </Box>
        </Container>
    );
}