import React from 'react';
import { connect } from 'react-redux';
import {
  AppContext
} from '../../provider/UxiBusinessProvider';
import SessionExpired from './composites/SessionExpired';
import UserFeedbackWrapper from './composites/UserFeedbackWrapper';
import DefaultUserFeedback from './DefaultUserFeedback';

const UserFeedbackProvider = ({
  children,
  sessionExpiredGlobalMessages,
}) => (
  <div>
    <UserFeedbackWrapper>
      <AppContext.Consumer>
        {({ onSessionExpired }) => (
          <div>
            {
              sessionExpiredGlobalMessages &&
              sessionExpiredGlobalMessages.length > 0 &&
              (
                <SessionExpired onSessionExpired={onSessionExpired} />
              )
            }
            <DefaultUserFeedback />
          </div>
        )}
      </AppContext.Consumer>
    </UserFeedbackWrapper>
    {children}
  </div>
);

const mapStateToProps = ({
  userMessage: {
    sessionExpiredGlobalMessages,
  },
 }) => ({
  sessionExpiredGlobalMessages,
});

export default connect(
  mapStateToProps,
)(UserFeedbackProvider);
