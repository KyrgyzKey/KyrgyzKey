import React from 'react'
import Marquee from 'react-fast-marquee'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import AimonVideo from '../../assets/videos/aimon.MP4'
import AnarbekVideo from '../../assets/videos/anarbek.MP4'
import EldanaVideo from '../../assets/videos/eldana.MP4'
import JypargulVideo from '../../assets/videos/jypargul.MP4'
import NiaraVideo from '../../assets/videos/niara.MP4'
import KumaVideo from '../../assets/videos/kuma.MP4'
import AdilVideo from '../../assets/videos/adil.MP4'
import BekzatVideo from '../../assets/videos/bekzat.MP4'
import Trix from '../../assets/videos/trix.MP4'

const partners = [
   { id: '1', video: NiaraVideo },
   { id: '2', video: AimonVideo },
   { id: '3', video: AnarbekVideo },
   { id: '4', video: EldanaVideo },
   { id: '5', video: JypargulVideo },
   { id: '6', video: KumaVideo },
   { id: '7', video: AdilVideo },
   { id: '8', video: BekzatVideo },
   { id: '9', video: Trix },
]

export const OurTeams = () => {
   return (
      <Marquee speed={100} gradientWidth={0}>
         <StyledPartners>
            {partners.map((item) => (
               <PartnersCard key={item.id}>
                  <StyledVideo src={item.video} autoPlay loop muted />
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
   width: '200px',
   height: '220px',
   background: '#ffffff',
   border: '1px solid #e4e4e4',
   borderRadius: '20px',
   padding: '0px 0px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   margin: '0 20px',
}))

const StyledPartners = styled(Grid)(() => ({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
}))
