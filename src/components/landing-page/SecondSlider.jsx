import { Grid, Rating, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

import Slider from 'react-slick'
import avatar1 from '../../assets/images/markZuckerberg.jpg'
import elonMusk from '../../assets/images/elonMusk.jpg'
import jobs from '../../assets/images/steveJobs.jpg'
import Avatar2 from '../../assets/images/Avatar2.jpg'
import Avatar3 from '../../assets/images/Avatar3.jpg'
import Avatar4 from '../../assets/images/Avatar4.jpg'
import Avatar1 from '../../assets/images/Avatar1.jpg'
import Анна from '../../assets/images/Анна.jpg'
import NewImage from '../../assets/images/NewImage.jpg'

import { ReactComponent as NextIcon } from '../../assets/icons/nextIcon.svg'
import { ReactComponent as PrevIcon } from '../../assets/icons/prevIcon.svg'
import { ReactComponent as Pagination } from '../../assets/icons/pagination.svg'
import { ReactComponent as ActivePagination } from '../../assets/icons/activePagination.svg'

const humans = [
   {
      id: 1,
      description:
         'KyrgyzKey - Кыргыз тилин үйрөнүү үчүн укмуштуу веб-сайт. Интерфейс колдонуучуга ыңгайлуу , мазмуну кызыктуу жана интерактивдүү',
      name: 'Betty Parker',
      rating: 5,
      avatar: Avatar2,
   },
   {
      id: 2,
      description:
         'Мен кыргыз тилин үйрөнүүнү каалагандарга KyrgyzKey веб-сайтын сунуштайм. Сабактар ​​жакшы түзүлгөн жана ар кандай темаларды камтыйт.',
      name: 'Mark Zuckerberg',
      rating: 5,
      avatar: avatar1,
   },
   {
      id: 3,
      description:
         'KyrgyzKeyдин жамааттык багыты абдан сонун. Мен башка кырыгз тилин үйрөнүп жаткандар жана кыргыз тилинде эркин сүйлөгөндөр менен байланыша алам, бул мага сүйлөө , жазуу жана машыгууга жардам берет.',
      name: 'Charles Lloyd',
      rating: 5,
      avatar: Avatar4,
   },
   {
      id: 4,
      description:
         'KyrgyzKey кыргыз тилин үйрөнүүчүлөр үчүн булактардын чоң тандоосун сунуштайт. Грамматикалык көнүгүүлөрдөн лексика боюнча викториналарга чейин бардыгы бар.',
      name: 'Deanna Williams',
      rating: 5,
      avatar: Avatar3,
   },
   {
      id: 5,
      description:
         ' Мага KyrgyzKey деги аудио өзгөчөлүгү жагат, ал мага угуу жөндөмүмдү практикалоого мүмкүндүк берет. Бул түшүнүүнү жакшыртуунун сонун жолу.',
      name: 'Steve Jobs',
      rating: 5,
      avatar: jobs,
   },

   {
      id: 6,
      description:
         'Колдонмо ыңгайлуу жана колдонууга оңой. Мен басып баратып кыргыз тилин үйрөнө алам жана каалаган түзмөктөн ийгиликтеримди көрө алам.',
      name: 'James Owen',
      rating: 5,
      avatar: Avatar1,
   },
   {
      id: 7,
      description:
         'KyrgyzKey менин көнүгүүлөрүм жана баалоолорум боюнча сонун пикирлерди берет. Бул мага жакшыртууга муктаж сапаттарымды аныктоого жардам берет жана убакыттын өтүшү менен ийгиликтеримди көзөмөлдөйт.',
      name: 'Danielle Tate',
      rating: 5,
      avatar: Анна,
   },
   {
      id: 8,
      description:
         'KyrgyzKey деги окуу материалдарынын ар түрдүүлүгү мени шыктандырат . Мен эч качан машыгуудан тажабайм жана ар дайым кыйынчылыктарга даярмын.',
      name: 'Zena Na Sobe',
      rating: 5,
      avatar: NewImage,
   },
   {
      id: 9,
      description:
         'KyrgyzKey мага тил үйрөнүүдөгү максаттарымды коюп жана өзүмдүн өздөштүрүү ылдамдыгымда окуй алам, бул KyrgyzKey дин кыргыз тилин үйрөнүү үчүн ийкемдүү жана эффективдүү платформа экенин далилдейт.',
      name: 'Elon Musk',
      rating: 5,
      avatar: elonMusk,
   },
]

const PrevArrow = ({ className, style, onClick }) => {
   return (
      <PrevIcon className={className} style={{ ...style }} onClick={onClick} />
   )
}
const NextArrow = ({ className, style, onClick }) => {
   return (
      <NextIcon className={className} style={{ ...style }} onClick={onClick} />
   )
}

const SecondSlider = () => {
   const [index, setindex] = useState(0)

   const customDots = (dots) => <div>{dots}</div>

   const activePaging = (i) => {
      if (i === index) {
         return <ActivePagination />
      }
      return <Pagination />
   }

   const settings = {
      focusOnSelect: true,
      className: 'center',
      centerMode: true,
      centerPadding: 0,
      infinite: true,
      slidesToShow: 3,
      speed: 1500,
      autoplaySpeed: 2000,
      dots: true,
      appendDots: (dots) => customDots(dots),
      customPaging: (i) => activePaging(i),
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setindex(next),
   }

   return (
      <>
         <TitleContainer>
            <Title>Эмне үчүн KyrgyzKey?</Title>
         </TitleContainer>
         <Container>
            <StyledSlider {...settings}>
               {humans.map((item, i) => (
                  <UserContainer key={item.id} prop={i === index}>
                     <UserImg prop={i === index} imageUrl={item.avatar} />
                     <UserText prop={i === index}>{item.description}</UserText>
                     <UserName prop={i === index}>{item.name}</UserName>
                     <Rating value={item.rating} readOnly />
                  </UserContainer>
               ))}
            </StyledSlider>
         </Container>
      </>
   )
}

export default SecondSlider

const TitleContainer = styled(Grid)(() => ({
   marginTop: '7.5rem',
   display: 'flex',
   justifyContent: 'center',
}))

const Title = styled(Typography)(() => ({
   fontfamily: 'Gilroy',
   fontStyle: 'normal',
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
}))

const Container = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '50px',
   marginBottom: '120px',
   marginTop: '60px',
}))

