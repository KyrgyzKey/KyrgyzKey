import { Grid, Typography, styled } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Icon } from '../../assets/icons/group32.svg'
import Button from '../../components/UI/buttons/Buttons'
import FormContainer from '../../components/UI/form/FormContainer'
import { submitTestRequest } from '../../api/testService'
import { useSnackbar } from '../../hooks/useSnackbar'
import { userQuestionActions } from '../../redux/user/user.slice'

const CompleteTest = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { state } = useLocation()
   const { testId, answers } = useSelector((state) => state.user)
   const { notify } = useSnackbar()

   const postSubmitTest = async () => {
      try {
         await submitTestRequest({ testId, answers })
         navigate('/user/tests')
         notify('success', 'Test', 'Complete test')
         dispatch(userQuestionActions.clearTest())
      } catch (error) {
         notify('error', 'Test', error.response.data.message)
      }
   }

   const tryAgainTest = () => {
      dispatch(userQuestionActions.clearTest())
      navigate(`/user/tests/${state}`)
   }

   return (
      <FormContainer>
         <Container>
            <Title>Тест жыйынтыкталды</Title>
            <Icon />
         </Container>
         <KyrgyzKey>
            Kyrgyz
            <span style={{ color: '#fff', WebkitTextStroke: '1px black' }}>
               Key
            </span>
         </KyrgyzKey>
         <Text>
            Сиздин жыйынтыктарыңыз баалоо үчүн жөнөтүлдү. <br />
            Баа коюлгандан кийин жыйынтыгы электрондук почтага жөнөтүлөт.
         </Text>
         <Buttons>
            <ButtonTryAgain onClick={tryAgainTest}>ТЕСТТЕН ӨТҮҮ</ButtonTryAgain>
            <ButtonDone variant="contained" onClick={postSubmitTest}>
               кылынды
            </ButtonDone>
         </Buttons>
      </FormContainer>
   )
}
export default CompleteTest

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '19px',
}))

const Title = styled(Typography)(() => ({
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '28px',
   lineHeight: '32px',
   textTransform: 'uppercase',
   color: '#4C4859',
}))

const Text = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '1.125rem',
   lineHeight: '130%',
   textAlign: 'center',
   color: '#4C4859',
   paddingBottom: '60px',
   borderBottom: '1.53px solid #D4D0D0',
}))
const Buttons = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '32px',
}))
const ButtonDone = styled(Button)(() => ({
   width: '148px',
   height: '42px',
   borderRadius: '8px',
}))

const ButtonTryAgain = styled(Button)(() => ({
   width: '118px',
   height: '42px',
   border: '2px solid #3A10E5',
   borderRadius: '8px',
   fontFamily: 'Oswald',
   fontSize: '0.9rem',
   fontWeight: 700,
}))

const KyrgyzKey = styled('h1')(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '3rem',
   lineHeight: '74.88px',
   color: '#C93D7D',
   margin: '0 auto',
   textTransform: 'uppercase',
}))
