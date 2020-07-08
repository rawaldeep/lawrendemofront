import React, { Component } from 'react';
import Typed from 'react-typed';

export default class Typer extends Component {
    render() {
        return (
            <>
              <p className="text-center"> MORE THAT YOUR&nbsp; 
                <Typed 
                strings={[" MANAGEMENT ASSISTANT.", " LEGAL ASSISTANT.", " JUNIOR ASSOSIATE."]}
                    typeSpeed={40}
                    backSpeed={50} 
                    loop >
                </Typed>
            </p>  
            </>
        )
    }
}

