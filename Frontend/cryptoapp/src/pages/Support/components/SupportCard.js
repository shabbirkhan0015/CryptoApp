import EmailIcon from '@mui/icons-material/Email';
import { FormControl} from '@mui/base/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Input } from '@mui/base/Input';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './SupportCard.css'
import MyForm from './MyForm';

export default function SupportCard(){
    return(

        <div className='supportcontainer'>
            <div className="contactdiv">
                <EmailIcon/>
                <h1>Contact Us</h1>
                <p>Have a question or just want to know more? Feel free to reach out to us.</p>
            </div>
            <div className='supportform'>
                <h3>You will receive response within 24 hours of time of submit.</h3>
                    <div style={{ display: 'flex', flexDirection: 'row' , justifyContent:'space-between', alignSelf:'stretch'}}>
                    <FormControl >
                            <FormLabel className='label'>Name</FormLabel>
                            <Input className="nameinput" placeholder="Enter Your Name.." />
                        </FormControl>
                        <FormControl>
                        <FormLabel className='label'>Surname</FormLabel>
                            <Input className="nameinput" placeholder="Enter Your Surname.." />
                        </FormControl>
                        </div>
                        <FormControl>
                        <FormLabel className='label'>Email</FormLabel>
                        <Input type="email" placeholder="Enter Your Email.." />
                        </FormControl>
                        <FormControl>
                        <FormLabel className='label'>Messagee</FormLabel>
                        <TextareaAutosize minRows={3} placeholder="Enter Your Message.." />
                    <FormControlLabel required control={<Checkbox />} 
                    style={{color:'#5F00D9'}}
                    label="I agree with Terms & Conditions." />
                </FormControl>
            <button className='sendbtn'>Send a Message</button>
            <button className='bookbtn'>Book a Meeting</button>
            </div>
            
        </div>

    )
}