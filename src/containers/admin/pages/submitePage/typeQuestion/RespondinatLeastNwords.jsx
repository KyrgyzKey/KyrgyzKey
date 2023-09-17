import { Grid, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import Button from '../../../../../components/UI/buttons/Buttons'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import { postEveluatingScore } from '../../../../../api/resultService'

const RespondinatLeastNwords = ({ question, answerId, score }) => {
   const navigate = useNavigate()
   const { notify } = useSnackbar()

   const goBack = () => {
      navigate(-1)
   }
   const saveScore = async () => {
      const data = {
         answerId,
         score,
      }
      try {
         await postEveluatingScore(data)
         goBack()
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
         {question.userAnswerResponse.map((item) => (
            <>
               <Text1>Колдонуучунун жообу</Text1>
               <Text2>
                  Жооп берүү: <StyledSpan>{item.data}</StyledSpan>{' '}
               </Text2>
               <Text2>Сөздөрдүн саны: {item.data.split(' ').length}</Text2>
               <SecondContainer>
                  <GoBackButton onClick={goBack}>АРТКА КАЙТУУ</GoBackButton>
                  <SaveButton onClick={saveScore}>САКТОО</SaveButton>
               </SecondContainer>
            </>
         ))}
      </>
   )
}
export default RespondinatLeastNwords
const GoBackButton = styled(Button)(() => ({
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   width: '105px',
   height: '42px',
}))
const SaveButton = styled(Button)(() => ({
   background: '#2AB930',
   borderRadius: '8px',
   width: '82px',
   height: '42px',
   color: 'white',
   marginLeft: '1rem',
   '&:hover': {
      background: '#00ff2a',
   },
}))
const SecondContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: '32px',
}))
const Text1 = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '18px',
   lineHeight: '21px',
   color: '#4C4859',
}))
const Text2 = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 500,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#4C4859',
   marginTop: '14px',
}))

const StyledSpan = styled('span')(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '18px',
   color: '#3A10E5',
}))
