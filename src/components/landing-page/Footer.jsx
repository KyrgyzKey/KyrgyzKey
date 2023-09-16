import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
   styled,
} from '@mui/material'
import React from 'react'
import { ReactComponent as YouTube } from '../../assets/icons/youTube.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'

const FAQ = [
   {
      question: 'Эмне үчүн KyrgyzKey?',
      text: 'Биздин платформа колдонуучулар учун ыңгайлуу, жеткиликтуу жана сиздердин талаптарыңызга ыңгайлуу жаңыланып турат',
   },
   {
      question: 'Проекттин негизги багыты эмнеде?',
      text: 'Кыргыз тилин өнүктүрүү жана анын маданият тарыхын кененирээк жайылтуу.',
   },
   {
      question: 'Тест учурунда эмне учун микрофон керек?',
      text: 'Биз кыргыз тилинин бир гана жазылышына эмес, айтылышына да маани беребиз. Ошондуктан микрофонду жандырып суйлөөгө туура келет',
   },
   {
      question: 'Тестти өзүм түзсөм болобу?',
      text: 'Жок, бир гана даяр суроолорго жооп бере аласыз. Бирок келе жаткан жаңылоодо бул функцияны кошуп бере алабыз',
   },
]

const Footer = () => {
   return (
      <StyledFooter>
         <div>
            <div>
               <StyledTitle>көп берилүүчү суроолор:</StyledTitle>
            </div>
            {FAQ.map((item) => (
               <MuiAccordion disableGutters key={item.question}>
                  <MuiAccordionSummary
                     expandIcon={<PlusIcon sx={{ fontSize: '0.9rem' }} />}
                  >
                     <Question>{item.question}</Question>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                     <Typography>{item.text}</Typography>
                  </MuiAccordionDetails>
               </MuiAccordion>
            ))}
            <Logos>
               <SocialNetwork>
                  <a href="https://youtube.com/@Bilingua.education">
                     <YouTube />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100093794987413">
                     <Facebook />
                  </a>
                  <a href="https://www.instagram.com/bilingual.education.kg/">
                     <Instagram />
                  </a>
               </SocialNetwork>
            </Logos>
            <Copyright>
               <Typography>
                  © Copyright KyrgyzKey. All Rights Reserved
               </Typography>
            </Copyright>
         </div>
      </StyledFooter>
   )
}

export default Footer

const StyledFooter = styled('footer')(() => ({
   backgroundColor: '#262626',
   color: '#fff',
   padding: '60px 110px 12px',
   margin: '120px 0 0 0',
}))

const StyledTitle = styled(Typography)(() => ({
   fontFamily: 'Open Sans',
   fontWeight: 700,
   letterSpacing: '3px',
   fontSize: '40px',
   lineHeight: '51px',
   borderBottom: '1px solid #4a4a4a',
   paddingBottom: '38px',
}))

const MuiAccordion = styled(Accordion)(() => ({
   backgroundColor: '#262626',
   color: '#fff',
   borderBottom: '1px solid #4a4a4a',
   boxShadow: 'none',
   borderRadius: 'none',
   padding: '14px 0',
}))

const MuiAccordionSummary = styled(AccordionSummary)(() => ({
   padding: '0',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(45deg)',
   },
}))

const MuiAccordionDetails = styled(AccordionDetails)({
   padding: '0',
})

const Question = styled(Typography)(() => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 600,
   fontSize: '20px',
   lineHeight: '40px',
}))

const Logos = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '90px',
}))

const SocialNetwork = styled('div')(() => ({
   display: 'flex',
   gap: '16px',
   alignItems: 'center',
   marginBottom: '48px',
}))

const Copyright = styled('div')(() => ({
   textAlign: 'center',
   color: '#98A2B3',
}))
