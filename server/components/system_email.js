import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.emailTemplates.siteName = "OAS UI";
Accounts.emailTemplates.from = "Online Aution System Accounts <noreply@oasui.com>";

//System email templates for Verify Account and Reset Password.

Accounts.emailTemplates.verifyEmail.subject = function (user) {
    return "Verify your account.";
};

Accounts.emailTemplates.verifyEmail.text = function (user, url) {
   return "Hi " + user.username + ",\n\n\n"
      + "Thank you for joining. Please click on the link below to verify your account:\n\n"
      + url
      + "\n\n\n\n\n\n"
      + "OAS UI";
};

Accounts.emailTemplates.resetPassword.subject = function (user) {
    return "Forgot password.";
};

Accounts.emailTemplates.resetPassword.text = function (user, url) {
   return "Hi " + user.username + ",\n\n\n"
      + "Please click on the link below to reset your password:\n\n"
      + url
      + "\n\n\n\n\n\n"
      + "OAS UI";
};

Accounts.urls.verifyEmail = (token) => {
  return Meteor.absoluteUrl('#/app/shop/verify/' + token);
};

Accounts.urls.resetPassword = (token) => {
  return Meteor.absoluteUrl('#/app/reset/' + token);
};
