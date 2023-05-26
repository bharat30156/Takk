import React, { Component} from 'react';
import './Signup.css';
import {  ACCESS_TOKEN, TagOptions,CountyOptions } from '../../constants';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import Select from 'react-select';
import { useState , useEffect} from 'react';
//import { components } from 'react-select/dist/react-select.cjs.prod';


const QuestionsAfterSignUp = () => {
    const [County, setCounty] = useState('Avon');
    const [interests, setInterests] = useState([]);

    const handleInterestChange = (e) => {
        setInterests(Array.isArray(e) ? e.map(x => x.value) : []);
      }

    const  handleSubmit  = (e) => {
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="welcometakk-title">Welcome to Takk</h1>
                <h3 className="welcome-text">To ensure we can give the best experience and serve you most relevant content please tell us a little more about you</h3>
                   
                <form onSubmit={handleSubmit}>
                    <h3 className={"question-description"}>What are your interests?</h3>
                    <div className="form-item">                  
                      <Select                          
                         isMulti
                         name="interests"
                         isSearchable={true}
                         placeholder={'Select'}
                         options={TagOptions}
                         className="basic-multi-select"
                         classNamePrefix="select"
                         onChange={handleInterestChange}
                         value={TagOptions.filter(obj => interests.includes(obj.value))} // set selected values
                      />
                    </div>

                    <h3 className={"question-description"}>Where do you live?</h3>
                    <div className="form-item">
                      <Select                            
                        options={CountyOptions}  
                        value={{label: County}}  
                        name = 'County'           
                        onChange={(e) => { setCounty(e.value);}}
                      />
                    
                    </div>
                  
             
                    <div className="form-item">
                        <Link to = "/loginpage"><button type="submit" className="btn btn-block btn-primary" >Continue</button></Link>
                    </div>
                    
                </form>     
    
            </div>
        </div>
            
            
    );
    
}




export default QuestionsAfterSignUp