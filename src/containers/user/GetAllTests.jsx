import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Grid, styled, Typography } from '@mui/material'
import FormContainer from '../../components/UI/form/FormContainer'
import { ReactComponent as TestList } from '../../assets/icons/allTestList.svg'
import Button from '../../components/UI/buttons/Buttons'
import { getTests } from '../../redux/tests/test.thunk'
import { useSnackbar } from '../../hooks/useSnackbar'

const GetAllTests = () => {
   const dispatch = useDispatch()
   const { tests, isLoading } = useSelector((state) => state.tests)
   const { notify } = useSnackbar()

   useEffect(() => {
      dispatch(getTests(notify))
   }, [])

   const navigate = useNavigate()

   return (
      <StyledForm>
         {isLoading && (
            <SpinnerContainer>
               <CircularProgress />
            </SpinnerContainer>
         )}
         {tests && tests.length > 0 ? (
            tests.map((el) => {
               return el.isActive ? (
                  <TestsContainer key={el.id}>
                     <InfoContainer>
                        <TestIconWrapper>
                           <TestList />
                        </TestIconWrapper>
                        <span>{(el.duration / 60).toFixed(0)} мүнөт</span>
                        <StyledTitle>{el.title}</StyledTitle>
                        <StyledDescription>
                           {el.shortDescription}
                        </StyledDescription>
                     </InfoContainer>

                     <StyledButton
                        onClick={() => navigate(`${el.id}`)}
                        variant="outlined"
                     >
                        кайрадан өтүү
                     </StyledButton>
                  </TestsContainer>
               ) : null
            })
         ) : (
            <Typography>Тилекке каршы, учурда тесттер жок</Typography>
         )}
      </StyledForm>
   )
}

export default GetAllTests

const SpinnerContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
}))

const TestIconWrapper = styled('div')(() => ({
   position: 'absolute',
   left: '0%',
   top: '50%',
   transform: 'translateY(-50%)',
}))

const TestsContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-end',
   marginBottom: '5rem',
   height: '6.563rem',
}))

const StyledForm = styled(FormContainer)(() => ({
   width: '54.063rem',
   display: 'column',
   justifyItems: 'center',
   padding: '73px 38px !important',
}))
const InfoContainer = styled(Grid)(() => ({
   display: 'column',
   justifyContent: 'space-between',
   span: {
      fontFamily: 'Oswald',
      fontSize: '15px',
      lineHeight: '18px',
      textTransform: 'uppercase',
      color: '#3A10E5',
   },
   position: 'relative',
   paddingLeft: '7.5rem',
}))
const StyledTitle = styled(Typography)(() => ({
   margin: '15px 0px 20px 0px',
   alingSelf: 'self-start',
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '26px',
   lineHeight: '29px',
   color: '#4C4859',
}))

const StyledDescription = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   fontWeight: 400,
}))

const StyledButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '2px solid',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   marginLeft: '60px',
   fontFamily: 'Oswald',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '2px solid',
   },
}))
