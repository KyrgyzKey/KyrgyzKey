import React, { useState } from 'react'
import { Typography, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import Input from '../../../../../components/UI/input/Input'
import Button from '../../../../../components/UI/buttons/Buttons'
import {
   postRecordSayingStatement,
   updateQuestionRequest,
} from '../../../../../api/questionService'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const RecordSayingStatement = ({ title, duration, testId, setError }) => {
   const { state } = useLocation()
   const [statement, setStatement] = useState(state?.question.statement || '')
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBack = () => {
      navigate(`/admin/test/${testId}`)
   }

   const submitHandler = async () => {
      if (!title) {
         setError((prevState) => ({
            ...prevState,
            title: 'Сураныч, аталышты киргизиңиз!',
         }))
      }
      if (!duration) {
         setError((prevState) => ({
            ...prevState,
            duration: 'Убакытты киргизиңиз!',
         }))
      }
      try {
         const data = {
            title,
            statement,
            duration,
            questionOrder: 5,
            correctAnswer: 'Correct',
            testId,
            isActive: true,
            questionType: state?.question.questionType,
            id: state?.question.id,
         }
         if (state !== null) {
            await updateQuestionRequest(data)
            goBack()
            notify('success', 'Ийгиликтүү жаңыртылды')
         } else {
            await postRecordSayingStatement(data)
            goBack()
            notify('success', 'Ийгиликтүү кошулду')
         }
      } catch (error) {
         notify('error', error.response?.data.message)
      }
   }

   const changeStatementHandler = (e) => {
      setStatement(e.target.value)
   }

   return (
      <>
         <Label>Билдирме</Label>
         <StyledInput value={statement} onChange={changeStatementHandler} />
         <ButtonContainer>
            <GoBackButton variant="outlined" onClick={goBack}>
               Артка кайтуу
            </GoBackButton>
            <SaveButton
               variant="contained"
               onClick={submitHandler}
               disabled={!statement}
            >
               Сактоо
            </SaveButton>
         </ButtonContainer>
      </>
   )
}

export default RecordSayingStatement

const Label = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
}))

const StyledInput = styled(Input)(() => ({
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   width: '100%',
}))

const ButtonContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '16px',
   marginTop: '30px',
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
