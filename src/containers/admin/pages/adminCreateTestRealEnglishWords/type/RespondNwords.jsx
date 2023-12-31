import { InputLabel, styled } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
   postRespondWords,
   updateQuestionRequest,
} from '../../../../../api/questionService'
import Button from '../../../../../components/UI/buttons/Buttons'
import Input from '../../../../../components/UI/input/Input'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

const RespondNwords = ({ title, duration, testId, setError }) => {
   const { state } = useLocation()
   const { notify } = useSnackbar()
   const navigate = useNavigate()
   const [validationErrors, setValidationErrors] = useState({})
   const [formValues, setFormValues] = useState({
      statement: state?.question.statement || '',
      minWords: state?.question.minWords || 0,
   })

   const navigateGoBackTest = () => {
      navigate(`/admin/test/${testId}`)
   }

   const handleInputChange = (event) => {
      const { name, value } = event.target

      if (name === 'minWords') {
         if (/^\d{0,3}$/.test(value) && value >= 0 && value <= 200) {
            setFormValues((prevValues) => ({
               ...prevValues,
               [name]: value,
            }))
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: '',
            }))
         } else {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: 'Сураныч  1ден 200гө чейинки санды жазыңыз.',
            }))
         }
      }

      if (name === 'statement') {
         if (value.trim().length === 0) {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: 'Сураныч ырастоо киргизиңиз',
            }))
         } else {
            setValidationErrors((prevErrors) => ({
               ...prevErrors,
               [name]: '',
            }))
         }
         setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
         }))
      }
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
      if (formValues.statement.trim().length === 0) {
         notify('error', 'Сактоодон мурун билдирүү киргизиңиз.')
         throw new Error('Сураныч ырастоо киргизиңиз')
      }

      if (Object.values(validationErrors).some((error) => error !== '')) {
         notify(
            'error',
            'Көңүл буруңуз!',
            'Сактоодон мурун текшерүү каталарын оңдоңуз.'
         )
         throw new Error('Текшерүү каталары.')
      }

      try {
         const data = {
            statement: formValues.statement,
            minWords: formValues.minWords,
            title,
            duration: Number(duration),
            questionOrder: 5,
            testId: Number(testId),
            isActive: true,
            questionType: state?.question.questionType,
            id: state?.question.id,
         }
         if (state !== null) {
            await updateQuestionRequest(data)
            navigateGoBackTest()
            notify('success', 'Ийгиликтүү жаңыланды!')
         } else {
            await postRespondWords(data)
            navigateGoBackTest()
            notify('success', 'Ийгиликтүү жайгаштырылды!')
         }
      } catch (error) {
         notify('error', error.response?.data.message)
      }
   }

   return (
      <div>
         <LabelStyled>Суроо билдирүүсү</LabelStyled>
         <InputForAnswer
            name="statement"
            value={formValues.statement}
            onChange={handleInputChange}
         />
         <ReplaysStyled>
            <LabelStyled>
               Номер өчүрүлдү
               <br /> Сөздөр
            </LabelStyled>
            <InputStyled
               type="number"
               name="minWords"
               value={formValues.minWords}
               onChange={handleInputChange}
            />
         </ReplaysStyled>
         <ContainerBtn>
            <GoBackButton variant="outlined" onClick={navigateGoBackTest}>
               Артка кайтуу
            </GoBackButton>
            <SaveButton variant="contained" onClick={submitHandler}>
               Сактоо
            </SaveButton>
         </ContainerBtn>
      </div>
   )
}

export default RespondNwords
const InputStyled = styled(Input)(() => ({
   input: { padding: '0.75rem  0.6rem 0.75rem 0.9rem ' },
   width: '8%',
   borderRadius: '.5rem',
   textAlign: 'center',
   border: 'solid .0956rem #D4D0D0',
}))

const InputForAnswer = styled(Input)(() => ({
   input: { padding: '.75rem 1.5625rem' },
   width: '100%',
   borderRadius: '.5rem',
   border: 'solid .0956rem #D4D0D0',
}))
const ReplaysStyled = styled('div')(() => ({
   marginTop: '25px',
}))

const LabelStyled = styled(InputLabel)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4B4759',
   marginBottom: '15px',
}))

const ContainerBtn = styled('div')(() => ({
   gap: '15px',
   display: 'flex',
   justifyContent: 'flex-end',
   padding: '35px 0  0 0 ',
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   boxSizing: 'border-box',
   border: 'none',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#26a32d',
      color: '#FFFFFF',
      variant: 'contained',
   },
}))

const GoBackButton = styled(Button)(() => ({
   boxSizing: 'border-box',
   border: '2px solid',
   fontSize: '14px',
   lineHeight: '16px',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   fontFamily: 'Gilroy , Poppins',
   ':hover': {
      background: '#3A10E5',
      color: '#FFFFFF',
      variant: 'contained',
      border: '2px solid',
   },
}))
