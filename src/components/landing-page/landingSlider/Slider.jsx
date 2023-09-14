import React, { useState } from 'react'
import Slider from 'react-slick'
import { Grid, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { ReactComponent as Globus } from '../../../assets/icons/globus.svg'
import { ReactComponent as NextIcon } from '../../../assets/icons/nextIcon.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/prevIcon.svg'
import { ReactComponent as Pagination } from '../../../assets/icons/pagination.svg'
import { ReactComponent as ActivePagination } from '../../../assets/icons/activePagination.svg'
import SlideItem from './SliderItem'
import { textAnimation } from '../../../utils/helpers/animations'

const info = [
   {
      title: 'Айтылышы:',
      text: 'Кыргыз тилинин айтылышы регионго жараша ар кандай. Мисалы, Кыргызстандын ар кайсы аймактарында ар кандай акценттер жана диалектилер колдонулат.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FE9102',
      background: '#212629',
   },
   {
      title: 'Этникалык тарых:',
      text: 'Кыргыз тили кыргыз элинин бай тарыхы, анын ичинде миграциясы, көчмөн турмушу жана маданий мурасы менен байланышкан.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FFFFFF',
      background: '#FE9102',
   },
   {
      title: 'Пун сөздөр:',
      text: 'Кыргыз тили ойноок болушу мүмкүн, кээде сөздөр эки ача мааниге ээ же сөздөр менен ойнолуп, кызыктуу тилдик тамашаларга жана пундарга алып келиши мүмкүн.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FE9102',
      background: '#212629',
   },
   {
      title: 'Өздөштүрүүлөр:',
      text: 'Башка көптөгөн тилдер сыяктуу эле кыргыз тилинде да араб, фарсы, орус жана англис сыяктуу башка тилдерден алынган сөздөр бар.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FFFFFF',
      background: '#FE9102',
   },
   {
      title: 'Кыргыз алфавити жана шахмат:',
      text: 'Кыргыз алфавити шахмат тактасына окшош. Ал 33 тамгадан турат жана кээ бирлери шахмат тактасындагыдай ак жана кара квадраттарга ээ.',
      img: <Globus />,
      id: new Date().toISOString(),
      titleColor: '#FE9102',
      background: '#212629',
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

const LandingSlider = () => {
   const [index, setindex] = useState(0)

   const customDots = (dots) => <div>{dots}</div>

   const activePaging = (i) => {
      if (i === index) {
         return <ActivePagination />
      }
      return <Pagination />
   }

   const settings = {
      infinite: false,
      className: 'center',
      slidesToShow: 1,
      speed: 500,
      dots: true,
      appendDots: (dots) => customDots(dots),
      customPaging: (i) => activePaging(i),
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setindex(next),
   }

   return (
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.4 }}
      >
         <TitleContainer variants={textAnimation}>
            <Title>Кыргыз тили боюнча кызыктуу фактылар</Title>
         </TitleContainer>
         <Container variants={textAnimation}>
            <StyledSlider style={{ position: 'relative' }} {...settings}>
               {info.map((item, i) => (
                  <SlideItem key={item.id} item={item} prop={i === index} />
               ))}
            </StyledSlider>
         </Container>
      </motion.div>
   )
}

export default LandingSlider

const TitleContainer = styled(motion(Grid))(() => ({
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

const Container = styled(motion(Grid))(() => ({
   display: 'flex',
   justifyContent: 'center',
   '& .slick-center': {
      transition: 'all 0.3s ease',
      transform: 'scale(1.15)',
   },
   gap: '50px',
   overflow: 'hidden',
   marginBottom: '120px',
   marginTop: '30px',
   widht: '100%',
}))

const StyledSlider = styled(Slider)({
   padding: '40px',
   display: 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)',
   gridColumnStart: 1,
   gridColumnEnd: 4,
   alignItems: 'center',
   justifyItems: 'center',
   gap: '30px',
   maxHeight: '600px',

   '& .slick-track': {
      display: 'flex',
      justifyContent: 'center',
      width: '100px',
   },

   '& .slick-list': {
      width: '1050px',
      height: '740px',
   },
   '& .slick-arrow': {
      cursor: 'pointer',
      zIndex: 11,
      position: 'relative',
      top: '200px',
   },
   '& .slick-next': {
      position: 'relative',
      right: '460px',
   },
   '& .slick-prev': {
      position: 'relative',
      left: '370px',
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
      position: 'relative',
      bottom: '210px',
      right: '40px',
      gridRowStart: 2,
      gridColumn: 2,
      display: 'flex',
      justifyContent: 'center',
      listStyle: 'none',
      gap: '10px',
      alignItems: 'flex-end',
   },
})
