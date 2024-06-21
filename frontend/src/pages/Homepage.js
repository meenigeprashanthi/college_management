import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box} from '@mui/material';
import styled from 'styled-components';
//import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>

                <Grid item xs={12} md={6}>
            <img src='https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk=' 
            alt="College" 
            style={{ marginLeft: '-6.7rem', width: '100vw', height: '100vh' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            zIndex: '1000',
            height: '100%',
            width: '100vw',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignment: 'center'
          }}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            <p style={{ marginLeft: '15rem', marginTop: '4rem' }}>Welcome to </p>
                            <p>College Management System</p>
                        </StyledTitle>
                        
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            
                            <StyledText style={{ fontSize: '20px' }}>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color:"#24a0ed"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                    </div>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
  color: #fff
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;