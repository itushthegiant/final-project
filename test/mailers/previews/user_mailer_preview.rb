# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview


    def welcome_email
        @url  = 'http://localhost:4000/login'
        mail(to: User.first.email_address, subject: 'Welcome to My Awesome Site')
      end

end
