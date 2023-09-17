import { Box, Grid, Typography, keyframes, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ReactComponent as Roadmap } from '../../assets/icons/roadmap.svg'
import { ReactComponent as Icon1 } from '../../assets/icons/globe.svg'
import { ReactComponent as Icon2 } from '../../assets/icons/research.svg'
import { ReactComponent as Icon3 } from '../../assets/icons/thirdicon.svg'
import { ReactComponent as Icon4 } from '../../assets/icons/dashboard.svg'
import { ReactComponent as Icon5 } from '../../assets/icons/img-secure-design.svg'
import { animation, textAnimation } from '../../utils/helpers/animations'
import ButtonLanding from '../UI/buttons/LandingButton'

const dash = keyframes`
        to  {
          stroke-dashoffset: 0;  
        } from {
          stroke-dashoffset: 300;
        }
      `

const infoAnimation = {
   hidden: {
      opacity: 0,
      x: -500,
   },
   visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.3 },
      visibility: true,
   }),
}

const secondInfoAnimation = {
   hidden: {
      opacity: 0,
      x: 400,
   },
   visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.2 },
   }),
}

const LearnMore = () => {
   const navigate = useNavigate()

   const goToTests = () => {
      navigate('/user/')
   }

   return (
      <Background>
         <Contain>
            <TitleContainer
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
               variants={textAnimation}
            >
               <Title>KyrgyzKey аркылуу</Title>
            </TitleContainer>
            <StyledIcon />
            <Container
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <motion.div variants={infoAnimation}>
                  <Title1>Кыргыз тилинде эркин суйлонуз</Title1>
                  <Text1>
                     KyrgyzKey аркылуу кыргыз тилин уйронунуз
                     <br />
                     жана кыргыз маданияты менен таанышыныз
                  </Text1>
               </motion.div>

               <StyledGlobusIcon
                  variants={animation}
                  custom={0.7}
                  style={{ position: 'relative', zIndex: 1 }}
               />
            </Container>
            <Container1
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <StyledResearchIcon
                  variants={animation}
                  custom={0.7}
                  style={{
                     position: 'relative',
                     zIndex: 1,
                     marginLeft: '300px',
                  }}
               />
               <BoxStyleSecond>
                  <motion.div
                     style={{ overflow: 'hidden' }}
                     variants={secondInfoAnimation}
                  >
                     <Title2>Өз билимиңизди текшересиз</Title2>
                     <Text2>
                        KyrgyzKey ден жазылган тест аркылуу
                        <br />
                        өз билимиңизди текшерүүгө мүмкүнчүлүк бар
                     </Text2>
                  </motion.div>
               </BoxStyleSecond>
            </Container1>
            <Container2
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <BoxThird>
                  <motion.div variants={infoAnimation}>
                     <Title1>Тарыхы</Title1>
                     <Text1>
                        Байыркы тилдин келип чыккан тарыхы боюнча маалымат
                        аласыз
                     </Text1>
                  </motion.div>
               </BoxThird>
               <StyledSecuryIcon
                  variants={animation}
                  custom={0.7}
                  style={{ position: 'relative', zIndex: 1 }}
               />
            </Container2>
            <Container3
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <StyledDashboardIcon
                  variants={animation}
                  custom={0.7}
                  style={{
                     position: 'relative',
                     zIndex: 1,
                  }}
               />
               <BoxStyledFourth>
                  <motion.div variants={secondInfoAnimation}>
                     <Title2>Эффективдүү натыйжалар </Title2>
                     <Text2>Сизден каало - бизден натыйжа</Text2>
                  </motion.div>
               </BoxStyledFourth>
            </Container3>
            <Container4
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <Box>
                  <motion.div variants={infoAnimation}>
                     <Title1>Элдин маданияты</Title1>
                     <Text1>
                        Кыргыз элини маданияты тууралуу маалымат ала аласыз
                     </Text1>
                  </motion.div>
               </Box>
               <StyledDesignIcon
                  variants={animation}
                  custom={0.7}
                  style={{ position: 'relative', zIndex: 1 }}
               />
            </Container4>
            <StyledButton
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
               variants={textAnimation}
            >
               <ButtonLanding onClick={goToTests}>Баштоо</ButtonLanding>
            </StyledButton>
         </Contain>
      </Background>
   )
}
export default LearnMore

const Background = styled(motion(Grid))(() => ({
   fontFamily: 'Oswald',
   width: '100%',
   zIndex: '-2',
}))
const Contain = styled(Grid)(() => ({
   display: 'flex',
   margin: '0 auto',
   flexDirection: 'column',
   padding: '0 80px',
   fontFamily: 'Oswald',
}))

const TitleContainer = styled(motion(Grid))(() => ({
   textAlign: 'center',
}))

const Title = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))

const StyledIcon = styled(Roadmap)(() => ({
   position: 'absolute',
   zIndex: '1',
   left: '0',
   right: '0',
   margin: '107px auto',
   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },
}))

const StyledGlobusIcon = styled(motion(Icon1))(() => ({}))
const StyledResearchIcon = styled(motion(Icon2))(() => ({}))
const StyledSecuryIcon = styled(motion(Icon3))(() => ({}))
const StyledDashboardIcon = styled(motion(Icon4))(() => ({}))
const StyledDesignIcon = styled(motion(Icon5))(() => ({}))

const Title1 = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontWeight: 600,
   fontSize: '24px',
   lineHeight: '36px',
   color: '#23212A',
   marginBottom: '16px',
}))

const Text1 = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '24px',
   color: '#23212A',
}))

const Title2 = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '24px',
   lineHeight: '120%',
   color: '#23212A',
   marginBottom: '16px',
}))

const Text2 = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '24px',
   color: '#23212A',
}))
const Container = styled(motion(Grid))(() => ({
   fontFamily: 'Oswald',
   maxWidth: '70%',
   display: 'flex',
   marginTop: '78px',
   alignItems: 'center',
   gap: '11rem',
}))
const Container1 = styled(motion(Grid))(() => ({
   maxWidth: '100%',
   display: 'flex',
   marginTop: '264px',
   justifyContent: 'flex-end',
   gap: '5rem',
   alignItems: 'center',
   overflow: 'hidden',
}))
const Container2 = styled(motion(Grid))(() => ({
   maxWidth: '70%',
   display: 'flex',
   marginTop: '96px',
   gap: '160px',
   alignItems: 'center',
}))
const Container3 = styled(motion(Grid))(() => ({
   maxWidth: '100%',
   display: 'flex',
   marginTop: '150px',
   gap: '17rem',
   justifyContent: 'flex-end',
   alignItems: 'center',
   overflow: 'hidden',
}))
const Container4 = styled(motion(Grid))(() => ({
   maxWidth: '70%',
   display: 'flex',
   marginTop: '190px',
   gap: '162px',
   alignItems: 'center',
}))

const StyledButton = styled(motion(Grid))(() => ({
   marginTop: '139px',
   display: 'flex',
   justifyContent: 'center',
}))

const BoxStyleSecond = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'flex-start',
   width: '30%',
}))

const BoxThird = styled(Box)(() => ({
   display: 'flex',
}))

const BoxStyledFourth = styled(Box)(() => ({
   display: 'flex',
   width: '40%',
}))
