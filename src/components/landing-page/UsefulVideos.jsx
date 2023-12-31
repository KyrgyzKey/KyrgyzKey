import { Grid, Typography, styled } from '@mui/material'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion'
import video1 from '../../assets/videos/video1.MP4'
import video2 from '../../assets/videos/video2.MP4'
import video3 from '../../assets/videos/video3.MP4'
import poster from '../../assets/images/poster.jpg'
import { textAnimation } from '../../utils/helpers/animations'

const videos = [
   {
      id: 1,
      poster,
      video: video1,
      title: 'Кыргыз тилин үйрөнүү кеңештери',
   },
   {
      id: 2,
      poster,
      video: video2,
      title: 'Башталгычтар учун',
   },
   {
      id: 3,
      poster,
      video: video3,
      title: 'Тилди үйрөнүү жолу',
   },
]

const videosAnimation = {
   hidden: {
      opacity: 0,
      y: 100,
   },
   visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
   }),
}

const UsefulVideos = () => {
   return (
      <Container
         initial="hidden"
         whileInView="visible"
         viewport={{ amount: 0.4 }}
      >
         <FirstSection>
            <TitleContainer variants={textAnimation}>
               <Title> Пайдалуу маалыматтар </Title>
            </TitleContainer>
            <SecondSection>
               {videos.map((item) => {
                  return (
                     <VideoContainer
                        key={item.id}
                        variants={videosAnimation}
                        custom={item.id}
                     >
                        <StyledVideo
                           controle={[
                              'PlayPause',
                              'Seek',
                              'Time',
                              'Volume',
                              'FullScreen',
                           ]}
                           poster={item.poster}
                        >
                           <source src={item.video} type="video/webm" />
                        </StyledVideo>

                        <VideoTitle>{item.title}</VideoTitle>
                     </VideoContainer>
                  )
               })}
            </SecondSection>
         </FirstSection>
      </Container>
   )
}

export default UsefulVideos

const Container = styled(motion(Grid))(() => ({
   background: '#F0F0DC',
   fontFamily: 'Oswald',
}))

const FirstSection = styled(Grid)(() => ({
   display: 'flex',
   margin: '0 auto',
   flexDirection: 'column',
   fontFamily: 'Oswald',
}))

const TitleContainer = styled(motion(Grid))(() => ({
   textAlign: 'center',
}))

const Title = styled(Typography)(() => ({
   fontWeight: 700,
   fontSize: '40px',
   lineHeight: '48px',
   color: '#3752B4',
   marginTop: '138px',
}))
const SecondSection = styled(Grid)(() => ({
   display: 'flex',
   justifyContent: 'space-evenly',
   alignItems: 'center',
   flexWrap: 'wrap',
   marginBottom: '120px',
   marginTop: '48px',
}))
const StyledVideo = styled(Video)(() => ({
   borderRadius: '16px 16px 0px 0px',
   marginBottom: -7,
   width: '370px',
   height: '261px',
}))

const VideoContainer = styled(motion(Grid))(() => ({
   background: '#FFFFFF',
   border: '1px solid #DDDDDD',
   borderRadius: '16px',
   transform: 'matrix(1, 0, 0, 1, 0, 0)',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
}))
const VideoTitle = styled(Typography)(() => ({
   fontFamily: 'Oswald',
   fontWeight: 700,
   fontSize: '20px',
   lineHeight: '24px',
   color: '#3A10E5',
   margin: '0 auto',
   marginTop: '20px',
   marginBottom: '20px',
}))
