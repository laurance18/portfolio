import pers_photo from '../assets/pers_photo.jpg'

export default function About() {
    return (
        <div class="py-16 bg-primary">  
            <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div class="md:5/12 lg:w-5/12">
                        <img src={pers_photo} alt="vesikalik" loading="lazy" width="" height="" />
                    </div>
                    <div class="md:w-7/12 lg:w-6/12">
                        <h2 class="text-2xl text-white font-bold md:text-4xl">Deniz Işık: Mechanical Engineering Student</h2>
                        <p class="mt-12 text-gray-600 text-left text-sm">
                            I am currently studying Mechanical Engineering at IZTECH while pursuing my passion for software development. With over five years of experience in software projects, I have honed my programming skills and problem-solving abilities. I am eager to gain practical experience in web development and contribute to innovative projects.
                        </p>
                        <p class="mt-4 text-gray-600 text-left text-sm"> 
                            Driven by a growth mindset, I am committed to excellence and constantly seeking opportunities to apply my software expertise. I am excited to expand my knowledge and skills in web development. I am enthusiastic about embracing new challenges and making meaningful contributions to the field.
                        </p>
                    </div>
                </div>
        </div>
    </div>
    )
}