import { IconBrandGithub,IconBrandTwitter,IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const About = () => {
  return (
    <div className='min-h-screen relative pt-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <div>
            <img src='https://d3qw2mvgwe85u8.cloudfront.net/uploads/nav,%20profile/profile.webp' alt="BugBicep" className='h-24 md:h-32 rounded-full' />
          </div>
          <div className='font-barlow max-w-4xl'>
            <h1 className='font-bold text-3xl md:text-4xl mb-4'>This is BugBicep.</h1>
            <p className='text-lg md:text-2xl'>We train developers the hard way. End to end. Front to back. Pixel to packet. You build systems, break them, and rebuild them stronger, faster, leaner—with someone senior reading every line you write.</p>
          </div>
        </div>

        <div className='flex flex-col items-center '>
          <div className='flex my-8 justify-center items-center font-barlow text-neutral-500 text-sm md:text-base'>
            <p>ENOUGH ABOUT US. WHY BUGBICEP?</p>
          </div>
          <div className='text-2xl md:text-4xl flex flex-col justify-center items-center text-bloodRed font-barlow font-bold space-y-4 text-center'>
            <p>You know the drill.</p>
            <p>You watch one tutorial—you feel productive. You watch ten—you've still shipped nothing.</p>
          </div>
        </div>

        <div className='flex justify-center mb-32'>
          <p className='max-w-6xl text-lg md:text-2xl text-center'>
            Courses here are not videos you nod along to. Every track is a queue of real projects with real constraints:
            a deadline, a broken codebase, a reviewer who will send it back. You ship, you get torn apart in review, you ship again.
            Eight rules, three tracks, and instructors who have carried a pager. No filler modules. No certificates for showing up.
            Just code, review, and the kind of practice that actually rewires how you think.
          </p>
        </div>

        <div className='fixed bottom-0 left-0 w-full bg-black/50  backdrop-blur-sm py-4'>
          <div className='w-full flex justify-between items-center'>
            <div className='flex items-center gap-4 text-neutral-500'>
              <div className='border w-30'></div>
              <div className='flex gap-4'>
                <a className='hover:text-white transition-colors' href="https://x.com/bugbicep" target="_blank"><IconBrandTwitter size={20}/></a>
                <a className='hover:text-white transition-colors' href="https://github.com/bugbicep" target="_blank"><IconBrandGithub size={20}/></a>
                <a className='hover:text-white transition-colors' href="https://www.linkedin.com/company/bugbicep/" target="_blank"><IconBrandLinkedin size={20}/></a>
                <a className='hover:text-white transition-colors' href="mailto:hello@bugbicep.com" target="_blank"><IconMail size={20}/></a>
              </div>
            </div>
            <p className='text-sm font-barlow text-neutral-400 px-5'>
              The first rule of BugBicep: you do not skip the fundamentals. Welcome to the work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
