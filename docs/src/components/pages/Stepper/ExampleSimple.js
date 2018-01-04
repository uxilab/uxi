import React from 'react';
import { Stepper, Step, StepButton } from 'uxi/Stepper';
import { Arrowright } from 'uxi/Icons';

const ExampleSimple = () => (
  <div>
    <ul>
      <li>
        <h3>Stepper (linear | currentStep: 2)</h3>
        <Stepper activeStep={2} connector={<Arrowright />}>
          <Step>
            <StepButton onClick={() => {}} >
                step 1
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 2
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 3
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 4
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 5
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 6
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 7
            </StepButton>
          </Step>
        </Stepper>
      </li>
      <li>
        <h3>Stepper (non-linear | currentStep: 3)</h3>
        <Stepper nonLinear activeStep={3} nowrap>
          <Step>
            <StepButton onClick={() => {}} >
                step 1
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 2
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 3
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 4
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 5
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 6
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => {}}>
                step 7
            </StepButton>
          </Step>
        </Stepper>
      </li>
    </ul>
  </div>
);

export default ExampleSimple;