const UserImg = styled('div')(({ prop, imageUrl }) => ({
   width: prop ? '80%' : '50%',
   height: prop ? '260px' : '180px',
   borderRadius: '50%',
   margin: prop ? '40px 30px' : '40px 60px',
   backgroundImage: `url(${imageUrl})`,
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
}))

const UserContainer = styled(Grid)(({ prop }) => ({
   textAlign: 'center',
   background: prop ? '#666CA7' : '',
   transition: prop ? 'all 0.5s ease' : 'all 0.5s ease',
   transform: prop ? 'scale(1.1)' : '',
   padding: prop ? '0 0 50px 0' : '0 0 50px 0',
   maxWidth: prop ? '350px' : '',
   borderRadius: prop ? '40px' : '40px',
   color: prop ? 'white' : '',
}))

const UserText = styled(Typography)(({ prop }) => ({
   textAlign: 'center',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '24px',
   color: prop ? '#fff' : '#23212A',
   padding: '0 30px',
}))

const UserName = styled(Typography)(({ prop }) => ({
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '16px',
   lineHeight: '24px',
   color: prop ? '#fff' : '#3A10E5',
   margin: '24px 0',
}))

const StyledSlider = styled(Slider)({
   padding: '0 30px',
   display: 'grid',
   gridTemplateColumns: 'repeat(3, auto)',
   gridTemplateRows: 'repeat(1, auto)',
   alignItems: 'center',
   justifyItems: 'center',
   gridAutoFlow: 'dense',

   '& .slick-slide': {
      width: '700px',
      background: '#e5e5e5',
      borderRadius: '40px',
   },

   '& .slick-track': {
      display: 'flex',
      gap: '30px',
      justifyContent: 'center',
      // width: '564px',
      alignItems: 'flex-start',
      paddingTop: '50px',
   },

   '& .slick-list': {
      width: '80%',
      height: '760px',
      overflow: 'hidden',
      padding: '50px',
   },

   '& .slick-arrow': {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      content: 'none',
      circle: {
         fill: '#3A10E5',
      },

      path: {
         fill: '#fff',
      },
   },

   '& .slick-dots': {
      gridColumn: 2,
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      gap: '10px',
      alignItems: 'flex-end',
   },
})
