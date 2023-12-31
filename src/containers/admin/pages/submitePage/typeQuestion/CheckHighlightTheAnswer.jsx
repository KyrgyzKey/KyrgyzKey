import React, { Fragment } from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import Button from '../../../../../components/UI/buttons/Buttons'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postEveluatingScore } from '../../../../../api/resultService'

const CheckHighLightTheAnswer = ({ question, answerId, score }) => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBackHandler = () => {
      navigate(-1)
   }

   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      try {
         await postEveluatingScore(data)
         goBackHandler()
         return notify('success', 'Ийгиликтүү кошулду')
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', error.response?.data.message)
         }
         return notify('error', 'Бир жерден ката кетти')
      }
   }
   return (
      <>
         <TextContainer>
            <StyledText>Өтүү:</StyledText>
            <StyledSpan>{question.questionResponse.passage}</StyledSpan>
         </TextContainer>
         <TextContainer>
            <StyledText>Суроо билдирүүсү:</StyledText>
            <StyledSpan>{question.questionResponse.statement}</StyledSpan>
         </TextContainer>
         <TextContainer>
            <StyledText>Туура жооп:</StyledText>
            <CorrectAnswerText>
               {question.questionResponse.correctAnswer}
            </CorrectAnswerText>
         </TextContainer>

         {question.userAnswerResponse.map((item) => (
            <Fragment key={item.answerId}>
               <StyledText>&#39;Колдонуучунун жообу</StyledText>
               <TextContainer>
                  <StyledText>Жооп берүү:</StyledText>
                  <StyledSpan>{item.data}</StyledSpan>
               </TextContainer>
            </Fragment>
         ))}

         <ButtonContainer>
            <GoBackButton variant="outlined" onClick={goBackHandler}>
               Артка кайтуу
            </GoBackButton>
            <SaveButton color="success" variant="contained" onClick={saveScore}>
               Сактоо
            </SaveButton>
         </ButtonContainer>
      </>
   )
}

export default CheckHighLightTheAnswer

const TextContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'flex-start',
   marginBottom: '20px',
   gap: '10px',
}))

const StyledText = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '20px',
   color: '#4C4859',
}))

const StyledSpan = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '144%',
   letterSpacing: '0.03em',
   color: '#4C4859',
}))

const CorrectAnswerText = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '144%',
   letterSpacing: '0.03em',
   color: '#3A10E5',
}))

const ButtonContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
}))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   '&:hover': {
      background: '#31CF38',
   },
}))
