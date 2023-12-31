import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { styled, Typography } from '@mui/material'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import Button from '../../../components/UI/buttons/Buttons'
import ModalReusable from '../../../components/UI/modal/Modal'
import { userQuestionActions } from '../../../redux/user/user.slice'
import { questionComponents } from '../../../utils/constants/common'
import UserTest from './UserTest'
import FormContainer from '../../../components/UI/form/FormContainer'

const modalStyleDiv = {
   width: '407px',
   height: '86px',
   borderRadius: '10px',
   padding: '36px 32px',
   display: 'flex',
   flexDirection: 'column',
}

const PracticeTest = () => {
   const dispatch = useDispatch()
   const [count, setCountPage] = useState(0)
   const [isOpenModal, setOpenModal] = useState(false)
   const navigate = useNavigate()
   const { state } = useLocation()
   const { testId } = useParams()

   useEffect(() => {
      dispatch(userQuestionActions.addTestId(testId))
   }, [])

   const QuestionComponent = questionComponents[state?.[count]?.questionType]

   const closeHandler = () => {
      setOpenModal((prevState) => !prevState)
   }
   const openHandler = () => {
      setOpenModal((prevState) => !prevState)
   }

   const navigateGoBackTest = () => {
      navigate('/user/tests')
   }

   if (state?.length > 0) {
      if (count > state.length - 1)
         return <Navigate to="/user/complete" state={testId} />

      return (
         <BackgroundContainer>
            <QuitButton onClick={openHandler} variant="contained">
               тесттен чыгуу
            </QuitButton>
            <ModalReusable
               modalStyle={modalStyleDiv}
               isOpen={isOpenModal}
               handleClose={closeHandler}
            >
               <Typography>Практикалык тесттен кетүүнү каалайсызбы?</Typography>
               <ContainerBtn>
                  <Button variant="outlined" onClick={navigateGoBackTest}>
                     тесттен чыгуу
                  </Button>
                  <Button variant="contained" onClick={closeHandler}>
                     тестти уланта берүү{' '}
                  </Button>
               </ContainerBtn>
            </ModalReusable>
            <UserTest
               questions={state}
               setCountPage={setCountPage}
               count={count}
            >
               {(isEnded) => {
                  return QuestionComponent ? (
                     <QuestionComponent
                        question={state[count]}
                        count={count}
                        isEnded={isEnded}
                     />
                  ) : (
                     <Navigate to="/user/complete" />
                  )
               }}
            </UserTest>
         </BackgroundContainer>
      )
   }
   return (
      <FormContainer>
         <div style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center' }}>Бул тест бош</h2>
            <Button onClick={navigateGoBackTest} variant="contained">
               Артка кайтуу
            </Button>
         </div>
      </FormContainer>
   )
}

export default PracticeTest

const BackgroundContainer = styled('main')(() => ({
   backgroundColor: '#D7E1F8',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
}))

const ContainerBtn = styled('div')(() => ({
   gap: '18px',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '24px',
}))

const QuitButton = styled(Button)(() => ({
   alignSelf: 'end',
   fontSize: '14px',
   padding: '12px 24px',
   textAlign: 'end',
   margin: '30px',
   border: ' solid 2px #4C4859',
   background: '#ffffff',
   color: '#4C4859',
   fontWeight: 'bolder',
   '&:hover': { backgroundColor: '#e6e4e4' },
}))
