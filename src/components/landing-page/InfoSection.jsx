import { React, useState } from 'react'
import { styled } from '@mui/material'
import { motion } from 'framer-motion'
import ScrollTrigger from 'react-scroll-trigger'
import { textAnimation } from '../../utils/helpers/animations'
import accessible from '../../assets/images/accessible.png'
import speech from '../../assets/images/speech.png'
import extensive from '../../assets/images/extensive.png'
import tutoring from '../../assets/images/tutoring.png'
// import booksBackground from '../../assets/icons/background.svg'
// import bookImg from '../../assets/icons/bookImg.svg'
// import learnImg from '../../assets/icons/learnImg.svg'
// import readingImg from '../../assets/icons/reading.svg'
import yourtaImg from '../../assets/images/edication.svg'

import InfoSectionOne from './InfoSectionOne'
import { OurTeams } from './OurTeams'

const Card = styled('div')(() => ({
   width: '100%',
   paddingTop: '120px',
   paddingBottom: '120px',
   background: '#f0f0dc',
}))

const Description = styled('div')(() => ({
   height: ' 437px',
   marginLeft: '110px',
   marginTop: '120px',
   display: 'flex',
   justifyContent: 'space-between',
   marginBottom: '121.39px',
}))

const UserExpiriance = styled('div')(() => ({
   fontFamily: 'Gilroy',
   fontSize: '40px',
   fontWeight: 700,
   lineHeight: '48px',
   textAlign: 'left',
   width: '21.125rem',
   color: '#3752B4',
}))

const DescriptionText = styled('div')(() => ({
   width: '90%',
   marginTop: '34px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   lineHeight: '24px',
   color: '#23212A',
}))

const ImgAccessible = styled('img')(() => ({
   width: ' 44.12px',
   height: '50px',
}))

const ImgAccessibleText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '22px',
   color: '#23212A',
}))

const DivAccessible = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '40px',
}))

const ImgSpeech = styled('img')(() => ({
   width: '39px',
   height: '50px',
}))

const ImgSpeechText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: ' 140%',
   color: '#23212A',
}))

const DivSpeech = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '48.98px',
}))

const ImgExtensive = styled('img')(() => ({
   width: ' 54.44px',
   height: ' 50px',
}))

const ImgExtensiveText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '140%',
   color: '#23212A',
}))

const DivExtensive = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '40px',
}))

const ImgTutoring = styled('img')(() => ({
   width: ' 55.56px',
   height: '50px',
}))

const TutoringText = styled('div')(() => ({
   width: '160px',
   height: '44px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '16px',
   lineHeight: '140%',
   color: '#23212A',
}))

const DivTutoring = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '48.98px',
}))

const ImgAnimation = styled('img')(() => ({
   width: '40rem',
   height: '40rem',
}))
const DivSeparation = styled('div')(() => ({
   display: 'flex',
   gap: '67.88px',
}))
const OurTeam = styled(motion.div)(() => ({
   height: '335px',
   display: 'grid',
   justifyItems: 'center',
}))

const TextOurTeam = styled(motion.div)(() => ({
   fontFamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: ' 130%',
   textTransform: 'capitalize',
   color: '#3752B4',
}))

const InfoSection = () => {
   const [count, setCountOn] = useState(false)

   return (
      <Card>
         <ScrollTrigger
            onEnter={() => setCountOn(true)}
            onExit={() => setCountOn(false)}
         >
            <InfoSectionOne count={count} />
         </ScrollTrigger>
         <Description>
            <div>
               <UserExpiriance>Теңдешсиз колдонуучу тажрыйбасы</UserExpiriance>
               <DescriptionText>
                  Тилди өркүндөтүүнүн эң эффективдүү жолу – бул тилге кызыгуу.
                  Ар бир окуучу өз графигине жана тил үйрөнүү максаттарына
                  ылайыктуу түрдө өз алдынча окуу менен кошумча онлайн тарбиячы
                  тең салмактуулукка ээ болуу мүмкүнчүлүгүнө ээ.
               </DescriptionText>
               <DivSeparation>
                  <DivAccessible>
                     <ImgAccessible src={accessible} />
                     <ImgAccessibleText>
                        Каалаган жерде жеткиликтуу
                     </ImgAccessibleText>
                  </DivAccessible>
                  <DivExtensive>
                     <ImgExtensive src={extensive} />
                     <ImgExtensiveText>Кеңири бизнес мазмуну</ImgExtensiveText>
                  </DivExtensive>
               </DivSeparation>
               <DivSeparation>
                  <DivSpeech>
                     <ImgSpeech src={speech} />
                     <ImgSpeechText>Алдыңкы кепти таануу</ImgSpeechText>
                  </DivSpeech>
                  <DivTutoring>
                     <ImgTutoring src={tutoring} />
                     <TutoringText>Чексиз жандуу окутуу</TutoringText>
                  </DivTutoring>
               </DivSeparation>
            </div>
            <ImgAnimation src={yourtaImg} alt="" />
         </Description>
         <OurTeam
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
         >
            <TextOurTeam variants={textAnimation}>Биздин курам</TextOurTeam>
            <OurTeams />
         </OurTeam>
      </Card>
   )
}

export default InfoSection
