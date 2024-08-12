import { Box, Typography } from '@mui/material';

import portfolioImg from 'assets/portfolio/portfolio-img.jpg';

import availLogo from 'assets/portfolio/Avail.png';
import butterfliexLogo from 'assets/portfolio/Butterfliex.png';
import branchLogo from 'assets/portfolio/Branch.png';
import empowaLogo from 'assets/portfolio/Empowa.png';
import move9jaLogo from 'assets/portfolio/Move9ja.png';
import ecostackLogo from 'assets/portfolio/Ecostack.png';
import motion365 from 'assets/portfolio/Motion365.png';
import ffcLogo from 'assets/portfolio/ffc.png';

import upNepaLogo from 'assets/upnepa-green.svg';

const Portfolio = () => {
  const ARTICLES = [
    {
      title: 'Tokens Auth and Testing in React',
      link: '',
    },
    {
      title: 'My thoughts in freelance vs Fulltime Dev',
      link: '',
    },
    {
      title: 'Dealing with failed startups',
    },
  ];

  const PROJECTS = [
    {
      icon: availLogo,
      title: 'Avail',
      role: 'Software Dev.',
      description:
        'Built the Mobile, Web and desktop for Security and privacy in the Aleo space. I was critical to the release of funds from our investor as I built various features which signified mile stones',
      link: 'https://avail.global/',
    },
    {
      icon: butterfliexLogo,
      title: 'Butterfliex',
      role: 'Product Development',
      link: 'https://butterfliex.com/',
      description:
        'The product owner handed over everything to me, I hired, interviewed and recruited team to build a P2P trading platform for Nigerians. The entire infrastructure was built in 3 months and launched. I the team lead over the entire product development.',
    },
    {
      icon: branchLogo,
      title: 'Branch',
      role: 'Product Development',
      link: 'http://branchaccounts.com/',
      description:
        'This is an inventory management software for businesses based in the UK, I spent 9 months plus building the product to live, revamping, designing and co-managed the entire development workflow.',
    },
    {
      icon: empowaLogo,
      title: 'Empowa',
      role: 'Product Development',
      link: 'https://empowa.io/',
      description:
        'Empowa is an affordable housing solution built on top of Cardano to make affordable housing in africa accessible, I played crucial roles in the development of the NFT sales which had about 1000 sales and as well built a project management solution called Empowa pay.',
    },
    {
      icon: move9jaLogo,
      title: 'Move9ja',
      role: 'Product Development',
      link: 'https://move9ja.com/',
      description:
        'Easily book bus tickets from multiple parks across your city. Our service allows you to choose your preferred departure location, compare prices, and secure your seat with just a few clicks. Experience hassle-free travel planning with our streamlined booking system.',
    },
    {
      icon: ecostackLogo,
      title: 'Ecostack',
      role: 'Product Development',
      link: 'https://ecostackgroup.com/',
      description:
        'I co-built the Carbon Capture accounting software. On Ecostack, you can offset carbon emissions through verified green projects. We take each project through a rigorous verification process, which involves global auditors, accurate carbon accounting and physical visitations guaranteeing the quality and integrity of every initiative.',
    },
    {
      icon: 'https://framerusercontent.com/images/YMm3MYG2KQQGMxZszMmTMpBxT6M.webp',
      title: 'Nazza',
      role: 'Product Development',
      link: 'https://mynazza.com/',
      description:
        'I built the V1 of Nazza a crypto based wallet solution, I built the website, admin and web app during my stay at the company, it is one of the products I am really proud of.',
    },
    {
      icon: motion365,
      title: 'Motion365',
      role: 'Product Development',
      link: 'https://motion365ads.com/',
      description:
        'I built the Website, Advertisers, Admin and Super Admin of Motion 365. Motion 365 is a ride hailing advertising platforms that enables commercial drivers make profit off advertising.',
    },
    {
      icon: ffcLogo,
      title: 'Fin. Fitness Clinic',
      role: 'Product Management',
      link: 'https://ffc.com.ng/',
      description:
        'I wore the hat of a Product Manager here, I ensured delivery of digital products, one product I am really proud to deliver was the Learning Management System, that enables student to buy courses and as well learn on the platform, take quiz and view their scores.',
    },
  ];

  const STUFF_ICAN_HELP_WITH = [
    {
      title: 'Product Development',
      description:
        'I excel in guiding and nurturing teams within environments that promote creativity and productivity. By offering strategic insights, I empower teams to take ownership of their decisions and efficiently address customer and business requirements in product development.',
    },
    {
      title: 'Fullstack Software Engineering',
      description:
        'My expertise lies in mentoring and leading teams in dynamic settings that foster innovation. I provide strategic direction to help teams independently navigate decision-making processes and effectively meet the demands of fullstack software engineering.',
    },
    {
      title: 'Business Leadership',
      description:
        "I bridge the gap between developers and business stakeholders, working closely with engineering leaders to create a development process that aligns with the organization's culture. My leadership style ensures a cohesive and efficient business environment.",
    },
    {
      title: 'MVP Development',
      description:
        "I understand the challenges faced by developers and business stakeholders, and I partner with engineering leaders to establish a development framework that reflects the organization's culture. My focus is on delivering a minimum viable product that meets core business objectives.",
    },
  ];

  return (
    <Box>
      <Box
        display='flex'
        // alignItems='center'
        justifyContent='center'
        flexDirection='column'
        // height='auto'
      >
        <Box
          px={{ xs: 5, md: '20%' }}
          borderBottom='1px solid rgba(0, 0, 0, 0.08)'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          py={3}
        >
          <Typography>Chibueze - Nyerishi</Typography>
          <Typography
            paddingX='15px'
            borderRadius='8px'
            bgcolor='rgb(242, 242, 242)'
            py={1}
          >
            Resume 📇 - Coming Soon!
          </Typography>
        </Box>
        <Box px={{ xs: 5, md: '20%' }} py={{ md: 12, xs: 4 }}>
          <Box
            component='img'
            style={{
              borderRadius: '50%',
              //filter: "grayscale(100%)",
            }}
            sx={{
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'ease-in-out 0.2s',
                filter: 'grayscale(100%)',
              },
            }}
            src={portfolioImg}
            alt='portfolio'
            width='150px'
          />
          <Typography
            alignItems='center'
            fontSize={{ xs: '38px', md: '60px' }}
            fontWeight={700}
            letterSpacing={-2.1}
            lineHeight={{ xs: '50px', md: '60px' }}
          >
            Product Executive, MVP Developer, Software Engineer –{' '}
            <span style={{ opacity: '50%' }}>Chibueze</span>
          </Typography>
          <Typography fontSize='18px' mt={2}>
            I am a Product aficionado, with 4 years of professional experience,
            I've actively been involved in using digital tools to solve business
            needs. I work with teams (sometimes independently) to build
            functional digital experiences, I am high on optimal delivery and
            making sure launch to production and post production is successful.
            I have knowledge of wide range of technology and digital tools to
            drive business success.
          </Typography>
        </Box>
      </Box>

      <Box
        px={{ xs: 5, md: '20%' }}
        //   bgcolor='rgb(242, 242, 242)'
        py={5}
      >
        <Typography
          fontSize={{ xs: '38px', md: '60px' }}
          fontWeight={700}
          letterSpacing={-2.1}
          lineHeight={{ xs: '50px', md: '60px' }}
          sx={{ opacity: '50%' }}
          mb={6}
        >
          Live Projects
        </Typography>
        <Box
          display='grid'
          gridTemplateColumns={{ md: '1fr 1fr 1fr', xs: '1fr' }}
          gap={5}
        >
          {PROJECTS.map(({ icon, title, description, role, link }) => {
            return (
              <Box key={title}>
                <img src={icon} width='50px' alt='icon' />

                <Typography fontSize='20px' fontWeight={600}>
                  {title}
                </Typography>
                <Typography
                  my={1}
                  px={1}
                  py={0.5}
                  sx={{
                    //border: "0.2px solid #000",
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    fontSize: '12px',
                    background: '#f7f7f7',
                    color: 'rgb(173, 173, 173)',
                  }}
                  width='max-content'
                  // bgcolor='#f7f7f7'
                >
                  <span>
                    {/* Role -{" "} */}
                    <span style={{ color: '#000' }}>{role}</span>{' '}
                  </span>
                </Typography>
                <Typography color='rgb(117, 117, 117)' fontSize='14px'>
                  {description}
                </Typography>
                <Typography
                  component='a'
                  href={link}
                  target='_blank'
                  sx={{
                    textDecoration: 'underline',
                    mt: 4,
                    color: 'inherit',
                  }}
                >
                  Live link
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* <Box bgcolor='#f5f4ef' color='#383838' px={{ xs: 5, md: "20%" }} py={8}>
        <Typography
          fontSize={{ xs: "38px", md: "60px" }}
          fontWeight={700}
          letterSpacing={-2.1}
          lineHeight={{ xs: "50px", md: "60px" }}
          mb={5}
        >
          My thoughts
        </Typography>
        <Box
          display='grid'
          gap={4}
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
        >
          {[...ARTICLES, ...ARTICLES, ...ARTICLES].map(({ title, link }) => (
            <Box borderBottom='1px dashed #d7d7d7' pb={2} mb={2}>
              <Typography
                border='0.5px solid black'
                borderRadius='2rem'
                width='max-content'
                p={1}
                fontSize='0.6rem'
                textTransform='uppercase'
              >
                Articles
              </Typography>
              <Typography fontSize='24px'>{title}</Typography>
            </Box>
          ))}
        </Box>
      </Box> */}

      <div className='marquee-container'>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <div className='content-wrapper'>
            <p>Product Development</p>
            <p>Software Engineering</p>
            <p>MVP Development</p>
            <p>Leadership</p>
            <p>Blockchain</p>
            <p>React</p>
            <p>Notion</p>
            <p>Fullstack Development</p>
            <p>Node JS</p>
            <p>Design</p>
          </div>
        ))}
      </div>

      <Box bgcolor='rgb(242, 242, 242)' px={{ xs: 5, md: '20%' }} py={8}>
        <Typography
          fontSize={{ xs: '38px', md: '60px' }}
          fontWeight={700}
          letterSpacing={-2.1}
          lineHeight={{ xs: '50px', md: '60px' }}
          mb={5}
        >
          Personal Case study
        </Typography>
        <Box
          display='flex'
          alignItems='center'
          gap={10}
          justifyContent='space-between'
          flexDirection={{ md: 'row', xs: 'column' }}
        >
          <Box width={{ md: '50%', xs: '100%' }}>
            <img src={upNepaLogo} width='200px' alt='upnepa-logo' />
            <Typography mt={1}>
              UpNepa is an online electricity bill payment, that allows you to
              pay for your electricity bills in a fun and exciting way.
            </Typography>
            <Typography
              paddingX='15px'
              borderRadius='8px'
              bgcolor='rgb(242, 242, 242)'
              width='max-content'
              py={1}
              mt={1}
            >
              Live Link
            </Typography>
          </Box>
          <Typography fontSize='18px' width={{ md: '50%', xs: '100%' }}>
            "I personally believe that what makes a Product leader stand out is
            having a personal product, where the leader is able to be a
            stakeholder for himself, understands where it bites and of course
            using his product as an experimental ground to learn more."
          </Typography>
        </Box>
      </Box>

      <Box bgcolor='#000' px={{ xs: 5, md: '20%' }} py={10} color='#fff'>
        <Typography
          fontSize={{ xs: '38px', md: '60px' }}
          fontWeight={700}
          letterSpacing={-2.1}
          lineHeight={{ xs: '50px', md: '60px' }}
          mb={8}
        >
          I can help you get the best out of product development, tech, and
          leadership.
        </Typography>
        <Box
          display='grid'
          gridTemplateColumns={{ md: '1fr 1fr', xs: '1fr' }}
          gap={3}
        >
          {STUFF_ICAN_HELP_WITH.map(({ title, description }) => {
            return (
              <Box bgcolor='#1b1d1f' width='100%' p={2} key={title}>
                <Typography
                  color='#fff'
                  fontSize='25px'
                  mb={2}
                  fontWeight={700}
                >
                  {title}
                </Typography>
                <Typography>{description}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box bgcolor='#000' py={12}>
        <Typography
          color='#fff'
          textAlign='center'
          fontSize={{ md: '82px', xs: '72px' }}
          fontWeight={700}
          lineHeight={{ xs: '60px', md: '90px' }}
        >
          Let's work <br /> together!
        </Typography>

        <Box textAlign='center' mt={6}>
          <a
            style={{
              color: '#fff',
              marginLeft: '15px',
            }}
            href='https://www.linkedin.com/in/chibueze-sam-obisike/'
            rel='noreferrer'
            target='_blank'
          >
            Linkedin
          </a>
          <a
            style={{ color: '#fff', marginLeft: '15px' }}
            rel='noreferrer'
            target='_blank'
            href='https://github.com/chibuezesamobisike'
          >
            Github
          </a>
          <a
            style={{ color: '#fff', marginLeft: '15px' }}
            rel='noreferrer'
            target='_blank'
            href='https://www.behance.net/chibuezsam-obi'
          >
            Behance
          </a>
        </Box>
        <Box>
          <Typography textAlign='center' color='#fff' mt={3}>
            samobisike@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
