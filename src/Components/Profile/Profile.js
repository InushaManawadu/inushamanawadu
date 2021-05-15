import { Typography } from '@material-ui/core';
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator} from '../Timeline/Timeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import resumeData from '../../utils/resumeData';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import CustomButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';
import './Profile.css';
import logo from './download.png';

const CustomTimelineItem = ({title, text, link}) => {
   return (
        <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
            {link ? (
                <Typography>
                    <span className="main_point">{title}:</span>{""}
                    <a href={link} target="-blank">
                        <span className="main_ponit_info">{text}</span>
                    </a>
                </Typography>
            ) : (
                <Typography>
                    <span className="main_point">{title}:</span> <span className="main_ponit_info">{text}</span>
                </Typography>
            )}
        </TimelineContent>
        </TimelineItem>
   )
};

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='name'>
                <Typography className='userName'>{resumeData.name}</Typography>
                <Typography className='title'>Software Engineering Undergraduate</Typography>
            </div>

            <figure className='profileImage'>
                <img src={logo} alt=''/>
            </figure>

            <div className='profile_info'>
                <CustomTimeline icon={<PersonOutlineIcon/>}> 
                    <CustomTimelineItem title="Name" text={resumeData.name}/>
                    <CustomTimelineItem title="Title" text={resumeData.title}/>
                    <CustomTimelineItem title="University" text={resumeData.university}/>
                    <CustomTimelineItem title="Email" text={resumeData.email}/>
                    <CustomTimelineItem title="Phone" text={resumeData.phone}/>
                    {Object.keys(resumeData.socials).map((key) => {
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    })}
                </CustomTimeline>
                <br/>
                <div className='btn_container'>
                <a href='src\text.txt' download> <CustomButton text='Download Cv' icon={<GetAppIcon/>}></CustomButton> </a>
                </div>   
            </div>
        </div>
    )
}

export default Profile
