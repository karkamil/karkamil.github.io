import { useContext, useRef, useState } from "react"
import styled from "styled-components"
import Separator from "./Separator"
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import { small } from '../responsive';
import emailjs from 'emailjs-com';
import { ThemeContext } from "../context";


const Container = styled.div`
  min-height: 30vh;
  position: relative;
  padding: 0 12px;
`

const SectionTitle = styled.label`
  font-size: 32px;
  font-weight: 700;
`

const ContactWrapper = styled.div`
  padding: 35px 50px;
  display: flex;
  ${small({flexDirection:"column", padding: "0px 10px"})};
`

const ContactLeft = styled.div`
  flex: 1;
  padding-right: 50px;
  ${small({display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", paddingRight: "0px"})};
`

const ContactTitle = styled.label`
  font-size: 24px;
  font-weight: 600;
  width: 80%;
  ${small({fontSize: "26px", width: "100%", marginTop: "30px"})};
  
`

const MailTo = styled.a`
  text-decoration: none;
  color: black;
`

const ContactInfo = styled.div`

`

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
  white-space: nowrap;
  ${small({margin: "20px 0px", width: "100%"})};
`

const ContImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

const ContactRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ContactDesc = styled.p`
  font-weight: 200;
  ${small({display: "none"})}
`

const Form = styled.form`
  margin-top: 20px;

`

const NameInput = styled.input`
  width: 55%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
  color: ${props => props.darkMode ? "white" : "black"};
  background-color: ${props => props.darkMode ? "#444" : "white"};
`

const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid black;
  color: ${props => props.darkMode ? "white" : "black"};
  background-color: ${props => props.darkMode ? "#444" : "white"};
  resize: none;
`

const SubmitButton = styled.button`
  border: none;
  padding: 8px 16px;
  margin-right: 6px;
  font-size: 24px;
  background-color: #3F6357;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  ${small({fontSize: "16px"})}
`
const DownloadCont = styled.div`
  display: flex;
  justify-content: center;
  ${small({margin: "20px 0px"})}
`

const DownloadButtton = styled.div`
  background-color: #7AD49E;
  padding: 8px 16px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  border-radius: 4px;
  ${small({fontSize: "16px", width: "180px"})}
`

const Download = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(CloudDownloadOutlinedIcon)`
  margin-right: 5px;
`

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  
  // CONTEXT API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault()

    // emailJS
    emailjs.sendForm('service_gilynvi', 'template_yfbo3re', formRef.current, 'user_PkMFYIWew6IhxMaDqiiXx')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Container>
      <Separator />
      <SectionTitle>Contact</SectionTitle>
      <ContactWrapper>
        <ContactLeft>
          <ContactTitle>
            Want to get in touch? Contact me.
          </ContactTitle>
          <ContactInfo>
            <ContactInfoItem>
              <ContImg  src={require("../assets/phone.png").default}/>
              +48 667 208 740
            </ContactInfoItem>
            <ContactInfoItem>
              <ContImg  src={require("../assets/mailth.png").default}/>
              <MailTo style={{color: theme.state.darkMode ? "white" : ""}} href={"mailto:karchut.kamil@gmail.com"}>karchut.kamil@gmail.com</MailTo>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContImg  src={require("../assets/locationth.png").default}/>
              Ustroń, South of Poland
            </ContactInfoItem>
            <ContactInfoItem>
              <ContImg  src={require("../assets/githubth.png").default}/>
              <MailTo style={{color: theme.state.darkMode ? "white" : ""}} href={"https://github.com/karkamil"}>www.github.com/karkamil</MailTo>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContImg  src={require("../assets/linkedinth.png").default}/>
              <MailTo style={{color: theme.state.darkMode ? "white" : ""}} href={"https://www.linkedin.com/in/kamil-karchut-830a48198/"}>www.linkedin.com</MailTo>
            </ContactInfoItem>
          </ContactInfo>
        </ContactLeft>
        <ContactRight>
          <ContactDesc>
            <b>You may send me a message here.</b> I will answer ASAP.
          </ContactDesc>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <NameInput darkMode={darkMode} type={"text"} placeholder={"Name"} name={"user_name"} />
              <NameInput darkMode={darkMode} type={"text"} placeholder={"Subject"} name={"user_subject"} />
              <NameInput darkMode={darkMode} type={"text"} placeholder={"Email"} name={"user_email"} />
              <TextArea darkMode={darkMode} rows={5} placeholder={"Message"} name={"message"}/>
              <SubmitButton style={{color: theme.state.darkMode ? "white" : ""}}>Submit</SubmitButton>
              {done && "Thank you..."}
            </Form>
        </ContactRight>
      </ContactWrapper>
      <DownloadCont>
            <DownloadButtton>
            <Download download href={'cvenkamilkarchut.pdf'} style={{color: theme.state.darkMode ? "white" : ""}}>
              <Icon />
              Download CV
            </Download>
          </DownloadButtton>
      </DownloadCont>
    </Container>
  )
}

export default Contact
