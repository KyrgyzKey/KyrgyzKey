import { Grid, Typography, keyframes, styled } from '@mui/material'
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
               <Title>Көбүрөөк билүү</Title>
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
               <motion.div
                  style={{ overflow: 'hidden' }}
                  variants={secondInfoAnimation}
               >
                  <Title2>
                     Кыргыз тили кафедрасынын курамынын негизинде жасалган
                  </Title2>
                  <Text2>
                     KyrgyzKey аркылуу кыргыз тилин үйрөнүү үчүн жана кыргыз
                     маданиятын изилдөө үчүн
                     <br />
                     тестирлөө болот.
                  </Text2>
               </motion.div>
            </Container1>
            <Container2
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <motion.div variants={infoAnimation}>
                  <Title1>Инновациялык тест коопсуздугу</Title1>
                  <Text1>
                     Компьютердик адаптивдик технология алдамчылыктын алдын
                     алууга жардам берет жана
                     <br />
                     алдоо жана ишене ала турган натыйжаларды камсыз кылат.
                  </Text1>
               </motion.div>
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
               <motion.div variants={secondInfoAnimation}>
                  <Title2>Ыңгайлуу натыйжалар тактасы</Title2>
                  <Text2>
                     Талапкерлердин сертификаттарына, видео маектерине жана
                     жазуу
                     <br />
                     үлгүлөрдү акысыз жана коопсуз башкаруу тактасы аркылуу
                     <br /> колдонуучунун берүүчүнүн маалыматтарын оңой көрүү.
                  </Text2>
               </motion.div>
            </Container3>
            <Container4
               initial="hidden"
               whileInView="visible"
               viewport={{ amount: 0.5 }}
            >
               <motion.div variants={infoAnimation}>
                  <Title1>Ыңгайлуу дизайн</Title1>
                  <Text1>
                     Адаптивдүү тестирлөө системасы динамикалык түрдө тест
                     суроолорун берет.
                  </Text1>
               </motion.div>
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
   fontFamily: 'Oswald',
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
