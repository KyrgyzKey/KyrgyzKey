import React, { useState } from 'react'
import { Button, styled } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/auth/auth.thunk'
import ModalReusable from '../UI/modal/Modal'

const Header = ({ title, endpoint, resultEndpoint }) => {
   const [openModal, setOpenModal] = useState(false)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const onLogout = () => {
      dispatch(signOut())
         .unwrap()
         .then(() => navigate('/sign-in'))
   }

   const handleOpenModal = () => {
      setOpenModal(true)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const goToHomePage = () => {
      navigate('/')
   }

   return (
      <>
         <ModalReusable isOpen={openModal} handleClose={handleCloseModal}>
            <LogOutWarningText>Чыгууну каалайсызбы?</LogOutWarningText>
            <ButtonContainer>
               <Button variant="outlined" onClick={handleCloseModal}>
                  Жок
               </Button>
               <Button variant="contained" onClick={onLogout}>
                  Ооба
               </Button>
            </ButtonContainer>
         </ModalReusable>
         <StyledHeader>
            <KyrgyzKey onClick={goToHomePage}>
               Kyrgyz
               <span style={{ color: '#fff', WebkitTextStroke: '1px black' }}>
                  Key
               </span>
            </KyrgyzKey>
            <Container>
               <TestBtn to={endpoint}>Тест</TestBtn>
               <SubmitBtn to={resultEndpoint}>{title} жыйынтыгы</SubmitBtn>
               <LogOut onClick={handleOpenModal}>Чыгуу</LogOut>
            </Container>
         </StyledHeader>
      </>
   )
}

export default Header
const ButtonContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-evenly',
}))

const StyledHeader = styled('header')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   padding: '26px 120px',
   alignItems: 'center',
   background: '#ffffff',
}))

// const Logotype = styled(Logo)(() => ({
//    cursor: 'pointer',
// }))

const LogOut = styled(Button)(() => ({
   border: '2px solid #4C4859',
   boxShadow:
      '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
   borderRadius: '8px',
   background: 'none',
   fontSize: '1rem',
   lineHeight: '16px',
   color: '#4C4C4C',
   padding: '13px 24px',
   fontWeight: 700,
   gap: '8px',
   marginLeft: '60px',
   fontFamily: 'Oswald',
   ':hover': {
      background: '#3A10E5',
      color: '#fff',
      border: '2px solid #3A10E5',
   },
}))
const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const TestBtn = styled(NavLink)(() => ({
   fontSize: '15px',
   lineHeight: '18px',
   textTransform: 'uppercase',
   color: '#4C4859',
   fontWeight: 700,
   cursor: 'pointer',
   textDecoration: 'none',

   '&.active': { color: '#3A10E5' },
}))

const SubmitBtn = styled(NavLink)(() => ({
   fontSize: '15px',
   fontWeight: 700,
   lineHeight: '18px',
   textTransform: 'uppercase',
   color: '#4C4859',
   marginLeft: '60px',
   cursor: 'pointer',
   textDecoration: 'none',
   '&.active': { color: '#3A10E5' },
}))
const LogOutWarningText = styled('h3')(() => ({
   fontFamily: 'Open Sans',
   fontWeight: 500,
}))

const KyrgyzKey = styled('h1')(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '5rem',
   lineHeight: '74.88px',
   color: '#C93D7D',
   margin: '5px 0 0',
   textTransform: 'uppercase',
}))
