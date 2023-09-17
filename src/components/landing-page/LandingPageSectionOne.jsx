import { keyframes, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import imageBubble from '../../assets/images/bubble.png'
import cap from '../../assets/images/cap.png'
import imageBook from '../../assets/images/books.png'
import Button from '../UI/buttons/Buttons'
import { signOut } from '../../redux/auth/auth.thunk'
import ButtonLanding from '../UI/buttons/LandingButton'

const fadeInAnimation = keyframes`
   0% {
      opacity: 0;
      transform: translateY(20px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
`

const slideInAnimation = keyframes`
   0% {
      opacity: 0;
      transform: translateY(100px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
`

const LandingPage = styled('div')(() => ({
   width: '100%',
   backgroundImage:
      'linear-gradient(to right top, #c93d7d, #c45ba0, #b976bd, #ae8ed1, #a6a4de, #979cd6, #8895ce, #788dc6, #596aad, #3e4893, #242678, #08025c)',
   animation: 'gradient-animation 1s ease infinite',
}))

const LogoAndButtonDiv = styled('div')(({ bgColor }) => ({
   position: 'fixed',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   zIndex: 1000,
   backgroundColor: bgColor ? '' : '#fff',
   padding: '20px 0',
   width: '100%',
   transition: 'background 0.5s ease',
}))

// const Logo = styled('h1')(() => ({
//    position: 'relative',
//    padding: '0 0 0 50rem',
//    fontFamily: 'Oswald',
//    fontWeight: 700,
//    fontSize: '1rem',
//    // transform: 'scaleX(1)',
// }))

const ButtonDiv = styled('div')(() => ({
   display: 'flex',
   gap: '20px',
   padding: '0 80px',
}))
const ButtonToComeIn = styled(Button)(() => ({
   padding: '13px 24px',
   fontSize: '1rem',
   letterSpacing: '0.2em',
   fontFamily: 'Oswald',
   lineHeight: '16px',
}))

const RegisterBtn = styled(Button)(() => ({
   border: 'none',
   fontSize: '1rem',
   background: '#ffffff',
   color: '#4C4C4C',
   letterSpacing: ' 0.02em',
   lineHeight: '16px',
   fontWeight: 400,
   boxShadow:
      '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
   borderRadius: '8px',
   ':hover': {
      background: '#F0EDED',
      color: '#4C4C4C',
      border: 'none',
   },
}))
// const ImgBubble = styled('div')(() => ({
//    height: '41.25rem',
//    width: '100%',
//    // mixBlendMode: 'overlay',
//    // marginTop: '-43.75rem',
//    background: 'linear-gradient(45deg,deepskyblue,darkviolet,blue)',
//    animation: 'gradient-animation 18s ease infinite',
// }))
const EnglishProficiency = styled('div')(() => ({
   width: '50%',
   margin: '0 0 30px',
   position: 'relative',
   zIndex: 1,
}))
const ProveYourEnglish = styled('h1')(() => ({
   fontFamily: 'Gilroy',
   margin: '0px',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '60px',
   lineHeight: '73px',
   color: '#fff',
   animation: `${fadeInAnimation} 1s ease-in-out`,
   WebkitTextStroke: '0.5px black',
}))
const DivInfo = styled('div')(() => ({
   fontFamily: 'Oswald',
   padding: '180px 0',
   margin: '0 0 0 4.5625rem',
   lineHeight: '73px',
   position: 'relative',
   zIndex: 1,
   animation: `${slideInAnimation} 1s ease-in-out`,
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

const TextDivInfo = styled('div')(() => ({
   width: '60%',
   margin: '0 0 2.8125rem',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '20px',
   color: '#08025c',
   lineHeight: '30px',
   textShadow: '0px 0px 1px rgba(10, 44, 100, 5)',
   animation: `${fadeInAnimation} 1s ease-in-out`,
}))

const AcademicCap = styled('img')(() => ({
   position: 'absolute',
   width: '236.09px',
   height: '243px',
   top: '189px',
   right: '25%',
   animation: `${slideInAnimation} 1s ease-in-out`,
}))

const ImageBooks = styled('img')(() => ({
   position: 'absolute',
   width: '594.78px',
   height: '390px',
   top: '293px',
   right: '0',
   animation: `${slideInAnimation} 1s ease-in-out`,
}))

const ButtonToBegin = styled('div')(() => ({
   // marginleft: '80px',
}))

const KyrgyzKeyLandingPage = styled('div')(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '10rem',
   lineHeight: '74.88px',
   color: '#C93D7D',
   textTransform: 'uppercase',
   margin: '0 0 0 -6px',
   marginBottom: '2.5rem',
}))

const LandingPageSectionOne = () => {
   const dispatch = useDispatch()
   const { isAuthorized } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const [bgColor, setBgColor] = useState(true)

   const changeColor = () => {
      if (window.scrollY) {
         setBgColor(false)
      }
      if (window.scrollY <= 80) {
         setBgColor(true)
      }
      return bgColor
   }
   useEffect(() => {
      changeColor()
      window.addEventListener('scroll', changeColor)
   })

   const goToSignInPage = () => {
      navigate('/sign-in')
   }

   const goToSignUpPage = () => {
      navigate('/sign-up')
   }

   const goToTests = () => {
      navigate('/user/tests')
   }

   const onLogOut = () => {
      dispatch(signOut())
   }

   return (
      <LandingPage>
         {/* Header */}
         <LogoAndButtonDiv bgColor={bgColor}>
            <div style={{ margin: '0 0 0 4.5625rem' }}>
               {bgColor ? (
                  ''
               ) : (
                  <KyrgyzKey>
                     Kyrgyz
                     <span
                        style={{ color: '#fff', WebkitTextStroke: '1px black' }}
                     >
                        Key
                     </span>
                  </KyrgyzKey>
               )}
            </div>
            <ButtonDiv>
               {isAuthorized ? (
                  <>
                     <Button variant="contained" onClick={onLogOut}>
                        Чыгуу
                     </Button>
                     <Button variant="contained" onClick={goToTests}>
                        Тест
                     </Button>
                  </>
               ) : (
                  <>
                     <ButtonToComeIn
                        variant="contained"
                        onClick={goToSignInPage}
                     >
                        Кирүү
                     </ButtonToComeIn>
                     <RegisterBtn variant="outlined" onClick={goToSignUpPage}>
                        Катталуу
                     </RegisterBtn>
                  </>
               )}
            </ButtonDiv>
         </LogoAndButtonDiv>

         <DivInfo id="home">
            <EnglishProficiency>
               <KyrgyzKeyLandingPage>
                  Kyrgyz
                  <span style={{ color: '#fff' }}>Key</span>
               </KyrgyzKeyLandingPage>
               <ProveYourEnglish>Кыргыз тилинин ачкычы</ProveYourEnglish>
            </EnglishProficiency>
            <TextDivInfo>
               Кыргыз тилин үйрөнүнүз - бул өлкөнүн маданият жана тарыхынына жол
               ачат
            </TextDivInfo>
            <ButtonToBegin>
               <ButtonLanding onClick={goToTests}>баштоо</ButtonLanding>
            </ButtonToBegin>
         </DivInfo>
         {/* <ImgBubble /> */}
         <AcademicCap loading="lazy" src={cap} />
         <ImageBooks loading="lazy" src={imageBook} />
      </LandingPage>
   )
}

export default LandingPageSectionOne
