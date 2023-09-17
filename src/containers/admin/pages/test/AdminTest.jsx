import React, { useEffect, useState } from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../../../../components/UI/form/FormContainer'
import Button from '../../../../components/UI/buttons/Buttons'
import Switcher from '../../../../components/UI/checkbox/Switcher'

import { ReactComponent as EditIcon } from '../../../../assets/icons/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/deletedIcon.svg'
import MyIconButton from '../../../../components/UI/Icon-button/IconButton'
import {
   deleteTest,
   getTests,
   updateTest,
} from '../../../../redux/tests/test.thunk'
import Spinner from '../../../../components/UI/spinner/Spinner'
import { useSnackbar } from '../../../../hooks/useSnackbar'
import ModalDelete from '../../../../components/UI/modal/ModalDelete'

let mount = false

const AdminTest = () => {
   const dispatch = useDispatch()
   const { tests, isLoading } = useSelector((state) => state.tests)
   const navigate = useNavigate()
   const { notify } = useSnackbar()
   const [openModal, setOpenModal] = useState(false)
   const [testId, setTestId] = useState(null)

   const openModalHandler = (id) => {
      setOpenModal(true)
      setTestId(id)
   }

   const closeModalHandler = () => {
      setOpenModal(false)
   }

   useEffect(() => {
      if (mount) {
         dispatch(getTests(notify))
      }
      mount = true
   }, [])

   const createTestHandler = () => {
      navigate('add-new-test')
   }
   const goToUpdateTest = (item) => {
      navigate('update-test', { state: item })
   }

   const deleteHandler = (id) => {
      dispatch(deleteTest({ id, notify, setOpenModal }))
   }

   const updateIsActive = async ({ id, title, isActive, shortDescription }) => {
      dispatch(
         updateTest({
            id,
            title,
            shortDescription,
            isActive: !isActive,
            notify,
         })
      )
   }

   return (
      <>
         <ModalDelete
            isOpenModal={openModal}
            openModal={closeModalHandler}
            deleteFunction={() => deleteHandler(testId)}
         />
         <FormContainer>
            <ButtonContainer>
               <Button
                  styled={{ fontFamily: 'Oswald' }}
                  variant="contained"
                  onClick={createTestHandler}
                  sx={{ fontFamily: 'Oswald ' }}
               >
                  + Жаңы сыноо кошуу
               </Button>
            </ButtonContainer>

            {isLoading && <Spinner />}
            {!isLoading && tests !== null && tests.length === 0 ? (
               <Typography sx={{ textAlign: 'center' }}>
                  Сынактын тизмеси бош
               </Typography>
            ) : (
               tests.map((item) => (
                  <Container key={item.id}>
                     <TitleContainer onClick={() => navigate(`${item.id}`)}>
                        <TestTitle>{item.title}</TestTitle>
                     </TitleContainer>
                     <IconsContainer>
                        <Switcher
                           checked={item.isActive}
                           onClick={() => updateIsActive(item)}
                        />
                        <MyIconButton onClick={() => goToUpdateTest(item)}>
                           <StyledEditIcon />
                        </MyIconButton>
                        <MyIconButton onClick={() => openModalHandler(item.id)}>
                           <StyledDeleteIcon />
                        </MyIconButton>
                     </IconsContainer>
                  </Container>
               ))
            )}
         </FormContainer>
      </>
   )
}

export default AdminTest

const ButtonContainer = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   marginBottom: '10px',
}))

const Container = styled(Grid)(() => ({
   display: 'flex',
   boxShadow:
      '0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)',
   padding: '24px 16px',
   borderRadius: '8px',
   '&:hover': {
      background: '#f8f8f8',
      boxShadow: '0px 0px 8px 0px rgba(34, 60, 80, 0.47)',
   },
}))

const TitleContainer = styled(Grid)(() => ({
   display: 'flex',
   alignItems: 'center',
   cursor: 'pointer',
   width: '90%',
}))

const TestTitle = styled('p')(({ theme }) => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '16px',
   lineHeight: '18px',
   color: theme.palette.primary.fontColor,
}))

const IconsContainer = styled(Grid)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '5px',
}))

const StyledEditIcon = styled(EditIcon)(({ theme }) => ({
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.skyBlue,
      },
   },
}))
const StyledDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
   '&:hover': {
      path: {
         stroke: theme.palette.secondary.main,
      },
   },
}))
