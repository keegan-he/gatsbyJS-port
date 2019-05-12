import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Keegan Helmbrecht.
        </BigTitle>
        <Subtitle>I'm a fullstack developer living in the Bay Area.  
        <br />
        <br />
        Technical Expertise:
        <br />
        Python - React.js - JavaScript (ES6) - HTML / CSS - Django - Postgres SQL - Bash - Git - Pipenv -
        React Router - FlexBox & Grid - BEM - MVC - OOP - API engineering - ORM - OOP - Static Site
        Generation - SPA (Single Page Apps) - Webpack - Test Driven Development - Bootstrap - Agile

        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Coinprice in React"
            link="https://github.com/keegan-he/react-graphing"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            React app that fetches current prices of popular
            cryptocurrencies and dynamically generates the data in bar graph form.
          </ProjectCard>
          <ProjectCard
            title="Github Search in React"
            link="https://github.com/keegan-he/git-react-search-v3"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Enter the username of your favorite github account and see all their repositories
          </ProjectCard>
          <ProjectCard
            title="Static site generator for old portfolio"
            link="https://github.com/keegan-he/2nd_refactor_ssg_site_generator"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Generate static site pages using Python's Django framework
          </ProjectCard>
          <ProjectCard
            title="Snowcrash Chaptor site"
            link="https://github.com/keegan-he/snowcrash_chapters"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Experiemental CSS site layout for the first chapter of Neal Stephenson's 'Snow Crash'.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
Hi there! :)
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        Throughout my life, I've had many varied passions and interests, usually centered around art and technology. I come from a family of creatives (painters, photographers, ceramicists, actors) so I've engaged in a number of artistic pursuits. In my school years, I worked at my local photo lab as a designer and printer. I've invested blood, sweat, and tears in my career as a dance music DJ and producer, which has spanned a good 17 years. In my spare time, I paint, hone my eye at photography and more recently, spend most of my time learning how to code. 
        <br />
        <br />
        The other (equally intense) side of me has always loved computers. I went to my first Defcon as a 13 year old, I love Linux like an old friend and took that passion into studying Information Networking, Telecommunications, and Information Security. In between studying cisco networking protocols, I cut fish and managed a seafood department at a local grocery store in Seattle. 
        <br />
        <br />
Since the days of filleting and programming routers, I now work in the Bay Area, for the art e-commerce website, Redbubble, specifically in the field of Intellectual Property and Licensing, which has its own very interesting challenges. Working with digital content at Redbubble has proven to be a very engaging marriage between technology and art and I'd like to take these passions into the next stage of my career, as I transition into becoming a developer.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/keegan-helmbrecht-11090b16/">Linkedin</a> &{' '}
            <a href="https://www.instagram.com/verbala/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Keegan Helmbrecht{' '}
          <a href="https://github.com/keegan-he">Github Repository</a>{' '}
          <a href="https://www.keeg.dev"> www.keeg.dev </a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
