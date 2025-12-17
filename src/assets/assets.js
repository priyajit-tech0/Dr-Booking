import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpg'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Mohon Ganguly',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mohon Ganguly has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Rihi Sen',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rihi Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. ',
        fees: 600,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Mohit Nair',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Mohit Nair has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Kunal Sharma',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Kunal Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 400,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Pretty Sen',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Pretty Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. S.K. Sharma',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. S.K. Sharma has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rahul Ray',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rahul Ray has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy Kar',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Timothy Kar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 600,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ankita Bera',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ankita Bera has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Joseph Aktar',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Joseph Aktar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 400,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Raima Sen',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Raima Sen has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. R.M. Mondal',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. R.M. Mondal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Soma Banarjee',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Soma Banarjee has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Ali Mondal',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Ali Mondal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 600,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Ahiri Sardar',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ahiri Sardar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 300,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Akash Gaur',
        image: doc16,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Akash Gaur has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 400,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Mitali Basu',
        image: doc17,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mitali Basu has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '398, Ramkrishnapur Road',
            line2: 'Near Jagadighata Market, Kolkata, West Bengal 700125'
        }
    },
]