import React, { useState, useEffect } from 'react'
import { Typography, keyframes, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosError } from 'axios'
import TextArea from '../../../../../components/UI/textArea/TextArea'
import Button from '../../../../../components/UI/buttons/Buttons'
import RadioButtons from '../../../../../components/UI/checkbox/RadioButton'
import MyIconButton from '../../../../../components/UI/Icon-button/IconButton'
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/deletedIcon.svg'
import QuestionModal from '../../../../../components/UI/modal/QuestionModal'
import {
   postSelectBestTitle,
   updateQuestionRequest,
} from '../../../../../api/questionService'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { questionActions } from '../../../../../redux/question/question.slice'

const SelectBestTitle = ({ title, duration, testId, setError }) => {
   const dispatch = useDispatch()
   const { state } = useLocation()
   const { options } = useSelector((state) => state.questions)
   const [openModal, setOpenModal] = useState(false)
   const [passageInput, setPassageInput] = useState(
      state?.question.passage || ''
   )
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const openModalHandler = () => {
      setOpenModal(true)
   }

   const closeModalHandler = () => {
      setOpenModal(false)
   }

   const changePassageInput = (e) => {
      setPassageInput(e.target.value)
   }

   const goBack = () => {
      navigate(`/admin/test/${testId}`)
   }

   const changeRadioOption = (id) => {
      dispatch(questionActions.changeTrueOption(id))
   }

   const deleteHandler = (id) => {
      dispatch(questionActions.deleteOption(id))
   }

   const submitHandler = async () => {
      const data = {
         title,
         duration,
         testId,
         questionOrder: 1,
         passage: passageInput,
         isActive: true,
         options,
         questionType: state?.question.questionType,
         id: state?.question.id,
      }
      try {
         if (!passageInput) {
            return notify('error', 'Үзүндү киргизиңиз')
         }
         if (!title) {
            return setError((prevState) => ({
               ...prevState,
               title: 'Сураныч, аталышты киргизиңиз!',
            }))
         }
         if (!duration) {
            return setError((prevState) => ({
               ...prevState,
               duration: 'Убакытты киргизиңиз!',
            }))
         }
         if (options.length === 0) {
            return notify('error', 'параметрлер бош болбошу керек')
         }
         if (state !== null) {
            await updateQuestionRequest(data)
            goBack()
            notify('success', 'Ийгиликтүү жаңыртылды')
         } else {
            await postSelectBestTitle(data)
            goBack()
            notify('success', 'Ийгиликтүү кошулду')
         }
         return dispatch(questionActions.clearOptions())
      } catch (error) {
         if (AxiosError(error)) {
            return notify('error', error.response?.data.message)
         }
         return notify('error', 'Бир жерден ката кетти')
      }
   }

   const disabledBtn = options.length === 0 || !passageInput

   useEffect(() => {
      dispatch(questionActions.updateOption(state?.question.options || []))
   }, [])

   return (
      <>
         <QuestionModal isOpen={openModal} onClose={closeModalHandler} />
         <Container>
            <Passage>
               <PassageLabel htmlFor="title">Өтүү</PassageLabel>
               <TextArea
                  id="title"
                  rows={7}
                  value={passageInput}
                  handleChange={changePassageInput}
               />
            </Passage>
            <ButtonContainer>
               <AddOptionsButton onClick={openModalHandler}>
                  Тандоо кошуңуз
               </AddOptionsButton>
            </ButtonContainer>
            <OptionsContainer>
               {options.length === 0 ? (
                  <StyledTypography onClick={openModalHandler}>
                     Сураныч тандоо кошуңуз
                  </StyledTypography>
               ) : (
                  options.map((item, i) => (
                     <Options key={item.title}>
                        <TitleContainer>
                           <Index>{i + 1}</Index>
                           <Title>{item.title}</Title>
                        </TitleContainer>
                        <Actions>
                           <RadioButtons
                              checked={item.isCorrect}
                              onClick={() => changeRadioOption(item.id)}
                           />
                           <MyIconButton onClick={() => deleteHandler(item.id)}>
                              <DeleteIcon />
                           </MyIconButton>
                        </Actions>
                     </Options>
                  ))
               )}
            </OptionsContainer>
            <ButtonContainer>
               <GoBackButton onClick={goBack}>Артка кайтуу</GoBackButton>
               <SaveButton onClick={submitHandler} disabled={disabledBtn}>
                  Сактоо
               </SaveButton>
            </ButtonContainer>
         </Container>
      </>
   )
}

export default SelectBestTitle

const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '16px',
   textDecoration: 'underline',
   cursor: 'pointer',
   color: '#3a10e5',
}))

const slideInDown = keyframes`
   from {
      opacity: 0;
      transform: translateY(-20px);
   }
   to {
      opacity: 1;
      transform: translateY(0);
   }
`

const fadeIn = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const Container = styled('div')(() => ({
   display: 'grid',
   gap: '32px',
}))

const Passage = styled('div')(() => ({
   display: 'grid',
   gap: '12px',
   animation: `${slideInDown} 0.3s ease forwards`,
}))
const PassageLabel = styled('label')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
}))
const ButtonContainer = styled('div')(() => ({
   justifyContent: 'flex-end',
   display: 'flex',
   gap: '15px',
}))
const OptionsContainer = styled('div')(() => ({
   display: 'grid',
   gap: '16px',
}))

const Options = styled('div')(() => ({
   background: '#FFFFFF',
   border: '1.53px solid #D4D0D0',
   borderRadius: '8px',
   display: 'flex',
   gap: '25px',
   padding: '16px 14px',
   justifyContent: 'space-between',
   animation: `${fadeIn} 0.3s ease forwards`,
}))

const Index = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '16px',
   color: '#4C4859',
}))

const TitleContainer = styled('div')(() => ({
   display: 'flex',
   gap: '25px',
}))

const Title = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
}))

const Actions = styled('div')(() => ({
   display: 'flex',
}))

const AddOptionsButton = styled(Button)(() => ({
   '&:hover': {
      background: '#0015cf',
   },
   background: '#3A10E5',
   borderRadius: '8px',
   color: '#ffff',
   whiteSpace: 'nowrap',
   fontFamily: 'Poppins',
   fontSize: '0.875rem',
   lineHeight: '1rem',
   padding: '12px 24px',
}))

const GoBackButton = styled(Button)(() => ({
   '&:hover': {
      background: '#3A10E5',
      color: '#fff',
   },
}))

const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   color: '#fff',
   '&.Mui-disabled': {
      background: 'none',
      border: '2px solid',
   },
   '&:hover': {
      background: '#31CF38',
   },
}))
