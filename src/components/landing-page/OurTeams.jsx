import React from 'react'
import Marquee from 'react-fast-marquee'
import { Box, Grid } from '@mui/material'
import styled from '@emotion/styled'
import AimonVideo from '../../assets/videos/aimon.MP4'
import AnarbekVideo from '../../assets/videos/anarbek.MP4'
import EldanaVideo from '../../assets/videos/eldana.MP4'
import JypargulVideo from '../../assets/videos/jypargul.MP4'
import NiaraVideo from '../../assets/videos/niara.MP4'
import KumaVideo from '../../assets/videos/kuma.MP4'
import AdilVideo from '../../assets/videos/adil.MP4'
import BekzatVideo from '../../assets/videos/bekzat.MP4'

const partners = [
   { id: '1', video: NiaraVideo, title: 'Niara' },
   { id: '2', video: AimonVideo, title: 'Aimon' },
   { id: '3', video: AnarbekVideo, title: 'Anarbek' },
   { id: '4', video: EldanaVideo, title: 'Eldana' },
   { id: '5', video: JypargulVideo, title: 'Jypargul' },
   { id: '6', video: KumaVideo, title: 'Kutman' },
   { id: '7', video: AdilVideo, title: 'Adil' },
   { id: '8', video: BekzatVideo, title: 'Bekzat' },
]

export const OurTeams = () => {
   return (
      <Marquee speed={100} gradientWidth={0}>
         <StyledPartners>
            {partners.map((item) => (
               <PartnersCard key={item.id}>
                  <StyledVideo src={item.video} autoPlay loop muted />
                  <BoxStyle>
                     <h3>{item.title}</h3>
                  </BoxStyle>
               </PartnersCard>
            ))}
         </StyledPartners>
      </Marquee>
   )
}

const StyledVideo = styled('video')(() => ({
   width: '100%',
   height: '220px',
   objectFit: 'cover',
   borderRadius: '20px',
}))

const PartnersCard = styled(Grid)(() => ({
   width: '220px',
   borderRadius: '20px',
   padding: '0px',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   margin: '0 20px',
}))

const StyledPartners = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
}))

const BoxStyle = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   background: 'transparent',
}))
