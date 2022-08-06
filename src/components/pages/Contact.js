import React from 'react';
import { useForm } from 'react-hook-form';



export default function Contact() {
   
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      
      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        
        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);
      };


    return(
        <form class="contact" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}/>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp"
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}/>
                      {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" name='message'
                      {...register('message', {
                        required: true
                      })}></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
    </div>
    <button type="submit" className="btn btn-primary btn-overwrite">Submit</button>
</form>
    );
};
