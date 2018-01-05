import React from 'react';
import { Stepper, Step, StepButton } from 'uxi/Stepper';
import { Arrowright } from 'uxi/Icons';

const sayHi = () => console.log('Hi')
const ExampleSimple = () => (
  <div>
    <ul>
      <li>
        <h3>Stepper (strictlyLinear | currentStep: 2)</h3>
        <Stepper strictlyLinear activeStep={2} connector={<Arrowright />} nowrap>
          <Step>
            <StepButton onClick={sayHi} >
                step 1
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 2
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 3
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 4
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 5
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 6
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 7
            </StepButton>
          </Step>
        </Stepper>
      </li>
      <li>
        <h3>Stepper (linear | currentStep: 2)</h3>
        <Stepper linear activeStep={2} connector={<Arrowright />} nowrap>
          <Step nowrap>
            <StepButton onClick={sayHi} >
                step 1
            </StepButton>
          </Step>
          <Step nowrap>
            <StepButton onClick={sayHi}>
                step 2
            </StepButton>
          </Step>
          <Step nowrap>
            <StepButton onClick={sayHi}>
                step 3
            </StepButton>
          </Step>
          <Step nowrap>
            <StepButton onClick={sayHi}>
                step 4
            </StepButton>
          </Step>
          <Step nowrap>
            <StepButton onClick={sayHi}>
                step 5
            </StepButton>
          </Step>
          <Step nowrap>
            <StepButton onClick={sayHi}>
                step 6
            </StepButton>
          </Step>
          <Step nowrap>
            <StepButton onClick={sayHi}>
                step 7
            </StepButton>
          </Step>
        </Stepper>
      </li>
      <li>
        <h3>Stepper (non-linear | currentStep: 3)</h3>
        <Stepper activeStep={3} nowrap>
          <Step>
            <StepButton onClick={sayHi} >
                step 1
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 2
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 3
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 4
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 5
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 6
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={sayHi}>
                step 7
            </StepButton>
          </Step>
        </Stepper>
      </li>
    </ul>
  </div>
);

export default ExampleSimple;
